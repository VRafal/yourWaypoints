angular.module('poimod').controller('editWaypoint', function($scope, $routeParams, waypointsService, $location, markersService) {
	$scope.id = $routeParams.id;
	$scope.waypoint = waypointsService.getById($routeParams.id);

	$scope.marker = markersService.getById($routeParams.id);
	$scope.marker.startDrag();

	//console.log($location);

	var waypointCopy = {
		name: $scope.waypoint.name,
		lat: $scope.waypoint.lat,
		lng: $scope.waypoint.lng
	};

	$scope.cancel = function() {
		$scope.marker.stopDrag();
		$scope.waypoint.name = waypointCopy.name;
		$scope.waypoint.lat = waypointCopy.lat;
		$scope.waypoint.lng = waypointCopy.lng;
	};

	$scope.remove = function() {
		$scope.marker.stopDrag();
		waypointsService.removeById($scope.id);
	};

	$scope.done = function() {
		$scope.marker.stopDrag();
		waypointsService.save();
		$location.path('/');
	};
	// $scope.ee = 'id: ' + $routeParams.id;
});