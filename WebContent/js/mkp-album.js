/**
 * Module to show the various different albums that are available.
 */
(function(){
	var album = angular.module("album", ["ngSanitize"]);
	
	var AlbumController = ['$routeParams', '$http', '$log', '$scope', function($routeParams, $http, $log, $scope){
		var scopedThis = this;
		$scope.albumName = $routeParams.album;
		
		this.filterImages = function(album, images) {
			album.images = [[],[],[] ,[]];
			for(var i = 0; i < images.length; i++)
			{
				var image = images[i];
				var remainder = i % 4;
				if(remainder == 0)
				{
					album.images[0].push(image);
				} else if(remainder == 1) {
					album.images[1].push(image);
				} else if(remainder == 2) {
					album.images[2].push(image);
				} else {
					album.images[3].push(image);
				}
			}
		}
		
		$http.get("dynamic-content/" + $scope.albumName + ".json")
		.success(function(data){
			$log.info("Received album data for " + $scope.albumName + ": " + data);
			scopedThis.filterImages(data, data.images);
			$scope.album = data;
		});
	}];
	
	album.controller("AlbumController", AlbumController);
})();