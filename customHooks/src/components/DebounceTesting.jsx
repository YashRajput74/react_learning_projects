import { useState } from "react";
import useDebounce from "../Hooks/useDebounce";

export default function DebounceTesting() {
    const [input, setInput] = useState('');
    const debouncedInput = useDebounce(input,1000);
    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="search" />
            <p>{debouncedInput}</p>
        </>
    )
}