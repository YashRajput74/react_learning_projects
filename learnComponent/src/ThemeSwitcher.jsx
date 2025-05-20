import ThemeSwitchButton from "./ThemeSwitchButton";

export default function ThemeSwitcher({themeProvided}){
    return (
        <div className="themeSwitcherDiv">
            <ThemeSwitchButton themeProvided={themeProvided}/>
        </div>
    )
}