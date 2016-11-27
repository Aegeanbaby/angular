
/**
 * 详情页面控制器
 * @param  {Object} angular
 */
(function(angular){

	angular.module("details",["ngRoute","httpServer"])
		.config(["$routeProvider",function($routeProvider){

			// 指定路由
			$routeProvider.when("/subject/:id",{
				templateUrl : "view/details.html",
				controller : "detailsCon"
			});
		}])
		.controller("detailsCon",["$scope","$document","$routeParams","$route","ajaxServer",function($scope,$document,$routeParams,$route,ajaxServer){
				// loading动画控制
				$scope.loading = true;
				// 获取url中id参数
				$scope.id = $routeParams.id;
			ajaxServer.jsonp("https://api.douban.com/v2/movie/"+$scope.id,function(data){

				// 接收数据
				$scope.info = data;
				// 更改loading状态
				$scope.loading = false;
				// 更新数据
				$scope.$apply();
			});
		}]);
})(angular)