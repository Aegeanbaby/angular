(function(angular){

	angular.module("in_theaters",["ngRoute","httpServer"])
		.config(["$routeProvider",function($routeProvider){

			$routeProvider.when("/:what/:page",{
				templateUrl : "view/theater.html",
				controller : "theaterCon"
			});
		}])
		.controller("theaterCon",["$scope","$document","$routeParams","$route","ajaxServer",function($scope,$document,$routeParams,$route,ajaxServer){

				$scope.loading = true;
				$scope.page = parseInt($routeParams.page);
				var what = $routeParams.what;
				var count = 8;
				var start = ($scope.page - 1)*count;

			ajaxServer.jsonp("https://api.douban.com/v2/movie/"+what,{start : start,count : count,q : $routeParams.q},function(data){
				$scope.data = data.subjects;
				$scope.total = Math.ceil(data.total / count);
				$scope.loading = false;
				$scope.$apply();
			});

			$scope.go = function (page){

				console.log(page);
				if(page >=1 && page <= $scope.total){

					$document[0].body.scrollTop = 0;
					$route.updateParams({page : page});
				}
			}
		}]);
})(angular)