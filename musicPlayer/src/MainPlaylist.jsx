import { usePlayer } from "./MusicProvider";

export default function MainPlaylist() {
    const { dispatch } = usePlayer();

    const songs = [
        { title: "Main Song 1" },
        { title: "Main Song 2" }
    ];

    return (
        <div>
            <h2>Main Playlist</h2>
            <ul>
                {songs.map((song, idx) => (
                    <li key={idx}>
                        <button onClick={() => dispatch({ type: "playSong", payload: song })}>
                            {song.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
