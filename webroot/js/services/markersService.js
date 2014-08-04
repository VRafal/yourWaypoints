/**
 * @docs: https://developers.google.com/maps/documentation/javascript/reference?csw=1#Marker
 */
angular.module('poimod').service('markersService', function(mapService, $location, $rootScope) {
	var _markers = [];
	var activeMarker = null;

	var Marker = function(waypoint, map){
		// @doc: https://developers.google.com/maps/documentation/javascript/symbols
		var getIcon = function(color, scale) {
			return {
				//path: 'm495 715q81-81 81-197t-82-197q-8-9-21-23t-47-59-60-92-48-113-22-131q0 63-20 130t-49 115-58 90-49 62l-20 21q-82 81-82 197t82 197 197 82 198-82z m-199-308q47 0 80 33t33 78-33 79-80 33q-45 0-77-33t-33-79 33-78 77-33z',
				path: 'm250 750q104 0 177-73t73-177q0-106-62-243t-126-223l-62-84q-10 12-27 35t-60 89-76 130-60 147-27 149q0 104 73 177t177 73z m0-388q56 0 96 40t40 96-40 95-96 39-95-39-39-95 39-96 95-40z',
				fillColor: color,
				fillOpacity: 1,
				strokeColor: '#000',
				strokeWeight: .5,
				scale: scale,
				rotation: 180
			}
		}

		var getIconEdit = function(){
			return getIcon('#ff4b38', .05);
		}
		var getIconNormal = function(){
			return getIcon('#378afa', .035);
		}

		var markerPosition = new google.maps.LatLng(waypoint.lat, waypoint.lng);
		var m = new google.maps.Marker({
			position: markerPosition,
			map: mapService.getMap(),
			icon: getIconNormal(),
			animation: google.maps.Animation.DROP,
			title: waypoint.name
		});

		google.maps.event.addListener(m, 'click', function() {
			$rootScope.$apply(function() {
				$location.path('/edit/' + waypoint.id);
			});
		});

		this.id = waypoint.id;

		this.remove = function(){
			m.setMap(null);
			this.id += 'removed';
		}

		this.startDrag = function() {
			m.setIcon(getIconEdit());
		}

		this.stopDrag = function() {
			m.setIcon(getIconNormal());
		}

	};

	this.getById = function(id) {
		for (var q = 0; q < _markers.length; q++) {
			if (_markers[q].id == id) return _markers[q];
		}
		return false;
	}

	this.addMarker = function(waypoint) {
		var marker = new Marker(waypoint, mapService.getMap());
		_markers.push(marker);
		return marker;
	}

	this.removeById = function(id) {
		for (var q = 0; q < _markers.length; q++) {
			if (_markers[q].id == id) {
				_markers[q].remove();
				_markers.splice(q, 1);
				break;
			}
		}
	};

	this.removeAll = function() {
		for (var q = 0; q < _markers.length; q++) {
			_markers[q].remove();
		}
		_markers.length = 0;
	};
});