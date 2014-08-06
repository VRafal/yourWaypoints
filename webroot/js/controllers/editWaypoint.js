/**
 * @author: Rafał Bernaczek ak. VRB
 * @date: Date: 29.07.2014
 */
angular.module('poimod').controller('editWaypoint', function($scope, $routeParams, waypointsService, $location, markersService, $rootScope) {
	$scope.id = $routeParams.id;
	$scope.waypoint = waypointsService.getById($routeParams.id);


	// Marker
	$scope.marker = markersService.getById($routeParams.id);
	$scope.marker.startDrag();

	var clickListenerHandle = google.maps.event.addListener($scope.marker.m, 'dragend', function(e) {
		$scope.waypoint.lat = e.latLng.lat();
		$scope.waypoint.lng = e.latLng.lng();
		$scope.$apply();
	});

	$rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl){
		$scope.marker.stopDrag();
		google.maps.event.removeListener(clickListenerHandle);
	});

	// TODO:
	// $scope.$watch('waypoint.lat', function(newVal, oldVal){
	// console.log('d======');
	// console.log(newVal);
	// });

	var waypointCopy = {
		name: $scope.waypoint.name,
		lat: $scope.waypoint.lat,
		lng: $scope.waypoint.lng
	};

	$scope.cancel = function() {
		$scope.waypoint.name = waypointCopy.name;
		$scope.waypoint.lat = waypointCopy.lat;
		$scope.waypoint.lng = waypointCopy.lng;
		$scope.marker.stopDrag();
		$scope.marker.setPosition($scope.waypoint);
	};

	$scope.remove = function() {
		$scope.marker.stopDrag();
		waypointsService.removeById($scope.id);
	};

	$scope.done = function() {
		$scope.waypoint.isNew = false;
		$scope.marker.stopDrag();
		waypointsService.save();
		$location.path('/');
	};
});