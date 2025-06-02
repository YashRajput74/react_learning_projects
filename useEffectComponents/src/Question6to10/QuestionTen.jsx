import { useEffect, useState } from "react"

export default function QuestionTen() {
    const [mousePosition, setMousePosition] = useState({
        positionFromLeft: 0,
        positionFromTop: 0
    })
    useEffect(() => {
        function handleMouseMove(event) {
            setMousePosition({
                positionFromLeft: event.clientX,
                positionFromTop: event.clientY
            })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [])
    return (
        <div>
            <p>Mouse Position from Left: {mousePosition.positionFromLeft}</p>
            <p>Mouse Position from Top: {mousePosition.positionFromTop}</p>
        </div>
    )
}