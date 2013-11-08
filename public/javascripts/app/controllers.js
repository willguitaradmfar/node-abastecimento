'use strict';

angular.module('app.controllers', [])

.controller('LoginController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('LoginController');
		$scope.autenticar = function() {
			if($scope.login.user == "admin" && $scope.login.password == "admin"){				
				window.location.href = 'home.html#/home'
			}
		}
	}
])

.controller('CreateAccountController', ['$scope','$location', '$http', '$templateCache', 
	function($scope, $location,  $http, $templateCache) {
		console.log('CreateAccountController');	

	}
])

.controller('RememberPasswordController', ['$scope','$location', '$http', '$templateCache', 
	function($scope, $location,  $http, $templateCache) {
		console.log('RememberPasswordController');
		
	}
])

.controller('HomeController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('HomeController');
		
	}
])

.controller('RecordSalesController', ['$scope','$location', '$http', '$templateCache', '$routeParams',
	function($scope, $location,  $http, $templateCache, $routeParams) {
		console.log('RecordSalesController');
		if($routeParams.numBomba){
			$scope.recordsales = {};
			$scope.recordsales.numbomba = $routeParams.numBomba;
		}
		
	}
])

;