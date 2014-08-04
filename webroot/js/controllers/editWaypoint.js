angular.module('poimod').controller('editWaypoint', function($scope, $routeParams, waypointsService, $location, markersService) {
	$scope.id = $routeParams.id;
	$scope.waypoint = waypointsService.getById($routeParams.id);
	$scope.marker = markersService.getById($routeParams.id);

	var waypointCopy = {
		name: $scope.waypoint.name,
		lat: $scope.waypoint.lat,
		lng: $scope.waypoint.lng
	};

	$scope.cancel = function() {
		$scope.waypoint.name = waypointCopy.name;
		$scope.waypoint.lat = waypointCopy.lat;
		$scope.waypoint.lng = waypointCopy.lng;
	};

	$scope.remove = function() {
		waypointsService.removeById($scope.id);
	};

	$scope.done = function() {
		waypointsService.save();
		$location.path('/');
	};
	// $scope.ee = 'id: ' + $routeParams.id;
});