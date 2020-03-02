angular.module('clinic', [])
		.controller(
				'showappointment',
				function($scope, $location, $http) {

					$scope.pets = [];
					$scope.vets = [];
					$scope.vetappoints = [];
					$scope.petappoints = [];

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
							$scope.pets = [];
							$scope.petappoints = [];
							alert(response.data.message);
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
							$scope.vetappoints = [];
							$scope.vets = response.data;
						}, function errorCallback(response) {
							console.log(response.statusText);
							$scope.vets = [];
							$scope.vetappoints = [];
							alert(response.data.message);
						});
					};

					$scope.showAllVet = function() {
						var getUrl = "/api/account/getAllVet"
						$http({
							method : 'GET',
							url : getUrl
						}).then(function successCallback(response) {
							console.log("success " + response.data);
							$scope.vetappoints = [];
							$scope.vets = response.data;
						}, function errorCallback(response) {
							console.log(response.statusText);
							$scope.vets = [];
							$scope.vetappoints = [];
							alert(response.data.message);
						});
					};

					$scope.showPetAppointments = function(petid) {
						var getUrl = "/api/appointment/getAllAppointmentOfPet/"
								+ petid;
						$http({
							method : 'GET',
							url : getUrl
						}).then(function successCallback(response) {
							console.log("success " + response.data);
							$scope.petappoints = response.data;
						}, function errorCallback(response) {
							console.log(response.statusText);
							$scope.petappoints = [];
							alert(response.data.details);
						});
					};

					$scope.showVetAppointments = function(vetid) {
						var getUrl = "/api/appointment/getAllAppointmentOfVet/"
								+ vetid;
						$http({
							method : 'GET',
							url : getUrl
						}).then(function successCallback(response) {
							console.log("success " + response.data);
							$scope.vetappoints = response.data;
						}, function errorCallback(response) {
							$scope.vetappoints = [];
							console.log(response.statusText);
							alert(response.data.details);
						});
					};

					$scope.cancelAppointment = function(appId) {
						var postUrl = "/api/appointment/cancel"
						$http({
							method : 'POST',
							url : postUrl,
							params : {
								appointmentId : appId
							}
						}).then(function successCallback(response) {
							alert("Cancelled successfully");
							console.log("Cancelled successfully");
							//_refreshAppointmentData();
						}, function errorCallback(response) {
							alert("response.data.message");
							console.log(response.statusText);
						});
					};

					checkStatus = function(status) {
						alert("checking status");
						if (status = "booked") {
							return true;
						} else {
							return false;
						}
					};

					//_refreshAppointmentData();

				});