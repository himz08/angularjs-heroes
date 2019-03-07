var app = angular.module("myApp");

app.controller('loginCntrl', ['$scope', '$state', '$location', '$rootScope', function ($scope, $state, $location, $rootScope) {

    $scope.validAdminUsername = 'admin@jungleworks.com';
    $scope.validUserUsename = 'user@jungleworks.com';
    $scope.validAdminPass = '12345';
    $scope.validUserPass = '12345';
    $scope.error = false;
    $rootScope.isUser = false;
    $rootScope.isAdmin = false;


    $scope.setCred = function () {


        if (($scope.userUsername === $scope.validUserUsename && $scope.userPassword === $scope.validUserPass) || (($scope.userUsername === $scope.validAdminUsername && $scope.userPassword === $scope.validAdminPass))) {
            if ($scope.userUsername === $scope.validUserUsename && $scope.userPassword === $scope.validUserPass) {
                //  $rootScope.isAdmin = true;
                $rootScope.isUser = true;
                $state.go('home.heroes');


            } else {
                //  $rootScope.isUser = true;
                //  $rootScope.isAdmin = false;
                $location.path('/home/dashboard');

            }
            $scope.error = false;
            localStorage.setItem('username', $scope.userUsername);
            localStorage.setItem('password', $scope.userPassword);


        } else {
            $scope.error = true;
        }
    }

}]);