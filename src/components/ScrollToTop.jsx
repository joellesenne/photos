import PropTypes from 'prop-types';
import { scrollToTop } from "../utils";
import { useScrollToTop } from "../hooks/useScrollToTop.jsx";

export default function ScrollToTop({title}) {
    const {isVisible} = useScrollToTop();
    return (
        <>
            {isVisible && (
                <button
                    className="scroll"
                    onClick={scrollToTop}
                    type="button"
                >
                    {title}
                </button>
            )}
        </>
    );
}

ScrollToTop.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.node
};