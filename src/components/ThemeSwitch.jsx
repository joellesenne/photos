import { UseThemeSwitch } from "../hooks/UseThemeSwitch"

export default function ThemeSwitch() {
    const {theme, toggleDark} = UseThemeSwitch()

    return (
        <label
            htmlFor="theme-switch"
            className="theme-switch">
            <span>
                {(theme === "dark") ? (
                        <img src='assets/images/moon.png' alt="Moon"/>
                    ) : (
                        <img src='assets/images/sun.png' alt="Sun"/>)}</span>
                <input
                    type="checkbox"
                    id="theme-switch"
                    checked={theme === "dark"}
                    onChange={toggleDark}
                />
            </label>
    );
}
