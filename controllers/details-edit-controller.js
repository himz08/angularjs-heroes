// Dashboard View Detail

var app = angular.module("myApp");

app.controller('editCntrl', ['$rootScope', '$stateParams', '$scope', '$state', function ($rootScope, $stateParams, $scope, $state) {



    $scope.id = parseInt($stateParams.id);

    $scope.submit = function () {
        $state.go('home.dashboard');
        $rootScope.divBlock = true;
    }

    for (var i = 0; i < $rootScope.topHeroes.length; i++) {
        if ($rootScope.topHeroes[i].id === $scope.id) {

            $scope.hero = $rootScope.topHeroes[i];
            console.log($scope.hero.first_name);

        }
    }

}])