import { usePlayer } from "./MusicProvider";

export default function SidebarPlaylist() {
    const { dispatch } = usePlayer();

    const songs = [
        { title: "Sidebar Song 1" },
        { title: "Sidebar Song 2" }
    ];

    return (
        <div>
            <h2>Sidebar Playlist</h2>
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
