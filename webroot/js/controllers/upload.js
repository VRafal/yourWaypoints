/**
 * https://github.com/nervgh/angular-file-upload/ https://github.com/leon/angular-upload https://github.com/uor/angular-file https://github.com/danialfarid/angular-file-upload https://github.com/twilson63/ngUpload
 *
 * @lib: https://github.com/nervgh/angular-file-upload/
 */
angular.module('poimod').controller('upload', function($scope, waypointsService, FileUploader, $location) {
	$scope.test = 'sdsdsd';
	$scope.cancel = function() {
		$location.path('/');
	};
	// $(":file").filestyle();

	var uploader = $scope.uploader = new FileUploader({
		url: '/upload.php'
	});

	uploader.filters.push({
		name: 'imageFilter',
		fn: function(item, options) {
			return item.name.substr(item.name.length - 3).toLowerCase() == 'gpx';
		}
	});

//	uploader.onWhenAddingFileFailed = function(item /* {File|FileLikeObject} */, filter, options) {
//		console.info('onWhenAddingFileFailed', item, filter, options);
//	};
//	uploader.onAfterAddingFile = function(fileItem) {
//		console.info('onAfterAddingFile', fileItem);
//	};
//	uploader.onAfterAddingAll = function(addedFileItems) {
//		console.info('onAfterAddingAll', addedFileItems);
//	};
//	uploader.onBeforeUploadItem = function(item) {
//		console.info('onBeforeUploadItem', item);
//	};
//	uploader.onProgressItem = function(fileItem, progress) {
//		console.info('onProgressItem', fileItem, progress);
//	};
//	uploader.onProgressAll = function(progress) {
//		console.info('onProgressAll', progress);
//	};
//	uploader.onSuccessItem = function(fileItem, response, status, headers) {
//		console.info('onSuccessItem', fileItem, response, status, headers);
//	};
	uploader.onErrorItem = function(fileItem, response, status, headers) {
		console.info('onErrorItem', fileItem, response, status, headers);
	};
//	uploader.onCancelItem = function(fileItem, response, status, headers) {
//		console.info('onCancelItem', fileItem, response, status, headers);
//	};
	uploader.onCompleteItem = function(fileItem, response, status, headers) {
		//console.info('onCompleteItem', fileItem, response, status, headers);
		console.info(response);
	};
	uploader.onCompleteAll = function() {
		//console.info('onCompleteAll');
		//$location.path('/');
	};

});
