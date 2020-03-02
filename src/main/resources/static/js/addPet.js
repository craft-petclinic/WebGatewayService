angular.module('clinic', []).controller(
		'addpet',
		function($scope, $location, $http) {

			$scope.msg = {};
			$scope.reset = function() {
				$scope.pet = {};
				$scope.successmsg = '';
				$scope.errmessage = '';
				$scope.errdetails = '';

			};

			$scope.registerPet = function() {
				var formData = $scope.pet;
				var config = {
					transformRequest : angular.identity,
					transformResponse : angular.identity,
					headers : {
						'Accept' : 'application/json',
						'Content-Type' : 'application/json'
					}
				};
				var url = "/api/account/addpet";
				$http.post(url, formData).then(
						function successCallback(response) {
							console.log("success");
							$scope.pet = {};
							$scope.errmessage = '';
							$scope.errdetails = '';
							$scope.successmsg = "Successfully Added."
						}, function errorCallback(response) {
							console.log("failure");
							$scope.errmessage = response.data.message;
							$scope.errdetails = response.data.details;
						});
			};
		});