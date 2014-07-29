angular.module('poimod').controller('itemsList', function($scope, $locale, waypointsService) {
	$scope.items = waypointsService.waypoints;
	$scope.click = function(item){
		//alert('sdfsd ' + item.id);
		//
		waypointsService.add('sdfsdf');
	};
	//console.log($locale);
});