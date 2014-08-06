<?php
/**
 * @author Rafał Bernaczek ak. VRB
 * @example http://www.misovic.net/projects/
 *
 */
?><!DOCTYPE HTML>
<html class="no-js" ng-app="poimod">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>POImod - beta</title>
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

		<section id="weypointsListPanel" ng-controller="weypointsList" class="panel panel-primary">
			<header class="panel-heading">Waypoints</header>
			<div class="panel-body">
				<div class="btn-group">
					<button type="button" class="btn btn-default" ng-click="addNew()">Add new</button>
					<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
						<span class="caret"></span>
						<span class="sr-only">Toggle Dropdown</span>
					</button>
					<ul class="dropdown-menu dropdown-menu-right" role="menu">
						<li><a href="#/upload" title="Upload new list from local file">Upload GPX file</a></li>
						<li ng-class="(!items.length) ? 'disabled' : ''" class=""><a href="#/save" title="Save this list as file">Save GPX file</a></li>
						<li class="divider"></li>
						<li><a href="#/" ng-click="clearList()">Clear list</a></li>
					</ul>
				</div>
			</div>
			<div id="weypointsList" class="list-group">
				<a ng-repeat="item in items" href="#/edit/{{item.id}}" title="Click to show {{item.name}}" class="list-group-item">{{item.name}} <span ng-show="item.isNew" class="label label-default">New</span></a>
				<p ng-show="!items.length" class="list-group-item">List is empty</p>
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