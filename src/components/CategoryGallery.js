import React, { useState } from "react";

export default function CategoryGallery({ data, category }) {
    const [isShown, setIsShown] = useState(false);
    const [isItemId, setIsItemId] = useState(null);

    const handleClick = (e, id) => {
        setIsShown((current) => !current);
        setIsItemId(id);
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <section className="gallery">
            {data &&
                data
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                        <figure
                            key={index}
                            onClick={(e) => handleClick(e, item.id)}
                            className={isShown && isItemId === item.id ? "show" : ""}
                        >
                            <img
                                src={"https://photos.joellesenne.dev/" + item.src}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <figcaption className="overlay">
                                <span>{item.title}</span>
                            </figcaption>
                        </figure>
                    ))}
        </section>
    );
}
