/**
 * @docs: https://developers.google.com/maps/documentation/javascript/reference?csw=1#Marker
 */
angular.module('poimod').service('markersService', function(mapService, $location, $rootScope) {
	var _markers = [];

	this.getById = function(id) {
		for (var q = 0; q < _markers.length; q++) {
			if (_markers[q].waypointId == id) return _markers[q];
		}
		return false;
	}

	this.addMarker = function(waypoint) {
		var markerPosition = new google.maps.LatLng(waypoint.lat, waypoint.lng);

		var m = new google.maps.Marker({
			position: markerPosition,
			map: mapService.getMap(),
			// icon: params.iconDir + ((marker.ico != undefined)?(marker.ico):(category.ico)),
			// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Symbol
//			icon: {
//				// https://developers.google.com/maps/documentation/javascript/3.exp/reference#SymbolPath
//				path: google.maps.SymbolPath.DEFAULT,
//				strokeColor: "red",
//				scale: 3
//			},
			icon: {
		        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
		        fillColor: '#ff0000',
		        fillOpacity: 1,
		        strokeColor: '#000',
		        strokeWeight: 1,
		        scale: 1
		   },
			animation: google.maps.Animation.DROP,
			title: waypoint.name
		});
		m.waypointId = waypoint.id;
		// m.setIcon({
		// fillColor: '#FF0000'
		// });
		// mapService.getMap().styleIcon.set("color","#00ff00");

		google.maps.event.addListener(m, 'click', function() {
			$rootScope.$apply(function() {
				$location.path('/edit/' + waypoint.id);
			});
		});

		_markers.push(m);
	}

	this.removeById = function(id) {
		for (var q = 0; q < _markers.length; q++) {
			if (_markers[q].waypointId == id) {
				_markers[q].setMap(null);
				_markers.splice(q, 1);
				break;
			}
		}
	};

	this.removeAll = function() {
		for (var q = 0; q < _markers.length; q++) {
			_markers[q].waypointId += 'removed';
			_markers[q].setMap(null);
		}
		_markers.length = 0;
	};
});