import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetDataFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line no-undef
        const url = process.env.REACT_APP_API_URL;

        axios(url)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}
