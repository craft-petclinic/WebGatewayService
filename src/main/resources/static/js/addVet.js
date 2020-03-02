angular.module('clinic', []).controller(
		'addvet',
		function($scope, $location, $http) {

			$scope.msg = {};
			$scope.reset = function() {
				$scope.vet = {};
				_clearMessages();
			};
			
			function _clearMessages() {
				$scope.errmessage = '';
				$scope.errdetails = '';
				$scope.successmsg = '';
            };

			$scope.registerVet = function() {
				var formData = $scope.vet;
				var config = {
					transformRequest : angular.identity,
					transformResponse : angular.identity,
					headers : {
						'Accept' : 'application/json',
						'Content-Type' : 'application/json'
					}
				};
				var url = "/api/account/addvet";
				$http.post(url, formData).then(
						function successCallback(response) {
							console.log("success");
							$scope.vet = {};
							_clearMessages();
							$scope.successmsg = "Successfully Added."
						}, function errorCallback(response) {
							console.log("failure");
							_clearMessages();
							$scope.errmessage = response.data.message;
							$scope.errdetails = response.data.details;
						});
			};
		});