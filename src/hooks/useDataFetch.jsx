import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useDataFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL;

        axios.get(url)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })

            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}
