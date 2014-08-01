// http://www.topografix.com/gpx_manual.asp

angular.module('poimod').service('waypointsService', function() {

	this.nextId = localStorage.getItem("poimodNextId") || 1;
	this.waypoints = JSON.parse(localStorage.getItem("poimodWaypoints")) || [];

	this.save = function() {
		localStorage.setItem("poimodWaypoints", JSON.stringify(this.waypoints));
		localStorage.setItem("nextId", this.nextId);
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
	};

	this.removeById = function(id) {
		for (var q = 0; q < this.waypoints.length; q++) {
			if (this.waypoints[q].id == id) {
				this.waypoints.splice(q, 1);
				break;
			}
		}
		this.save();
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
	};
});