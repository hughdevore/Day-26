app.controller('LoadingButtonCtrl', function($scope, $timeout){
	$scope.buttonText = 'Submit';
	$scope.buttonDisabled = false;
	$scope.click = function () {
		$scope.buttonText = 'Loading...';
		$scope.buttonDisabled = true;
		$timeout(function() {
			$scope.buttonText = 'Submit';
			$scope.buttonDisabled = false;
			$scope.$apply();
		}, 4000);
	}
	
});