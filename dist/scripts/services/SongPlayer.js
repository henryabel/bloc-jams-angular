 (function () {
     function SongPlayer($rootScope, Fixtures) {
         var SongPlayer = {};
         var currentAlbum = Fixtures.getAlbum();
         /**
          * @desc Buzz object audio file
          * @type {Object}
          */
         var currentBuzzObject = null;
         /**
          * @function setSong
          * @desc Stops currently playing song and loads new audio file as currentBuzzObject
          * @param {Object} song
          */
         var setSong = function (song) {
             if (currentBuzzObject) {
                 currentBuzzObject.stop();
                 SongPlayer.currentSong.playing = null;
                 /**
                  * @desc Current playback time (in seconds) of currently playing song
                  * @type {Number}
                  */
                 SongPlayer.currentTime = null;
                 SongPlayer.volume = null;
             }
             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3']
                 , preload: true
             });
             SongPlayer.volume = currentBuzzObject.getVolume();
             SongPlayer.currentSong = song;
             currentBuzzObject.bind('timeupdate', function () {
                 $rootScope.$apply(function () {
                     SongPlayer.currentTime = currentBuzzObject.getTime();
                 });
             });
         };
         /**
          * @function playSong
          * @desc Plays currently playing song and and sets the song playing property to true
          * @param {Object} song
          */
         var playSong = function (song) {
                 currentBuzzObject.play();
                 song.playing = true;
             }
             /**
              * @method SongPlayer.play
              * @desc Checks if the currently playing song is different from the current song.
                If it isn't, the nit ssets the song to the click-on song and plays it.  Otherwise
                it plays the song provided it was paused at the time of the click.
              * @param {Object} song
              */
         SongPlayer.play = function (song) {
             debugger;
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song) { //#4
                 debugger;
                 setSong(song);
                 playSong(song);
             }
             else if (SongPlayer.currentSong === song && song != null) { //#5
                 if (currentBuzzObject.isPaused()) {
                     currentBuzzObject.play();
                 }
                 playSong(song);
             }
         };
         var getSongIndex = function (song) {
             return currentAlbum.songs.indexOf(song);
         };
         /**
          * @desc Active song object from list of songs
          * @type {Object}
          */
         SongPlayer.currentSong = null;
         /**
          * @function playSong
          * @desc Pauses currently playing song and and sets the song playing property to false
          * @param {Object} song
          */
         SongPlayer.pause = function (song) {
             song = song || SongPlayer.currentSong;
             currentBuzzObject.pause();
             song.playing = false;
         };
         var stopSong = function () {
             currentBuzzObject.stop();
             SongPlayer.currentSong.playing = null;
         };
         SongPlayer.previous = function () {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex--;
             if (currentSongIndex < 0) {
                 stopSong();
             }
             else {
                 var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             }
         };
         SongPlayer.next = function () {
                 var currentSongIndex = getSongIndex(SongPlayer.currentSong)
                 if (currentSongIndex < currentAlbum.songs.length - 1) {
                     currentSongIndex++;
                     var song = currentAlbum.songs[currentSongIndex];
                     setSong(song);
                     playSong(song);
                 }
                 else {
                     stopSong();
                 }
             }
             /**
              * @function setCurrentTime
              * @desc Set current time (in seconds) of currently playing song
              * @param {Number} time
              */
         SongPlayer.setCurrentTime = function (time) {
             if (currentBuzzObject) {
                 currentBuzzObject.setTime(time);
             }
         };
         SongPlayer.setVolume = function (volume) {
             if (currentBuzzObject) {
                 currentBuzzObject.setVolume(volume);
             }
         };
         return SongPlayer;
     }
     angular.module('blocJams').factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();