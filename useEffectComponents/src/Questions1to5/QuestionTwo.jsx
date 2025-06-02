import { useEffect, useState } from "react"

export default function QuestionTwo() {
    const [counter, setConuter] = useState(0);

    useEffect(() => {
        console.log({ counter });
    }, [counter])

    function handleClick() {
        setConuter(c => c + 1)
    }

    return (
        <button onClick={handleClick}>
            Button Clicked {counter} times.
        </button>
    )
}