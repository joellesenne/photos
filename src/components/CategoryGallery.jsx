import PropTypes from 'prop-types';
import { useState, useEffect, useCallback, memo } from "react";
import EXIF from "exif-js";

import { sortMethods } from "../utils.js";


const Figure = memo(({ item, isShown, isItemId, handleClick }) => {
    const [exifData, setExifData] = useState('');

    const handleImageLoad = useCallback(() => {

        const img = new Image();
        img.src = process.env.NODE_ENV === "development"
            ? `./assets/images${item.src}`
            : `https://photos.joellesenne.dev/assets/images${item.src}`;

        function  getExif() {

            EXIF.getData(img, function() {
                const model = EXIF.getTag(this, 'Model');
                const make = EXIF.getTag(this, 'Make');
                const focal = EXIF.getTag(this, 'FocalLength');
                const exposure = EXIF.getTag(this, 'ExposureTime');
                const f = EXIF.getTag(this, 'FNumber');
                const iso = EXIF.getTag(this, 'ISOSpeedRatings');

                setExifData({
                    model,
                    make,
                    focal,
                    exposure,
                    f,
                    iso,
                });
            });
        }
        img.onload = getExif;
        console.log(EXIF)

    }, [item.src]);

    useEffect(() => {
        handleImageLoad();
    }, [handleImageLoad]);

    return (
        <figure
            data-id={item.id}
            onClick={(e) => handleClick(e, item.id)}
            className={
                `${
                    isShown && isItemId === item.id ? "show" : "hide"
                } 
            animation-in animation-in-timeline animation-in-range`
            }
        >
            <img
                src={
                    process.env.NODE_ENV === "development"
                        ? `assets/images${item.src}`
                        : `https://photos.joellesenne.dev/assets/images${item.src}`
                }
                alt={item.alt}
                draggable="false"
            />
            <figcaption className="flex justify-center overlay">
      <span>
          {item.title} - {item.category.join(" - ")}
          <br/>
          {exifData.make && `${exifData.make}`}
          {exifData.model && ` - ${exifData.model}`}
          <br />
          {exifData.focal && `${exifData.focal}mm`}
          {exifData.f && ` - f/${exifData.f}`}
          {exifData.exposure && ` - 1/${Math.floor(1 / exifData.exposure)}s`}
          {exifData.iso && ` - ISO ${exifData.iso}`}
      </span>
            </figcaption>
        </figure>
    );
});
Figure.displayName = 'Figure';

export default function CategoryGallery({ data:initialData, category }) {
    const [data, setData] = useState(initialData || []);
    const [isShown, setIsShown] = useState(false);
    const [isItemId, setIsItemId] = useState(null);
    const [sortState, setSortState] = useState("descending");

    const handleClick = useCallback((e, id) => {
        e.preventDefault();
        setIsShown((current) => !current);
        setIsItemId(id);
    }, []);

    const handleChange = useCallback((e) => {
        e.preventDefault();
        setSortState(e.target.value)
        e.stopPropagation();
    },[]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsShown(false);
                setIsItemId(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (initialData) {
            setData(initialData);
        }
    }, [initialData]);

    if (!data) return <div>Loading...</div>;

    return (
        <>
            <section className="select">
                <select onChange={handleChange}>
                    <option value="descending">Sort descending</option>
                    <option value="ascending">Sort ascending</option>
                </select>
            </section>
            <section className="flex flex-wrap column-gap-small row-gap-medium gallery">
                {data
                    .filter((item) => item.category.includes(category))
                    .sort((a, b) => sortMethods[sortState](a, b))
                    .map((item) => (
                        <Figure
                            key={item.id}
                            item={item}
                            isShown={isShown}
                            isItemId={isItemId}
                            handleClick={handleClick}
                        />
                    ))
                }
            </section>
        </>
    );
}

CategoryGallery.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
    category: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    Figure: PropTypes.func.isRequired,
};

Figure.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    isShown: PropTypes.bool.isRequired,
    isItemId: PropTypes.number,
    handleClick: PropTypes.func.isRequired,
};

CategoryGallery.defaultProps = {
    data: null,
};
