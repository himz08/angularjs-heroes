var app = angular.module("myApp");

app.factory('dataFetch', function($http)

{

    return {
        fetchData1 : function(){

            return $http({

                method : 'GET',
                url: 'https://reqres.in/api/users?page=1'
            })
        },
        fetchData2 : function(){

            return $http({

                method : 'GET',
                url: 'https://reqres.in/api/users?page=2'
            })
        },
        fetchData3 : function(){

            return $http({

                method : 'GET',
                url: 'https://reqres.in/api/users?page=3'
            })
        }



    }

    
})