import { useState, useCallback, memo } from "react";

const sortMethods = {
    ascending: { method: (a, b) => a.id - b.id },
    descending: { method: (a, b) => b.id - a.id },
};

const Figure = memo(({ item, isShown, isItemId, handleClick }) => (
    <figure
        data-id={item.id}
        onClick={(e) => handleClick(e, item.id)}
        className={isShown && isItemId === item.id ? "show" : "hide"}
    >
        <img
            src={
                process.env.NODE_ENV === "development"
                    ? `assets/images${item.src}`
                    : `https://photos.joellesenne.dev/assets/images${item.src}`
            }
            alt={item.alt}
        />
        <figcaption className="flex justify-center overlay">
      <span>
        {item.title}
          <br />
          {item.category.join(" - ")}
      </span>
        </figcaption>
    </figure>
));

export default function CategoryGallery({ data, category }) {
    const [isShown, setIsShown] = useState(false);
    const [isItemId, setIsItemId] = useState(null);
    const [sortState, setSortState] = useState("descending");

    const handleClick = useCallback((e, id) => {
        e.preventDefault();
        setIsShown((current) => !current);
        setIsItemId(id);
        e.stopPropagation();
    }, []);

    const handleChange = e => {
        e.preventDefault();
        setSortState(e.target.value)
        e.stopPropagation();
    }

    return (
        <>
            <section className="select">
                <select
                    className="filter"
                    onChange={handleChange}
                >
                    <option value="descending">Sort descending</option>
                    <option value="ascending">Sort ascending</option>
                </select>
            </section>
            <section className="flex flex-wrap column-gap-10 row-gap-20 gallery">
                {data &&
                    data
                        .filter((item) => item.category.includes(category))
                        .sort(sortMethods[sortState].method)
                        .map((item) => (
                            <Figure
                                key={item.id}
                                item={item}
                                isShown={isShown}
                                isItemId={isItemId}
                                handleClick={handleClick}
                            />
                        ))}
            </section>
        </>
    );
}
