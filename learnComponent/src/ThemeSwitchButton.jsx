export default function ThemeSwitchButton({themeProvided}){
    return (
        <button onClick={themeProvided} className="themeSwitcherButton" style={{border:'1px solid black',color:'black',backgroundColor:'white'}}>Toggle</button>
    )
}