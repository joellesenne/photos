import GetDataFetch from "../GetDataFetch";
import CategoryGallery from "../components/CategoryGallery";
export  default function CityCategory() {
    const { data, loading, error } = GetDataFetch();
    return (
        <>
            <h2>City category</h2>
            {loading ? (
                <p>🌀 Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <CategoryGallery data={data} category="City" />
            )}
        </>
    )
}