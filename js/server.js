/**
 * jsonp请求模块
 * @param  {Object} angular 
 */
(function(angular){

	angular.module("httpServer",[])
		.service("ajaxServer",["$window","$document",function($window,$document){

			/**
			 * 发送jsonp请求
			 * @param  {str} url  请求地址
			 * @param  {Object} data     请求参数
			 * @param  {[type]} callBack 回调函数
			 */
			this.jsonp = function (url,data,callBack){

				// 判断第二个参数是否为function
				if(typeof data == "function"){

					callBack = data;
				}
				// 为url函数名加随机数 保证不重复
				var num = Math.random().toString().replace(".","");
				var fun = "my_jsonp"+num;
				var str = "?";

				// 拼接字符串
				for(var key in data){

					str += key + "=" + data[key] + "&";
				}
				url = url + str + "&callback="+fun;
				// 创建script表签
				var script = $document[0].createElement("script");
				script.src = url;
				$window[fun] = function (data){

					// 在执行完后 删除script 保证页面性能
					callBack(data);
					$document[0].body.removeChild(script)
				}
				// 添加script标签
				$document[0].body.appendChild(script);
			}
		}])
})(angular);