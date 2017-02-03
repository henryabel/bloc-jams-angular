(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true
            , requireBase: false
        });
        $stateProvider.state('landing', {
            url: '/'
<<<<<<< HEAD
<<<<<<< HEAD
            , controller: 'LandingCtrl as landing'
=======
>>>>>>> a3
=======
>>>>>>> c4
            , templateUrl: '/templates/landing.html'
        }).state('album', {
            url: '/album'
            , templateUrl: '/templates/album.html'
        }).state('collection', {
            url: '/collection'
<<<<<<< HEAD
<<<<<<< HEAD
            , controller: 'CollectionCtrl as collection'
=======
>>>>>>> a3
=======
>>>>>>> c4
            , templateUrl: '/templates/collection.html'
        });
    }
    angular.module('blocJams', ['ui.router']).config(config);
})();