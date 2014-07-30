// http://www.topografix.com/gpx_manual.asp

angular.module('poimod').service('waypointsService', function() {
	this.nextId = 3;
	this.waypoints = [{
		id: 1,
		name: 'pierwszy'
	}, {
		id: 2,
		name: 'drugi'
	}];

	this.add = function(name) {
		this.waypoints.push({
			id: this.nextId,
			name: name
		});
		this.nextId++;
	};

	this.getById = function(id) {
		for (var q = 0; q < this.waypoints.length; q++) {
			if (this.waypoints[q].id == id) return this.waypoints[q];
		}
		return null;
	}
});