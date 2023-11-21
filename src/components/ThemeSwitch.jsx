import { UseThemeSwitch } from "../hooks/UseThemeSwitch"

export default function ThemeSwitch() {
    const {theme, toggleDark} = UseThemeSwitch()

    return (
        <label className="theme-switch">
            <span>{theme === "dark" ? "🌌" : "☀️"}</span>
                <input
                    checked={theme === "dark"}
                    type="checkbox"
                    onChange={toggleDark}
                />
            </label>
    );
}
