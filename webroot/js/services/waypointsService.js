/**
 * @author: Rafał Bernaczek ak. VRB
 * @date: Date: 01.08.2014
 * @url: http://www.topografix.com/gpx_manual.asp
 */

angular.module('poimod').service('waypointsService', function(markersService, mapService) {

	this.nextId = localStorage.getItem("poimodNextId") || 1;
	this.waypoints = JSON.parse(localStorage.getItem("poimodWaypoints")) || [];

	this.showMarkers = function() {
		if (this.waypoints.length > 0) {
			for (var q = 0; q < this.waypoints.length; q++) {
				markersService.addMarker(this.waypoints[q]);
			}
		}
	};

	this.save = function() {
		localStorage.setItem("poimodWaypoints", JSON.stringify(this.waypoints, function(key, val) {
			if (key == '$$hashKey') {
				return undefined;
			}
			return val;
		}));
		localStorage.setItem("poimodNextId", this.nextId);
	};

	/**
	 * Dodaje waypoit
	 *
	 * @TODO: dodac parametr umozliwiajacy dodawanie bez save na koncu aby umozliwic szybsze importowanie
	 */
	this.add = function(waypoint) {
		waypoint.id = this.nextId;
		this.waypoints.push(waypoint);
		this.nextId++;
		this.save();

		markersService.addMarker(waypoint);
	};

	this.createNew = function() {
		this.waypoints.push({
			id: this.nextId,
			name: "New waypoint " + this.nextId,
			lat: mapService.getMap().getCenter().lat(),
			lng: mapService.getMap().getCenter().lng(),
			isNew: true
		});
		this.nextId++;
		this.save();

		markersService.addMarker(this.waypoints[this.waypoints.length - 1]);
	}

	/**
	 * Uzuwa na podstawie id
	 */
	this.removeById = function(id) {
		for (var q = 0; q < this.waypoints.length; q++) {
			if (this.waypoints[q].id == id) {
				this.waypoints.splice(q, 1);
				break;
			}
		}
		this.save();

		markersService.removeById(id);
	};

	/**
	 * Znajduje waypoit na podstawie id
	 */
	this.getById = function(id) {
		for (var q = 0; q < this.waypoints.length; q++) {
			if (this.waypoints[q].id == id) return this.waypoints[q];
		}
		return null;
	};

	this.clear = function() {
		this.waypoints.length = 0;
		this.nextId = 1;
		this.save();

		markersService.removeAll();
	};
});