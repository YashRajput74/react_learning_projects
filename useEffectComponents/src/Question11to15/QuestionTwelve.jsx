import { useEffect, useState } from "react"

export default function QuestionTwelve() {
    const [city, setCity] = useState("");
    const [storedCity, setStoredCity] = useState("");
    function handleChange(e) {
        setCity(e.target.value);
    }
    useEffect(() => {
        const id = setTimeout(() => {
            localStorage.setItem("city", city)
            setStoredCity(localStorage.getItem("city"))
        }, 1000)
        return () => clearTimeout(id);
    },[city])
    useEffect(()=>{
        setStoredCity(localStorage.getItem("city"));
    },[])
    return (
        <>
            <form>
                <label htmlFor="city">In which city do you live? </label>
                <input type="text" value={city} id="city" onChange={handleChange} />
            </form>
            <p>In local Storage: {storedCity}</p>
        </>
    )
}