(function () {

    var name = "myApp";
    var requ = ["ui.router"];
    var app = angular.module(name, requ);

    app.config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider) {

        var initialState = {
            name: 'login',
            url: '/login',
            views: {
                'main-view': {
                    templateUrl: '/views/login-view.html'
                }
            },
            resolve: {
                check: function ($rootScope) {
                    localStorage.clear();
                    $rootScope.isAdmin = false;
                    $rootScope.isUser = false;

                }
            }
        }
        var homeState = {
            name: 'home',
            url: '/home',
            views: {
                'main-view': {
                    templateUrl: '/views/home-view.html'
                }
            },
            resolve: {
                abc: function ($state, $rootScope) {



                    if ((localStorage.getItem('username') === 'admin@jungleworks.com') && (localStorage.getItem('password') === '12345')) {
                        $rootScope.isAdmin = true;
                        //  $state.go('home.dashboard');
                    } else if ((localStorage.getItem('username') === 'user@jungleworks.com') && (localStorage.getItem('password') === '12345')) {
                        $rootScope.isUser = true;
                        // $state.go('home.heroes');
                    } else {
                        $state.go('login');
                    }

                }
            }
        }
        var dashboardState = {
            name: 'home.dashboard',
            url: '/dashboard',
            views: {
                'content-view': {

                    templateUrl: 'views/dashboard-view.html'
                }

            },

            resolve: {
                check: function ($state, $rootScope) {

                    $rootScope.divBlock = true;


                    if (localStorage.getItem('username') !== 'admin@jungleworks.com' || localStorage.getItem('password') !== '12345') {
                        if (localStorage.getItem('username') !== 'user@jungleworks.com' || localStorage.getItem('password') !== '12345')
                            $state.go('login');
                    }

                    if (localStorage.getItem('username') === 'user@jungleworks.com' && localStorage.getItem('password') === '12345') {
                        alert('Error');
                        $state.go('home.heroes');

                    }
                }
            }
        }


        var heroesState = {
            name: 'home.heroes',
            url: '/heroes',
            views: {
                'content-view': {

                    templateUrl: 'views/heroes-view.html'
                }
            }
        }

        var dashboardHeroDetail = {

            name: 'home.dashboard.topHeroesDetails',
            url: '/topHeroesDetails/:id',
            views: {
                'edit-details': {
                    templateUrl: 'views/hero-details-dashboard.html'
                }

            },
            resolve: {
                disable: function ($rootScope) {
                    $rootScope.divBlock = false;

                }
            }
        }

        var heroesDetails = {

            name: 'home.heroes.heroesDetails',
            url: '/heroesDetails/:id',
            views: {
                'show-details': {
                    templateUrl: 'views/view-detail-heroes.html'
                }

            }

        }

        $urlRouterProvider.otherwise('/login');
        $stateProvider.state(homeState);
        $stateProvider.state(initialState);
        $stateProvider.state(dashboardState);
        $stateProvider.state(heroesState);
        $stateProvider.state(dashboardHeroDetail);
        $stateProvider.state(heroesDetails);
    }
})();