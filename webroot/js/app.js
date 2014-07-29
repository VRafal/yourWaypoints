var pm = angular.module('poimod', ['ngRoute']);

pm.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {});
	$routeProvider.when('/editItem/:id', {
		templateUrl: 'views/editItem.html',
		controller: 'editItem'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);

pm.controller('appWraper', function($scope, $locale) {
	//console.log($scope);
});

pm.controller('MyCtrl2', function($scope, $locale) {
	//console.log($scope);
	$scope.ee = "ciach";
});