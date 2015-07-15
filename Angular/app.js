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
		});

		$routeProvider.when('/Projects', {
			templateUrl: './Angular/Pages/Projects/Projects.html'
		});

		$routeProvider.when('/Projects/DrawNear', {
			templateUrl: './Angular/Pages/Projects/DrawNear.html'
		});
		$routeProvider.when('/Projects/CprE288', {
			templateUrl: './Angular/Pages/Projects/cpre288.html'
		});
		$routeProvider.when('/Projects/aptlyfe', {
			templateUrl: './Angular/Pages/Projects/aptlyfe.html'
		});
		$routeProvider.when('/Projects/2048inC', {
			templateUrl: './Angular/Pages/Projects/2048inC.html'
		});
		
		$routeProvider.when('/Contact', {
			templateUrl: './Angular/Pages/Contact/Contact.html'
		});

		$routeProvider.otherwise({
			redirectTo: '/'
		});
	}]);
