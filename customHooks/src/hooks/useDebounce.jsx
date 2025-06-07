import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounce(value)
        }, delay)
        return () => clearTimeout(id)
    }, [value, delay])

    return debounce
}
/* debounce vs throttle + polyfill */

/* useform,useform,usevalidation,useHistory,usequery, */