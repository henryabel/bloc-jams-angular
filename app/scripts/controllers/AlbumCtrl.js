(function () {
    function AlbumCtrl(Fixtures, SongPlayer, $scope) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
        $scope.$on('$destroy', function () {
            SongPlayer.stopSong();
        });
    }
    angular.module('blocJams').controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$scope', AlbumCtrl]);
})();