angular.module('poimod').controller('map', function($scope, waypointsService, mapService, $attrs) {
	var mapArgs = {
		zoom: 15,
		center: new google.maps.LatLng($attrs.latitude, $attrs.longitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP,

		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_CENTER
		}
	};
	//
	// $scope.mapStyle = [{
	// "stylers": [{
	// "hue": "#0066ff"
	// }, {
	// "saturation": -34
	// }]
	// }];

	var map = new google.maps.Map(document.getElementById('googleMap'), mapArgs);
	//mapService.setMap(map);

});