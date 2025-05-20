import { useState } from "react";
import Header from "./Header";
import './App.css'
/* app.js (theme state with some initial value)
- header with some button/icon
- on click of this button
- menu component will render in app.js
- menu have multiple options like accounts, profile and theme
- on click theme option
- look and feel component will render
- theme toggle button will get rendered
- onlclick of this button theme state mentioned inside app.js should get changed
-app.js
  - header.js
    - menu.js
      - look and feel.js
        - themeSwitcher.js
          - themswitch button.js */
export default function App() {
    const [theme, setTheme] = useState('white');
    function toggleTheme(){
        setTheme(prevTheme=>prevTheme=='white' ?'black':'white')
    }
    return (
        <div style={{backgroundColor:theme}}>
            <Header themeProvided={toggleTheme} />
        </div>
    )
}