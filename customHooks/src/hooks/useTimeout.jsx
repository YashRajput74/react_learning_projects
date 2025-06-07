import { useEffect, useRef } from "react"

export default function useTimeout({ callback, delay }) {
    const savedCallback = useRef();
    const timeOut = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback])

    useEffect(() => {
        if (delay == null) return;
        timeOut.current = setTimeout(() => {
            savedCallback.current?.()//optional chaining
        },delay)
        return () => clearTimeout(timeOut.current);
    }, [delay])

    function clear() {
        clearTimeout(timeOut.current);
    }

    function reset() {
        clear();
        timeOut.current = setTimeout(()=>{
            savedCallback.current?.()
        },delay)
    }

    return {
        clear, 
        reset
    }
}