import { useEffect, useState } from "react"

export default function QuestionEleven() {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    }
    
    useEffect(() => {
        const pastTheme = localStorage.getItem("theme");
        if (pastTheme === "dark") {
            setTheme("dark")
        }
    }, [])
    
    return (
        <div className={"qEleven " + theme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}