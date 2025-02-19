import UseDataFetch from "../hooks/useDataFetch.jsx";
import CategoryGallery from "../components/CategoryGallery.jsx";

export  default function TravelCategory() {
    const { data, loading, error } = UseDataFetch();
    if (loading) {
        return (
            <>
                <h2>Travel</h2>
                <p>🌀 Loading...</p>
            </>
        );
    } return (
        <>
            <h2>Travel</h2>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <CategoryGallery data={data} category="Travel"/>
            )}
        </>
    );
}