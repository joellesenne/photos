import UseDataFetch from "../hooks/UseDataFetch";
import CategoryGallery from "../components/CategoryGallery";

export  default function PanoramaCategory() {
    const { data, loading, error } = UseDataFetch();
    if (loading) {
        return (
            <>
                <h2>Panorama</h2>
                <p>🌀 Loading...</p>
            </>
        );
    } return (
        <>
            <h2>Panorama</h2>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <CategoryGallery data={data} category="Panorama"/>
            )}
        </>
    );
}