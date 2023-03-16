import useFetch from '../hooks/useFetch';

const Example1 = () => {
    const { data, loading, error } = useFetch(
        'https://www.omdbapi.com/?apikey=aa9e49f&s=spider'
    );

    return (
        <>
            <h5 className='mt-3 mb-3'>Spiderman movies</h5>
            {loading && <p>loading...</p>}
            {!error && !loading && (
                <ul className='list-group'>
                    {data?.Search?.map((m: any) => (
                        <li key={m.imdbID} className='list-group-item'>
                            {m.Title}
                        </li>
                    ))}
                </ul>
            )}
            {error && <p className='text-danger'>{error}</p>}
        </>
    );
};

export default Example1;
