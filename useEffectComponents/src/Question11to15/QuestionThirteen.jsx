import { useEffect, useState } from "react"

export default function QuestionThirteen() {
    const [counter, setCounter] = useState(10);
    const [shown, setShown] = useState(false);
    function handleClick() {
        setShown(!shown);
    }
    useEffect(() => {
        if (shown) {
            const intervalId = setInterval(() => {
                setCounter(c => {
                    if (c <= 1) {
                        clearInterval(intervalId);
                        return 0;
                    }
                    return c - 1
                }
                )
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [shown])
    return (
        <>
            <button onClick={handleClick}>{shown ? "Hide" : "Show"} Counter</button>
            {shown && <p>{counter}</p>}
        </>
    )
}