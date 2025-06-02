import { useEffect, useState } from "react"

export default function QuestionFive() {
    const [windowSize, setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize) }
    }, [])
    
    return (
        <div>
            <p>Current height of window: {windowSize.height}</p>
            <p>Current width of window: {windowSize.width}</p>
        </div>
    )
}