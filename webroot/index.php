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
		<div id="googleMap" latitude="43.074688" longitude="-89.384294" ng-controller="map"></div>

		<section id="itemList" ng-controller="itemsList" class="panel panel-primary">
			<header class="panel-heading">Panel heading without title</header>
			<div class="panel-body">
				<input name="sdfs" />
			</div>
			<div class="list-group">
				<a ng-repeat="item in items" ng-click="click(item)" title="Click to show {{item.name}}" class="list-group-item">{{item.name}}</a>
			</div>
		</section>

		<div class="wraper ng-view">view</div>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<script src="//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	<script src="/js/vendor/angular.min.js"></script>
	<script src="/js/vendor/angular-route.min.js"></script>
	<script src="/js/app.js"></script>
	<script src="/js/controllers/editItem.js"></script>
	<script src="/js/controllers/itemsList.js"></script>
	<script src="/js/controllers/map.js"></script>
	<script src="/js/services/waypointsService.js"></script>
</body>
</html>