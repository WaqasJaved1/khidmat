app.controller( 'newsfeedCtrl', function($scope){
	
	$scope.isShow = false;
	$scope.change = function(){

		$scope.isShow = !$scope.isShow;
	}
})