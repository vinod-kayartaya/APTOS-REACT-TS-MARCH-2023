import React, { useState } from 'react';

const apikey = 'aa9e49f';

type MovieType = {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Type: string;
};

const MovieApp = () => {
    const [keyword, setKeyword] = useState('');
    const [movies, setMovies] = useState([]);
    const moviesJsx = movies.map((m: MovieType) => (
        <li className='list-group-item' key={m.imdbID}>
            <div className='row'>
                <div className='col-2'>
                    <img
                        style={{ maxWidth: '150px' }}
                        className='img-thumbnail'
                        src={m.Poster}
                        alt={m.Title}
                    />
                </div>
                <div className='col-10'>
                    <h3>{m.Title}</h3>
                </div>
            </div>
        </li>
    ));

    const submitHandler = async (evt: React.FormEvent) => {
        evt.preventDefault();
        if (!keyword) return;

        const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${keyword}`;
        const resp = await fetch(url);
        const result = await resp.json();
        setMovies(result.Search);
    };

    return (
        <>
            <div className='container' style={{ marginTop: '20px' }}>
                <form onSubmit={submitHandler}>
                    <input
                        className='form-control'
                        type='search'
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder='search for movie title...'
                        autoFocus
                    />
                </form>

                <ul className='list-group'>{moviesJsx}</ul>
            </div>
        </>
    );
};

export default MovieApp;
