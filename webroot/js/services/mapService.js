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
});