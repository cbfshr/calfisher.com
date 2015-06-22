var Home;
(function (Home) {
	var Controller = (function () {
		function Controller($scope, $http, $location, $routeParams, $filter, $anchorScroll) {
			this.$scope = $scope;
			this.$http = $http;
			this.$location = $location;
			this.$routeParams = $routeParams;
			//$scope.$dialog = $dialog;
			$scope.$filter = $filter;
			//this.$navigation = $navigation;
			//this.$util = $util;
			this.$anchorScroll = $anchorScroll;
			var _this = this;


			$scope.sectionSelected = {
				'cf': false,
				'about': false,
				'projects': false,
				'contact': false
			};

			$scope.changePage = function () {
				return _this.changePage();
			};
		}

		Controller.$inject = [
			'$scope',
			'$http',
			'$location',
			'$routeParams',
			//'$dialog',
			'$filter',
			//'$navigation',
			//'$util',
			'$anchorScroll'
		];

		Controller.prototype.changePage = function () {
			var _this = this;

			_this.$location.path('/Contact');
		};

		return Controller;
	})();
	Home.Controller = Controller;
})(Home || (Home = {}));
