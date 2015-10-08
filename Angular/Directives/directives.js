angular
	.module('app.directives')
	.directive('header', function () {
		return {
			restrict: 'A',
			templateUrl: './Angular/Directives/Header/Header.html',
			replace: true
		};
	})
	.directive('footer', function () {
		return {
			restrict: 'A',
			templateUrl: './Angular/Directives/Footer/Footer.html',
			replace: true
		};
	});