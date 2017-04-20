 (function () {
     function SongPlayer() {
         var SongPlayer = {};
         /**
          * @desc Keeps track of the current song
          * @type {Object}
          */
         var currentSong = null;
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
                 currentSong.playing = null;
             }
             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3']
                 , preload: true
             });
             currentSong = song;
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
             if (currentSong !== song) {
                 setSong(song);
                 playSong(song);
             }
             else if (currentSong === song) {
                 if (currentBuzzObject.isPaused()) {
                     currentBuzzObject.play();
                 }
             }
         };
         /**
          * @function playSong
          * @desc Pauses currently playing song and and sets the song playing property to false
          * @param {Object} song
          */
         SongPlayer.pause = function (song) {
             currentBuzzObject.pause();
             song.playing = false;
         };
         return SongPlayer;
     }
     angular.module('blocJams').factory('SongPlayer', SongPlayer);
 })();