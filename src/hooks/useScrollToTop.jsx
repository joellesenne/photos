import { useEffect, useState } from "react";

export const useScrollToTop = () => {
    const [isVisible, setVisible] = useState(false);
    const toggleVisible = (event) => {
        const scrolled = document.documentElement.scrollTop;
        event.preventDefault();
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);
    return { isVisible };
};
