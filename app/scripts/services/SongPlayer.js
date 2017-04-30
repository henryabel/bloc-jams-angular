 (function () {
     function SongPlayer(Fixtures) {
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
                 SongPlayer.currentSong.playing = null; //#2
             }
             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3']
                 , preload: true
             });
             SongPlayer.currentSong = song; //#3
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
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song) { //#4
                 setSong(song);
                 playSong(song);
             }
             else if (SongPlayer.currentSong === song) { //#5
                 if (currentBuzzObject.isPaused()) {
                     currentBuzzObject.play();
                 }
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
         return SongPlayer;
     }
     angular.module('blocJams').factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();