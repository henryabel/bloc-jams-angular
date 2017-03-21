(function () {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a5
    function config($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true
            , requireBase: false
        });
        $stateProvider.state('landing', {
            url: '/'
            , controller: 'LandingCtrl as landing'
            , templateUrl: '/templates/landing.html'
        }).state('album', {
            url: '/album'
<<<<<<< HEAD
=======
            , controller: 'AlbumCtrl as album'
>>>>>>> a5
            , templateUrl: '/templates/album.html'
        }).state('collection', {
            url: '/collection'
            , controller: 'CollectionCtrl as collection'
            , templateUrl: '/templates/collection.html'
        });
    }
<<<<<<< HEAD
=======
    function config($stateProvider, $locationProvider) {}
    $locationProvider.html5Mode({
        enabled: true
        , requireBase: false
    });
    $stateProvider.state('landing', {
        url: '/'
        , controller: 'LandingCtrl as landing'
        , templateUrl: '/templates/landing.html'
    }).state('album', {
        url: '/album'
        , templateUrl: '/templates/album.html'
    }).state('collection', {
        url: '/collection'
        , controller: 'CollectionCtrl as collection'
        , templateUrl: '/templates/collection.html'
    });
>>>>>>> c5
=======
>>>>>>> a5
    angular.module('blocJams', ['ui.router']).config(config);
})();