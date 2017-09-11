"use strict";
var Track = /** @class */ (function () {
    function Track(artist, songName, min, sec) {
        this.artist = artist;
        this.songName = songName;
        this.min = min;
        this.sec = sec;
    }
    Track.prototype.toString = function () {
        return this.songName + ": " + this.artist + " (" + this.min + ":" + this.sec + ") ";
    };
    return Track;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.exam = function () {
        var t1 = new Track("The beatles", "YesterDay", 2, 35);
        var t2 = new Track("The beatles", "Today", 4, 20);
        console.log(t1.toString());
        console.log(t2.toString());
    };
    return Driver;
}());
var Playlist = /** @class */ (function () {
    function Playlist(playlistName) {
        this.playlistName = playlistName;
        this.tracks = [];
    }
    Playlist.add = function () {
    };
    return Playlist;
}());
Driver.exam();
