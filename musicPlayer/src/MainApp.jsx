import MainPlaylist from "./MainPlaylist";
import Player from "./Player";
import SidebarPlaylist from "./SidebarPlaylist";

export default function MainApp(){
    
    return (
        <div className="app-layout">
            <aside>
                <SidebarPlaylist />
            </aside>
            <main>
                <div className="content-area">
                    <MainPlaylist  />
                </div>
                <Player />
            </main>
        </div>
    )
}