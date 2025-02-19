import PropTypes from 'prop-types';
import { useTransition } from 'react';

export default function Button({ children, isActive, onClick }) {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            onClick();
        });
    };

    if (isActive) {
        return (
            <button className="btn active" onClick={handleClick} type="button">
                {children}
            </button>
        );
    }

    if (isPending) {
        return (
            <button className="btn pending" onClick={handleClick} type="button">
                {children}
            </button>
        );
    }

    return (
        <button className="btn" onClick={handleClick} type="button">
            {children}
        </button>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    isActive: PropTypes.node,
    onClick: PropTypes.node
};
