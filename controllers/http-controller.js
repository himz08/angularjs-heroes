
// Code to fetch data from server
var app = angular.module("myApp");




app.controller('httpCntrl',['$rootScope', 'dataFetch' , '$rootScope' , '$scope', '$state' ,function($rootScope, dataFetch , $rootScope , $scope, $state){
    

    $rootScope.divBlock = true;
    dataFetch.fetchData1().then(function(response1){

        $rootScope.topHeroes = response1.data.data;
        $rootScope.heroesData = response1.data.data;
        

        dataFetch.fetchData2().then(function(response2){
            console.log('Fetchin...');
            var temp = response2.data.data;
            $rootScope.topHeroes.push(temp[0]);
            

            
            
            for(var i = 1 ; i < temp.length  ; i++)
            {
                $rootScope.heroesData.push(temp[i]);
            }

            dataFetch.fetchData3().then(function(response3){

                var temp1 = response3.data.data;
                for(var i = 0 ; i < temp1.length ; i++)
            {
                $rootScope.heroesData.push(temp1[i]);
            }

            })

        })


    }),function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("error");
      };



}])