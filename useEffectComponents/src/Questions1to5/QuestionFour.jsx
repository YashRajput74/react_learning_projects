import { useEffect, useState } from "react"

export default function QuestionFour() {
    const [timer, setTimer] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    function handleClick() {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        function timing() {
            setTimer(c => c + 1);
        }
        const intervalId = setInterval(timing, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
            <button onClick={handleClick}>{isVisible ? "Hide" : "Show"} Counter</button>
            {isVisible && <p>{timer}</p>}
        </>
    )
}