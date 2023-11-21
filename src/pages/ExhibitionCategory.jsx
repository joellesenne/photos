import UseDataFetch from "../hooks/UseDataFetch";
import CategoryGallery from "../components/CategoryGallery";

export  default function ExhibitionCategory() {
    const { data, loading, error } = UseDataFetch();
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
    );
}