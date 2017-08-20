app.controller( 'loginCtrl', function($scope){
	
	$scope.isShow = false;
	$scope.change = function(){

		$scope.isShow = !$scope.isShow;
		console.log("hello");
	}
})