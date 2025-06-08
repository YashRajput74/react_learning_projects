import { useEffect, useState } from "react";



export default function useLocalStorage(key, initialvalue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored || initialvalue;
    });  // store the blank value in state// 

    //after the first render react run this :below code 
    useEffect(() => {

        const storedValue = localStorage.getItem(key);

        if (storedValue) {
            setValue(storedValue)
            //  it return when any value stored in the local storage 
        } else {
            localStorage.setItem(key, initialvalue)
            setValue(initialvalue);
            // if local storage has nothing than i retun the initial value 

        }

    }, [key, initialvalue])

    useEffect(() => {
        localStorage.setItem(key, value);
        //save chnages to local storage every time value chnages this code runs 
        //it automatically save the new value to local storage 
    }, [key, value])


    return [
        value, setValue
        //so we use this like useState in your component
    ]
}



// usecounter , usestatewithhistory
// usestatevalidation  useasnyc