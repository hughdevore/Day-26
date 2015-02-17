app.controller('LikeButtonCtrl', function($scope, $timeout){

	$scope.counter = 0;

	$scope.click = function (counter) {
		$scope.counter = $scope.counter + 1;;

	}
	
});