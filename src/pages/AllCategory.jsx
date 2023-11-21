import UseDataFetch from "../hooks/UseDataFetch";
import AllGallery from "../components/AllGallery";

export default function AllCategory() {
    const { data, loading, error } = UseDataFetch();
    return (
        <>
            <h2>All category</h2>
            {loading ? (
                <p>🌀 Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <AllGallery data={data} />
            )}
        </>
    );
}
