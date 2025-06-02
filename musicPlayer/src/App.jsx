import "./App.css"
import MainApp from "./MainApp"
import MusicProvider from "./MusicProvider"

//This is a app in which we can access the player from anywhere in the components...

export default function App(){
    return (
        <MusicProvider>
            <MainApp />
        </MusicProvider>
    )
}