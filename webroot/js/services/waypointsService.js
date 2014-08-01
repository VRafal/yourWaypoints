// http://www.topografix.com/gpx_manual.asp

angular.module('poimod').service('waypointsService', function() {
	this.nextId = 3;
	this.waypoints = [{
		id: 1,
		name: 'pierwszy',
		lat: '50.312858',
		lon: '16.466479'
	}, {
		id: 2,
		name: 'drugi',
		lat: '50.168971',
		lon: '16.704033'
	}];

	this.add = function(waypoint) {
		if (waypoint.name == null) {
			waypoint.name = "New waypoint " + this.nextId;
		}

		waypoint.id = this.nextId;
		this.waypoints.push(waypoint);
		this.nextId++;
	};

	this.removeById = function(id) {
		for (var q = 0; q < this.waypoints.length; q++) {
			if (this.waypoints[q].id == id) {
				this.waypoints.splice(q, 1);
				break;
			}
		}
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
	};
});