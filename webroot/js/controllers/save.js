/**
 * @author: Rafał Bernaczek ak. VRB
 * @date: Date: 05.08.2014
 */
angular.module('poimod').controller('save', function($scope, $location) {
	$scope.cancel = function() {
		$location.path('/');
	};
});