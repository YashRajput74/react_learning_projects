import { usePlayer } from "./MusicProvider";

export default function Player() {
    const { music } = usePlayer();

    return (
        <div className="player">
            {music.currentSong ? (
                <p> Now Playing: {music.currentSong.title}</p>
            ) : (
                <p>No song playing</p>
            )}
        </div>
    );
}
