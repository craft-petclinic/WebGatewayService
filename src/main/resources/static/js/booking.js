angular.module('clinic', [])
		.controller(
				'bookappointment',
				function($scope, $location, $http) {

					$scope.pets = [];
					$scope.vets = [];

					$scope.findPet = function() {
						var getUrl = "/api/account/getPet?name="
								+ $scope.petname + "&dob=" + $scope.petdob;
						$http({
							method : 'GET',
							url : getUrl
						}).then(function successCallback(response) {
							console.log("success " + response.data);
							$scope.pets = response.data;
						}, function errorCallback(response) {
							console.log(response.statusText);
						});
					};

					$scope.findVet = function() {
						var getUrl = "/api/account/getVetByName?name="
								+ $scope.vetname;
						$http({
							method : 'GET',
							url : getUrl
						}).then(function successCallback(response) {
							console.log("success " + response.data);
							$scope.vets = response.data;
						}, function errorCallback(response) {
							console.log(response.statusText);
						});
					};

					$scope.bookappoint = function() {
						var time  = document.getElementById("timepicker").value;
						var datetime = $scope.datechoosed + " " + time;
						var deadline = new Date(datetime).getTime();
						$scope.booking.appointmentDate = deadline;
						var formData = $scope.booking;
						var config = {
							transformRequest : angular.identity,
							transformResponse : angular.identity,
							headers : {
								'Accept' : 'application/json',
								'Content-Type' : 'application/json'
							}
						};
						var url = "/api/appointment/book";
						$http.post(url, formData).then(
								function successCallback(response) {
									console.log("success");
									resetMessages();
									$scope.successmsg = "Successfully Booked."
								}, function errorCallback(response) {
									console.log("failure");
									resetMessages();
									$scope.errmessage = response.data.message;
									$scope.errdetails = response.data.details;
								});
					};
					
					function resetMessages(){
						$scope.successmsg = '';
						$scope.errmessage = '';
						$scope.errdetails = '';
					};

				});