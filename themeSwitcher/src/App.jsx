import "./App.css"
import MainApp from "./MainApp"
import ThemeProvider from "./ThemeContext"

export default function App(){
    return (
        <ThemeProvider>
            <MainApp />
        </ThemeProvider>
    )
}