(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true
            , requireBase: false
        });
        $stateProvider.state('landing', {
            url: '/'
<<<<<<< HEAD
            , controller: 'LandingCtrl as landing'
=======
>>>>>>> a3
            , templateUrl: '/templates/landing.html'
        }).state('album', {
            url: '/album'
            , templateUrl: '/templates/album.html'
        }).state('collection', {
            url: '/collection'
<<<<<<< HEAD
            , controller: 'CollectionCtrl as collection'
=======
>>>>>>> a3
            , templateUrl: '/templates/collection.html'
        });
    }
    angular.module('blocJams', ['ui.router']).config(config);
})();