var pm = angular.module('poimod', ['ngRoute']);
pm.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'views/index.html',
		controller: 'MyCtrl1'
	});
	$routeProvider.when('/view2', {
		templateUrl: 'partials/partial2.html',
		controller: 'MyCtrl2'
	});
	$routeProvider.otherwise({
		redirectTo: '/view1'
	});
}]);
