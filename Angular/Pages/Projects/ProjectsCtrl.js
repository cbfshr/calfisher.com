var Projects;
(function (Projects) {
	var Controller = (function () {
		function Controller($scope, $http, $location, $routeParams, $filter, $anchorScroll) {
			this.$scope = $scope;
			this.$http = $http;
			this.$location = $location;
			this.$routeParams = $routeParams;
			$scope.$filter = $filter;
			this.$anchorScroll = $anchorScroll;
			var _this = this;

			$scope.showMenu = 0;
		}

		Controller.$inject = [
			'$scope',
			'$http',
			'$location',
			'$routeParams',
			'$filter',
			'$anchorScroll'
		];

		return Controller;
	})();
	Projects.Controller = Controller;
})(Projects || (Projects = {}));
