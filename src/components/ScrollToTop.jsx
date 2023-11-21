import { useScrollToTop } from "../utils";
import { UseScrollToTop } from "../hooks/UseScrollToTop";

export default function ScrollToTop({title}) {
    const {isVisible} = UseScrollToTop();
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isVisible && (
                <button
                    className="scroll"
                    onClick={useScrollToTop}
                    type="button"
                >
                    {title}
                </button>
            )}
        </>
    );
}