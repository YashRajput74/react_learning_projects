import { useEffect } from "react";


export default function QuestionOne() {
    useEffect(() => {
        console.log("ComponentMounted");
    }, [])

    return (
        <h1>Component 1</h1>
    )
}