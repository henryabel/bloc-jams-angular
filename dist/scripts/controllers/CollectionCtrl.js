(function () {
    function CollectionCtrl(Fixtures) {
        this.albums = Fixtures.getCollection(12);
        //console.log(this.albums.length);
    }
    angular.module('blocJams').controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();