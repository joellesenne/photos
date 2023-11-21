import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UseDataFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL;

        axios(url)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            // eslint-disable-next-line no-shadow
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}
