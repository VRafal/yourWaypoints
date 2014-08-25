/**
 * @author: Rafał Bernaczek ak. VRB
 * @date: Date: 29.07.2014
 */
angular.module('poimod').controller('map', function($scope, waypointsService, mapService, $attrs) {
	var mapArgs = {
		zoom: 8,
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

	var map = new google.maps.Map(document.getElementById('googleMap'), mapArgs);
	mapService.setMap(map);
	waypointsService.showMarkers();
	mapService.centerMap(waypointsService.waypoints);

});