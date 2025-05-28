import { useState } from "react";
import Menu from "./Menu/Menu";

export default function Header() {
    const [menu, setMenu] = useState(false);
    function toggleMenu() {
        setMenu(!menu);
    }
    return (
        <>
            <header>
                <button onClick={toggleMenu} className="headerButton">YRF</button>
            </header>
            {menu && <Menu />}
        </>
    )
}