angular
	.module('app.controllers')
	.controller('FooterController', [
		'$scope', '$location',
		function ($scope, $location) {
			$scope.changePath = function (path) {
				var _this = this;
				//_this.$location.path(path);
			};
		}
	]);
