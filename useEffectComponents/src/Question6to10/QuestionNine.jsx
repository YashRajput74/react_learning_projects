import { useEffect, useState } from "react"

export default function QuestionNine() {
    const [isLight, setIsLight] = useState(true)
    function handleClick() {
        setIsLight(!isLight);
    }
    useEffect(() => {
        if (!isLight) {
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        }
        else {
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        }
    }, [isLight])
    return (
        <button onClick={handleClick}>Toggle Theme</button>
    )
}