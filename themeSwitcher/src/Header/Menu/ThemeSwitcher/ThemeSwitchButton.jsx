import { useContext } from "react"
import { ThemeContext } from "../../../ThemeContext"

export default function ThemeSwitchButton(){
    const {dispatch} =useContext(ThemeContext);
    return (
        <button onClick={()=>{
            dispatch({
                type:'toggle_theme'
            })
        }} className="themeSwitcherButton">Toggle</button>
    )
}