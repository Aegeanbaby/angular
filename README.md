豆瓣电影(需在服务器环境中执行)
包含模块: angular angluar-router angular-loader bootstrap(主体页面引用css样式)
项目要点：
	1.电影分类模块: 正在热映 即将到来 top250 搜索模块(仅在电影模块下有效)
	2.采用jsonp形式从豆瓣api获取数据
	3.采用自定义指令更新焦点状态(directives.js)
	4.自己封装模块 发送jsonp请求(server.js)
	5.进行简单分页处理
	6.做简单404页面跳转
	7.简易loading动画