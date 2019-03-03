(function () {

    var name = "myApp";
    var requ = ["ui.router"];
    var app = angular.module(name, requ);

    app.config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider , $location , $state)

    {
        var initialState = {
            name: 'login',
            url: '/login',
            templateUrl: '/views/login-view.html',
            resolve : {
               check : function() {localStorage.clear();
               }

            }
        }

        var aboutState = {
            name: 'home',
            url: '/home',
            templateUrl: '/views/home-view.html',
            resolve : {
                abc : function($location , $state)
                {   
                    if(localStorage.getItem('username') !== 'admin' || localStorage.getItem('password') !== 'admin')
                    {   
                        $state.go('login');

                    }
                    
               

                }

            }
        

        }
        
        $urlRouterProvider.otherwise('/login');
        $stateProvider.state(aboutState);
        $stateProvider.state(initialState);
    }
})();