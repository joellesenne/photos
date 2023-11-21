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
        <section className="flex flex-wrap gap-20 gallery">
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
                                src={`https://photos.joellesenne.dev/${  item.src}`}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <figcaption className="flex items-center justify-center overlay">
                                <span>{item.title}</span>
                            </figcaption>
                        </figure>
                    ))}
        </section>
    );
}
