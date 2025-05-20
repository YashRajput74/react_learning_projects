import { useState } from "react"
import Menu from "./Menu";

export default function Header({ themeProvided }) {
    const [menu, setMenu] = useState(false);
    function toggleMenu() {
        setMenu(!menu);
    }
    return (
        <>
            <header style={{border:'1px solid black',color:'black'}}>
                <button onClick={toggleMenu} className="headerButton"  style={{border:'1px solid black',color:'black',backgroundColor:'white'}}>YRF</button>
            </header>
            {menu && <Menu themeProvided={themeProvided}/>}
        </>
    )
}