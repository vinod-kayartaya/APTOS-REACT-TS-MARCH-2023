import { useEffect, useState } from "react";

const useFetch = (url: string) => {

    const [data, setData] = useState<any>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                if ('Error' in data) {
                    setError(data.Error);
                }
                else {
                    setData(data);
                }
            })
            .finally(() => setLoading(false));

    }, [url]);

    return { data, error, loading };

};

export default useFetch;