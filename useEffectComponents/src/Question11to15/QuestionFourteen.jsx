import { useEffect, useState } from "react"

export default function QuestionFourteen() {
    const [show, setShow] = useState(false);
    function handleClick() {
        setShow(!show);
    }
    return (
        <div>
            <button onClick={handleClick}>{show ? "Hide Child Component" : "Show Child Component"}</button>
            {show && <ChildComponent />}
        </div>
    )
}

function ChildComponent() {
    useEffect(() => {
        console.log("child mounted")
        return () => console.log("child unmounted");
    })
    return (
        <div>
            Child Component
        </div>
    )
}