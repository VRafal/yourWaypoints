// http://www.topografix.com/gpx_manual.asp

angular.module('poimod').service('waypointsService', function(markersService) {

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
		localStorage.setItem("poimodWaypoints", JSON.stringify(this.waypoints));
		localStorage.setItem("poimodNextId", this.nextId);
	};

	// TODO: dodac parametr umozliwiajacy dodawanie bez save na koncu aby umozliwic szybsze importowanie
	this.add = function(waypoint) {
		if (waypoint.name == null) {
			waypoint.name = "New waypoint " + this.nextId;
		}

		waypoint.id = this.nextId;
		this.waypoints.push(waypoint);
		this.nextId++;
		this.save();

		markersService.addMarker(waypoint);
	};

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