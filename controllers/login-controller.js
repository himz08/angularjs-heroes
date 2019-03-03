var app = angular.module("myApp");

app.controller('loginCntrl', function ($scope,$state,$location) {
    $scope.test = "working fine";


    $scope.error = false;

    $scope.setCred = function () {


        if ($scope.userUsername === 'admin' && $scope.userPassword === 'admin')
        {    $scope.error = false;
            localStorage.setItem('username', $scope.userUsername);
            localStorage.setItem('password', $scope.userPassword);
            $location.path('/home');
        }
        
        else
        {
            $scope.error = true;


        }
    }

    $scope.abc = function () {
        alert("Clicked");
    }


});