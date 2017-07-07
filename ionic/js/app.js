var app = angular.module('app',['ionic','ui.router']);
// 配置路由,使用ui-router
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	//配置路由表
	$stateProvider.state(
			'home',{
				url:'/home',
				templateUrl:"template/home.html",
				controller:"homecontroller"
			}
		)
	.state('detail',{
		url:"/detail/:name/:city/:country/:age'",
		templateUrl:"template/detail.html",
		controller:'detailController'
	})
})