import UseDataFetch from "../hooks/useDataFetch.jsx";
import CategoryGallery from "../components/CategoryGallery.jsx";

export  default function WildlifeCategory() {
    const { data, loading, error } = UseDataFetch();
    if (loading) {
        return (
            <>
                <h2>Wildlife</h2>
                <p>🌀 Loading...</p>
            </>
        );
    } return (
        <>
            <h2>Wildlife</h2>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <CategoryGallery data={data} category="Wildlife"/>
            )}
        </>
    );
}