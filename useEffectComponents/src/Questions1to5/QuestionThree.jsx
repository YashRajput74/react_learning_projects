import { useEffect, useState } from "react"

export default function QuestionThree() {
    const [text, setText] = useState("Use Effect");
    function handleChange(e) {
        setText(e.target.value);
    }
    useEffect(()=>{
        document.title=text;
    },[text]);
    return (
        <>
            <label htmlFor="siteName">Enter the Site Name here: </label>
            <input type="text" id="siteName" onChange={handleChange} value={text} />
        </>
    )
}