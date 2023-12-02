import React, { useState } from "react";

export default function CategoryGallery({ data, category }) {
    const [isShown, setIsShown] = useState(false);
    const [isItemId, setIsItemId] = useState(null);

    const handleClick = (e, id) => {
        e.preventDefault();
        setIsShown((current) => !current);
        setIsItemId(id);
        e.stopPropagation();
    };

    return (
        <section className="flex flex-wrap column-gap-10 row-gap-20 gallery">
            {data &&
                data
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                        <figure
                            key={index}
                            onClick={(e) => handleClick(e, item.id)}
                            className={isShown && isItemId === item.id ? "show" : "hide"}
                        >
                            <img
                                src={(process.env.NODE_ENV === "development") ?`assets/${  item.src}` : `https://photos.joellesenne.dev/${  item.src}`}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <figcaption className="flex justify-center overlay">
                                <span>{item.title}</span>
                            </figcaption>
                        </figure>
                    ))}
        </section>
    );
}
