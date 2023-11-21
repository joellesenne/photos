import { useState } from "react";

export function useHandleShown() {
    const [isShown, setIsShown] = useState(false);
    setIsShown((current) => !current);
    return isShown
}
export function useHandleItem(id) {
    const [isItemId, setIsItemId] = useState(null);

    setIsItemId(id);

    return isItemId
}
export function useGetYear() {
    const currentYear = new Date().getFullYear();
    if (currentYear > 2022) {
        return `2022-${  currentYear}`;
    }
        return String(currentYear);

}

export function useScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
