import { useEffect, useState } from "react"

export default function QuestionEight() {
    const [text, setText] = useState("");
    const [searchResult, setSearchResult] = useState("");
    function handleChange(e) {
        setText(e.target.value);
    }
    useEffect(() => {
        const intervalId = setTimeout(() => {
            setSearchResult(text);
            console.log("searched");
        }, 1000);
        return () => clearTimeout(intervalId)
    }, [text])
    return (
        <>
            <label htmlFor="searchInput">Search Something: </label>
            <input type="text" value={text} id="searchInput" onChange={handleChange} />
            <p>Search Result: {searchResult}</p>
        </>
    )
}