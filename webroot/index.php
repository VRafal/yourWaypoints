<!DOCTYPE HTML>
<html class="no-js" ng-app="poimod">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Test</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/normalize.css">
	<link rel="stylesheet" href="/css/fonts.css">
	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="/css/print.css">
	<script src="/js/vendor/modernizr-2.7.1.min.js"></script>
</head>

<body>
	<!--[if lt IE 8]>
		<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->

	<div id="#container">
		<div id="googleMap" latitude="51.111681" longitude="17.069111" ng-controller="map"></div>

		<section id="weypointsList" ng-controller="weypointsList" class="panel panel-primary">
			<header class="panel-heading">Waypoints</header>
			<div class="panel-body">
				<div class="btn-group">
					<button type="button" class="btn btn-default" ng-click="addNew()">Add new</button>
					<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
						<span class="caret"></span>
						<span class="sr-only">Toggle Dropdown</span>
					</button>
					<ul class="dropdown-menu dropdown-menu-right" role="menu">
						<li><a href="#/upload" title="Upload new list from local file">Upload</a></li>
						<li><a href="#/save" title="Save this list as file">Save</a></li>
						<li class="divider"></li>
						<li><a href="#/" ng-click="clearList()">Clear list</a></li>
						<!-- li class="divider"></li>
						<li><a ng-click="debug()">Debug</a></li>
						<li><a ng-click="test1()">Test1</a></li -->
					</ul>
				</div>
				<!-- div class="input-group">
					<input type="text" ng-model="qeryFilter" class="form-control" placeholder="filter" />
					<span class="input-group-btn">
						<button class="btn btn-default" type="button">Clear</button>
					</span>
				</div -->
			</div>
			<div class="list-group">
				<a ng-repeat="item in items" href="#/edit/{{item.id}}" title="Click to show {{item.name}}" class="list-group-item">{{item.name}}</a>
				<p ng-show="!items.length" class="list-group-item">List is empty <span class="label label-default">New</span></p>
			</div>
		</section>

		<div id="viewPanel" class="panel panel-primary ng-view">view</div>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<script src="//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	<script src="/js/vendor/angular.min.js"></script>
	<script src="/js/vendor/angular-route.min.js"></script>
	<script src="/js/vendor/angular-file-upload.min.js"></script>
	<script src="/js/app.js"></script>
	<script src="/js/controllers/editWaypoint.js"></script>
	<script src="/js/controllers/weypointsList.js"></script>
	<script src="/js/controllers/map.js"></script>
	<script src="/js/controllers/upload.js"></script>
	<script src="/js/controllers/save.js"></script>
	<script src="/js/services/mapService.js"></script>
	<script src="/js/services/waypointsService.js"></script>
	<script src="/js/services/markersService.js"></script>
</body>
</html>