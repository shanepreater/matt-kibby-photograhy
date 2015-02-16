/**
 * Carousel component which will show the rotating set of images.
 */
(function(){
	var scopedThis = this;
	
	var carousel = angular.module("carousel", []);
	
	var CarouselController = ['$location', '$interval', '$log', '$scope',function($location, $interval, $log, $scope){
		var scopedThis = this;
		$scope.activeIndex = 0;
		
		
		this.setActiveImage = function(imageIndex)
		{
			if($scope.items)
			{
				$scope.items[$scope.activeIndex].active = false;
				
				if(imageIndex >= $scope.items.length) {
					$scope.activeIndex = 0;
				} else if(imageIndex < 0) {
					$scope.activeIndex = $scope.items.length - 1;
				} else {
					$scope.activeIndex = imageIndex;
				}
				
				$scope.items[$scope.activeIndex].active = true;
			}
		}
		
		this.isActiveImage = function(imageIndex)
		{
			return $scope.items[imageIndex].active;
		}
		
		this.setActivePage = function(activePage) {
			$location.path(activePage);
			$location.search({});
		}
		
		this.previousImage = function()
		{
			scopedThis.setActiveImage($scope.activeIndex - 1);
		}
		
		this.nextImage = function() 
		{
			scopedThis.setActiveImage($scope.activeIndex + 1);
		}

		$interval(this.nextImage, 5000);
	}];

	carousel.directive("carousel", function(){
		return {
			restrict: "E",
			scope: {
				items : "="
			},
			templateUrl: "fragments/carousel.frag.html",
			controller: CarouselController,
			controllerAs: 'controller'
		};
	});
	
	//Finally add the event stuff to make the carousel work.
	$('.carousel').carousel({
        interval: 5000,
        pause: "hover",
        wrap: true
    })
    .on('click', '.carousel-control', handle_nav);

	var handle_nav = function(e) {
		e.preventDefault();
		var nav = $(this);
		nav.parents('.carousel').carousel(nav.data('slide'));
	}
})();