import { useEffect, useState } from "react"
import "./App.css"
export default function App() {
    const [currentTheme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        function syncUserPrefernce(event) {
            if (event.key === "theme") {
                console.log(event.newValue)
                setTheme(event.newValue)
            }
        }
        window.addEventListener("storage", syncUserPrefernce)
        return () => window.removeEventListener("storage", syncUserPrefernce);
    }, [])
    useEffect(() => {
        document.body.className = currentTheme;
    }, [currentTheme])
    return (
        <div>
            Konichiwa! Hajimashte Yoroshoikun.
            <p>Current Theme: {currentTheme}</p>
        </div>
    )
} 