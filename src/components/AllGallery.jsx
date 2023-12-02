import React, { useState } from "react";

export default function AllGallery({ data }) {
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
                data.map((item, index) => (
                    <figure
                        key={index}
                        onClick={(e) => handleClick(e, item.id)}
                        className={isShown && isItemId === item.id ? "show" : "hide"}
                    >
                        <img
                            src={(process.env.NODE_ENV === "development") ?`assets/${  item.src}` : `https://photos.joellesenne.dev/${  item.src}`}
                            alt={item.alt}
                        />
                        <figcaption className="flex items-center justify-center overlay">
              <span>
                {item.title}
                  <br />
                {item.category}
              </span>
                        </figcaption>
                    </figure>
                ))}
        </section>
    );
}
