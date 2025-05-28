import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

export default function Menu(){
    const [show,setShow]=useState(false);
    function toggleShow(){
        setShow(!show);
    }
    return (
        <>
            <div className="menu">
                <button className="menuButtons">Accounts</button>
                <button className="menuButtons">Profile</button>
                <button onClick={toggleShow} className="menuButtons">Look and Feel</button>
            </div>
            {show && <ThemeSwitcher />}
        </>
    )
}