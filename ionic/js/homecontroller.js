app.controller('homecontroller',function($scope,$http,$state){
	$scope.imgList = [
		"images/1.jpg",
		"images/2.jpg",
		"images/3.jpg"
	];

	$scope.dataList = [];
	//如果需要使用$http,则必须注入$http服务
	function getData(){
		$http({
			url:'data/data.php?type=list&pageNo='+page+"&num="+"count"
		}).then(function(data){
			
			if (page == 1) {
				// 获取第一页，则直接更新数据
				$scope.dataList = data.data.records;
				$scope.$broadcast('scroll.refreshComplete')
			}else{
				
				$scope.dataList = $scope.dataList.concat(data.data.records);

				if (data.data.records.length == 0) {
					$scope.haveMore = fasle;
				}

				// 停止加载的动画
				$scope.$broadcast('scroll.infiniteScrollComplete')
			}
			
		},function(err){
			console.log(err);
			if (page == 1) {
				//注意在获取数据失败以后，同样需要手动将刷新控件结束
				$scope.$broadcast('scroll.refreshComplete')
			}else{
				// 停止加载的动画
				$scope.$broadcast('scroll.infiniteScrollComplete')
			}
		});
	}

	// 声明一个变量，用于判断页数
	var page = 1;
	//声明一个变量，表示每一页获取多少条数据
	var count = 10;
	//声明一个变量，表示数据是否已经完全加载
	$scope.haveMore = true;
	
	getData(page);
	// 下拉刷新相关的操作
	$scope.doRefresh = function(){
		//每次刷新，都需要将page改成第一页
		page  = 1;
		getData(page);
	}

	// 上拉加载相关的操作
	$scope.loadMore = function(){
		page++;
		getData(page);
	}

	$scope.gotoDetail = function(obj){
		console.log(obj)
		// 用于路由的跳转服务，当跳转到详情页时，需要传值
		$state.go('detail',{name:obj.Name,city:obj.City,country:obj.Country,age:obj.age});
	}
})
		

