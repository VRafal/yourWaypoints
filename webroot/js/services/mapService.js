angular.module('poimod').service('mapService', function() {
	var _map;

	this.setMap = function(map) {
		_map = map;
		//waypointsService.showMarkers();
	}

	this.getMap = function() {
		return _map;
	}
});