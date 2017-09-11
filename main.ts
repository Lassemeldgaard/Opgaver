class Track {
    private artist: string;
    private songName: string;
    private min: number;
    private sec: number;

    constructor(artist: string, songName: string, min: number, sec: number) {
        this.artist = artist;
        this.songName = songName;
        this.min = min;
        this.sec = sec;
    }
    toString() {
        return this.songName + ": " + this.artist + " (" + this.min + ":" + this.sec + ") ";
    }
}
class Driver {
    static exam() {
        let t1 = new Track("The beatles", "YesterDay", 2, 35)
        let t2 = new Track("The beatles", "Today", 4, 20)

        console.log(t1.toString());
        console.log(t2.toString());

    }
}
class Playlist {
    private playlistName: string
    private tracks: Track[]

    constructor(playlistName: string) {
        this.playlistName = playlistName;
        this.tracks = [];

    }

    static add(){
        
    }
}
Driver.exam();