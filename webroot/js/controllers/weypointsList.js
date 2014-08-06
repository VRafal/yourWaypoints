/**
 * @author: Rafał Bernaczek ak. VRB
 * @date: Date: 29.07.2014
 */
angular.module('poimod').controller('weypointsList', function($scope, $location, waypointsService) {

	$scope.items = waypointsService.waypoints;

	$scope.clearList = function() {
		waypointsService.clear();
	};

	$scope.addNew = function() {
		waypointsService.createNew();
		$location.path('/');
	};

	$scope.debug = function() {
		console.log('---------------');
		angular.forEach(waypointsService.waypoints, function(o) {
			console.log(o.lat + ', ' + o.lng);
		});
	};

	//$('#ssdfffsdf').tooltip();
});