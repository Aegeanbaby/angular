"use strict";
/**
 * 主文件
 * @param  {Object} angular 主模块
 */
(function(angular){

	angular.module("movie",["ngRoute","tabChange","details","in_theaters",])
		.config(["$routeProvider",function($routeProvider){

			// 路由配置 只关注电影模块 其他均返回404
			$routeProvider.when("/books",{
				templateUrl : "view/404.html"
			})
			.when("/music",{
				templateUrl : "view/404.html"
			})
			.otherwise({redirectTo : "/in_theaters/1"})
		}])
		.controller("search",["$scope","$route",function($scope,$route){

			// 绑定输入框表单中数据
			$scope.input = "";

			// 表单提交事件
			$scope.sub = function (){
				// 更新地址栏参数
				$route.updateParams({what: "search",q :$scope.input});
			}
		}])
})(angular);