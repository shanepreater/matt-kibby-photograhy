/**
 * Entry point module for the Matt Kibby Photograpthy website.
 */
// Don't worry about this it's a namespace wrapper to ensure that we don't bleed
// names of variables all over the place. You will probably see this alot.
(function() {
	var app = angular.module("mkp", ["ngRoute", "home", "navigation"]);
	
	//Define the routes (bookmarkable pages which will be in the site.
	app.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
	    	when('/', {
	    		templateUrl: 'views/home.html',
	    		controller: 'HomeController',
	    		controllerAs: 'homeController'
	    	}).
	      /*when('/contact', {
	        templateUrl: 'views/contact.html',
	        controller: 'ContactController',
	        controllerAs: 'contactController'
	      }).
	      when('/portfolio/:album', {
	        templateUrl: 'views/album.html',
	        controller: 'AlbumController',
	        controllerAs: 'albumController'
	      }).*/
	      otherwise({
	        redirectTo: '/'
	      });
	  }   
	]);
})();