/**
 * @author: Rafał Bernaczek ak. VRB
 * @date: Date: 05.08.2014
 */
angular.module('poimod').controller('save', function($scope, $location, $http, waypointsService, $window) {
	$scope.desc = 'Saving ...';
	$scope.closeButtonTxt = 'Cancel';

	$scope.cancel = function() {
		$location.path('/');
	};

	var request = $http({
		method: 'post',
		url: 'createGPX.php',
		data: waypointsService.waypoints,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	request.success(function(html) {
		$scope.desc = 'Your gpx file is available here:';
		$scope.file = html;
		$scope.closeButtonTxt = 'Close';
	});

});