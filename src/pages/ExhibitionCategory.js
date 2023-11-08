import GetDataFetch from "../GetDataFetch";
import CategoryGallery from "../components/CategoryGallery";
export  default function ExhibitionCategory() {
    const { data, loading, error } = GetDataFetch();
    return (
        <>
            <h2>Exhibition category</h2>
            {loading ? (
                <p>🌀 Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <CategoryGallery data={data} category="Exhibition" />
            )}
        </>
    )
}