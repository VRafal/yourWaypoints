angular.module('poimod', ['ngRoute', 'angularFileUpload'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {})
			.when('/edit/:id', {
				templateUrl: 'views/editWaypoint.html',
				controller: 'editWaypoint',
				resolve: function($q, $location) {
					console.log($location);
				}
			})
			.when('/upload', {
				templateUrl: 'views/upload.html',
				controller: 'upload'
			})
			.when('/save', {
				templateUrl: 'views/save.html',
				controller: 'editItem'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);