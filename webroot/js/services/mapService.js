/**
 * @author: Rafał Bernaczek ak. VRB
 * @date: Date: 01.08.2014
 */
angular.module('poimod').service('mapService', function() {
	var _map;

	this.setMap = function(map) {
		_map = map;
		// waypointsService.showMarkers();
	}

	this.getMap = function() {
		return _map;
	}

	this.centerMap = function(waypointsList){
		var latlngbounds = new google.maps.LatLngBounds();
		for (q=0; q<waypointsList.length; q++){
			var latLng = new google.maps.LatLng(waypointsList[q].lat, waypointsList[q].lng);
			latlngbounds.extend(latLng);
		}
		_map.setCenter(latlngbounds.getCenter());
		_map.fitBounds(latlngbounds);
	}
});