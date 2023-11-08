import React, { useState } from "react";
export default function AllGallery({ data }) {
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
                data.map((item, index) => (
                    <figure
                        key={index}
                        onClick={(e) => handleClick(e, item.id)}
                        className={isShown && isItemId === item.id ? "show" : ""}
                    >
                        <img
                            src={"https://photos.joellesenne.dev/" + item.src}
                            alt={item.alt}
                        />
                        <figcaption className="overlay">
              <span>
                {item.title}
                  <br />
                Category: {item.category}
              </span>
                        </figcaption>
                    </figure>
                ))}
        </section>
    );
}
