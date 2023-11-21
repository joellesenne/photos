import { useEffect, useState } from "react";

export const UseThemeSwitch = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const toggleDark = () => {
        document.body.classList.toggle("dark");
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        if (theme) {
            if (theme === "dark") {
                document.body.classList.add("dark");
            }
        } else {
            const dark = window.matchMedia("(prefers-color-scheme: light)").matches;
            if (dark) {
                document.body.classList.add("dark");
            }
        }
    });

    return { theme, toggleDark };
};
