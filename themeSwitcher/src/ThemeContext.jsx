import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const [theme, dispatch] = useReducer(themeReducer, initialTheme);
    return (
        <ThemeContext.Provider value={{theme,dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

function themeReducer(theme,action) {
    switch (action.type) {
        case 'toggle_theme':
            return theme.color === 'black'?{color:'white',backgroundColor:'black'}:{color:'black',backgroundColor:'white'};
        default: 
            return theme;
    }
}

const initialTheme = {
    color: 'black',
    backgroundColor: 'white'
}