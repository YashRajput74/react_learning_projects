import { useContext } from "react";
import Header from "./Header/Header";
import { ThemeContext } from "./ThemeContext";

/* app.js (theme state with some initial value)
- header with some button/icon
- on click of this button
- menu component will render in app.js
- menu have multiple options like accounts, profile and theme
- on click theme option
- look and feel component will render
- theme toggle button will get rendered
- onlclick of this button theme state mentioned inside app.js should get changed
-MainApp.js
  - header.js
    - menu.js
      - look and feel.js
        - themeSwitcher.js
          - themswitch button.js */
export default function MainApp() {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ minHeight: "100vh", ...theme }}>
            <Header />

        </div>
    )
}