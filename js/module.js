app.controller("MainController", ["$http", "$scope", function($http, $scope){
    
    $scope.carsList= [];
    $scope.timeslotsList = [];
    $http.get("http://smartninja.betoo.si/api/CMW/cars")
        .success(function(data){
            $scope.carsList = data;
            console.log($scope.carsList);
	
        })
        .error(function(data){
            console.log("car data not received");
        });
   $http.get('http://smartninja.betoo.si//api/CMW/timeslots')
            .success(function(data){
                $scope.timeslotsList = data;
                console.log($scope.timeslotsList);
            })
            .error(function(data){
                console.log("Timeslots data not received");
            });
    
    $scope.reserveCar = function(email) {
        var data = {
            "timeslotId": $scope.timeslotListbox.id,
            "email": email
        };
        console.log(data);

        $http.post("http://smartninja.betoo.si/api/CMW/reservations", data)
            .success(function(data){
                alert("Successful reservation");
            })
            .error(function(data) {
                alert("reservation failed");
            });
    };


}]);

