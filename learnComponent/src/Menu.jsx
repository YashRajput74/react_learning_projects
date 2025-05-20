import { useState } from "react"
import ThemeSwitcher from "./ThemeSwitcher";

export default function Menu({ themeProvided }) {
    const [show, setShow] = useState(false);
    function toggleShow() {
        setShow(!show);
    }
    return (
        <>
            <div className="menu" style={{ border: '1px solid black', color: 'black', backgroundColor: 'white' }}>
                <button className="menuButtons">Account</button>
                <button onClick={toggleShow} className="menuButtons">Look and Feel</button>
            </div>
            {show && <ThemeSwitcher themeProvided={themeProvided} />}
        </>
    )
}