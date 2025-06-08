import { useEffect, useState } from "react";

/* Debounce delays the execution of a function until a certain amount of time has passed since the last time it was invoked. If the event is triggered again during the delay, the timer resets. */
/* Useful when you want to wait until a user has stopped performing an action before doing something. */
/* Delays execution until the event stops happening.
Executes once after the final event. */

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
/* Throttle ensures that a function is called at most once every specified amount of time, no matter how many times the event is triggered. */
/* Useful for rate-limiting events that fire continuously. */
/* Limits execution to once every X milliseconds, no matter how often the event occurs.
Executes repeatedly, but at a controlled rate. */

export function useThrottle(value, delay) {
    const [throttledValue, setThrottledValue] = useState(value);
    
    const lastTime = useRef(Date.now());
    
    useEffect(() => {
        const id = setTimeout(() => {
            if (Date.now() - lastTime.current >= delay) {
                setThrottledValue(value);
                lastTime.current = Date.now();
            }
        }, delay - (Date.now() - lastTime.current));
        return () => clearInterval(id);
    }, [value,delay]);

    return throttledValue;
}

/* debounce vs throttle + polyfill */

/* useform,useform,usevalidation,useHistory,usequery, */