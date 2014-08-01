angular.module('poimod').controller('editWaypoint', function($scope, $routeParams, waypointsService, $location) {
	$scope.id = $routeParams.id;
	$scope.waypoint = waypointsService.getById($routeParams.id);

	var waypointCopy = {
		name: $scope.waypoint.name,
		lat: $scope.waypoint.lat,
		lon: $scope.waypoint.lon
	};

	$scope.cancel = function() {
		$scope.waypoint.name = waypointCopy.name;
		$scope.waypoint.lat = waypointCopy.lat;
		$scope.waypoint.lon = waypointCopy.lon;
	};

	$scope.remove = function() {
		waypointsService.removeById($scope.id);
	};

	$scope.done = function() {
		$location.path('/');
	};
	// $scope.ee = 'id: ' + $routeParams.id;
});