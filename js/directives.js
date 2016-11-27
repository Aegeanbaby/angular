(function(angular){

	angular.module("tabChange",[])
		.directive("tabAbc",["$location",function($location){

			return {
				restrict : "A",
				link : function ($scope, iElm, iAttrs, controller){

					$scope.$location = $location;
					$scope.$watch("$location.path()",function(now){

						var alink = iElm.children().attr("href");
						var type = alink.replace(/#(\/.+?\/)\d+/,"$1");
						if(now.startsWith(type)){

							iElm.parent().children().removeClass("active");
							iElm.addClass("active");
						}
					});
				}
			}
		}])
})(angular);