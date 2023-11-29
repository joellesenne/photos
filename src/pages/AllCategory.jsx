import UseDataFetch from "../hooks/UseDataFetch";
import AllGallery from "../components/AllGallery";

export default function AllCategory() {
    const { data, loading, error } = UseDataFetch();
    if (loading) {
        return (
            <>
                <h2>All</h2>
                <p>🌀 Loading...</p>
            </>
        );
    } return (
        <>
            <h2>All</h2>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <AllGallery data={data}/>
            )}
        </>
    );
}
