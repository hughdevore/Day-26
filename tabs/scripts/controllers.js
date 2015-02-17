app.controller('tabContentCrtl', function($scope){
	
	// Trying to implement a collection for templating
	// $scope.colors = [{
	// 	'color': 'Green',
	// 	'content': 'This is the color Green',
	// 	'show': true
	// 	}, {
	// 	'color': 'Red',
	// 	'content': 'This is the color Red',
	// 	'show': true
	// 	}, {
	// 	'color': 'Blue',
	// 	'content': 'This is the color blue',
	// 	'show': true
	// 	}];

	$scope.redContentVisible = false;
	$scope.greenContentVisible = false;
	$scope.blueContentVisible = false;

	$scope.onNavClick = function(color) {
		if(color === 'red') {
			$scope.redContentVisible = true;
			$scope.greenContentVisible = false;
			$scope.blueContentVisible = false;
		} else if (color === 'green') {
			$scope.redContentVisible = false;
			$scope.greenContentVisible = true;
			$scope.blueContentVisible = false;

		} else if (color === 'blue') {
			$scope.redContentVisible = false;
			$scope.greenContentVisible = false;
			$scope.blueContentVisible = true;
		}
	};
});