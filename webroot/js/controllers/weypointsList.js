angular.module('poimod')
	.controller('weypointsList', function($scope, $location, waypointsService) {

		$scope.items = waypointsService.waypoints;

		$scope.clearList = function() {
			waypointsService.clear();
		};

		$scope.addNew = function() {
			waypointsService.add({});
			$location.path('/');
		};

	});