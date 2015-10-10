angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.filters', []);

angular.module("app", [
		'app.controllers',
		'app.directives',
		'app.filters',
		'ngRoute'
	])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: './Angular/Pages/Home/Home.html',
			controller: 'Home.Controller'
		});

		$routeProvider.when('/About', {
			templateUrl: './Angular/Pages/About/About.html'
			//controller: 'About.Controller'
		});

		$routeProvider.when('/Projects', {
			templateUrl: './Angular/Pages/Projects/Projects.html'
			//controller: 'Projects.Controller'
		});

		$routeProvider.when('/Projects/aptlyfe', {
			templateUrl: './Angular/Pages/Projects/aptlyfe.html'
			//controller: 'Projects.Controller'
		});
		$routeProvider.when('/Projects/CprE288', {
			templateUrl: './Angular/Pages/Projects/cpre288.html'
			//controller: 'Projects.Controller'
		});
		
		$routeProvider.when('/Contact', {
			templateUrl: './Angular/Pages/Contact/Contact.html'
			//controller: 'Contact.Controller'
		});

		$routeProvider.otherwise({
			redirectTo: '/'
		});
	}]);
