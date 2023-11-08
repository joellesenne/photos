import GetDataFetch from "../GetDataFetch";
import CategoryGallery from "../components/CategoryGallery";
export  default function PanoramaCategory() {
    const { data, loading, error } = GetDataFetch();
    return (
        <>
            <h2>Panorama category</h2>
            {loading ? (
                <p>🌀 Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <CategoryGallery data={data} category="Panorama" />
            )}
        </>
    )
}