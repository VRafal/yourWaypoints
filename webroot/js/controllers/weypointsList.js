angular.module('poimod')
	.controller('weypointsList', function($scope, $locale, waypointsService) {
		$scope.items = waypointsService.waypoints;
		$scope.click = function(item) {
		// alert('sdfsd ' + item.id);
		};
		$scope.addNew = function() {
			waypointsService.add('sdfsdf' + Math.random());
		};
	});