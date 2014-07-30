angular.module('poimod')
	.controller('editWaypoint', function($scope, $routeParams, waypointsService) {
		$scope.id = $routeParams.id;
		$scope.waypoint = waypointsService.getById($routeParams.id);
		//$scope.ee = 'id: ' + $routeParams.id;
	});