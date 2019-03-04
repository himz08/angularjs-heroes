

var app = angular.module("myApp");

app.controller('httpCntrl',function($scope, dataFetch , $state,$rootScope){

    dataFetch.fetchData1().then(function(response){

        $rootScope.topHeroes = response.data.data;
        $rootScope.heroesData = response.data.data;

        dataFetch.fetchData2().then(function(response){
            console.log('Fetchin...');
            var temp = response.data.data;
            $rootScope.topHeroes.push(temp[0]);
            
            for(var i = 1 ; i < temp.length  ; i++)
            {
                $rootScope.heroesData.push(temp[i]);
            }

            dataFetch.fetchData3().then(function(response){

                var temp1 = response.data.data;
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



})