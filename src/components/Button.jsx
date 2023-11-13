import React, { useTransition } from 'react';

export default function Button({ children, isActive, onClick }) {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            onClick();
        });
    };

    if (isActive) {
        return (
            <button className="btn active" onClick={handleClick}>
                {children}
            </button>
        );
    }

    if (isPending) {
        return (
            <button className="btn pending" onClick={handleClick}>
                {children}
            </button>
        );
    }

    return (
        <button className="btn" onClick={handleClick}>
            {children}
        </button>
    );
}
