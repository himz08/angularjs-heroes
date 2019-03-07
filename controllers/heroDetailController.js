// Controller for child of list of hero

var app = angular.module("myApp");

app.controller('heroDetailCntrl' , function($scope,$stateParams,$rootScope){

    $scope.isClicked = false;
    $scope.viewDetails = function()
    {
       $scope.isClicked = true; 

    }

    $scope.id = parseInt($stateParams.id);
    for (var i = 0 ; i < $rootScope.topHeroes.length ; i++ )
    {
        if($rootScope.topHeroes[i].id === $scope.id)
        {   
            
            $scope.hero = $rootScope.topHeroes[i];
        }
    };
    
    


});