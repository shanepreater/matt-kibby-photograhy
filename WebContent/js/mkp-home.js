/**
 * Home view module for the Matt Kibby Photograpthy website.
 */
(function(){
	//Define the name of this module. 
	//                              Name     List of modules that this module depends on.
	var homeModule = angular.module("home", ["carousel"]);
	
	//Define the page controller which is simple as the content is pretty much static for this page.
	var HomeController = homeModule.controller("HomeController", ['$location', '$http', '$log', '$location', '$scope', function($location, $http, $log , $location, $scope) {
		$scope.carouselImages = [];
		
		$log.debug("Loading the carousel images for home.");
		$http.get("dynamic-content/carouselImages.json")
			.success(function(data){
				$log.info("Received ("+data.length+") carousel images: " + data);
				$scope.carouselImages = data;
		});
		
		this.carouselItems = function() {
			$log.debug("Returning the carousel items");
			return $scope.carouselImages;
		}
	}]);
})();