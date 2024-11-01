import React, { useEffect, useState } from "react";

const UseFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setPending(true);
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null);
            setPending(false);
        } catch (error) {
            console.log(error);
            setError(`${error}. Some Error Occurred`);
            setPending(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, error, pending };
};

export default UseFetch;
