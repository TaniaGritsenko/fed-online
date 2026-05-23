import React from 'react';

const Genres = () => {
    let genres = [
        {
            value: "Drama",
        },
        {
            value: "Thriller",
        },
        {
            value: "Supernatural",
        },
    ];
    let genresEl = genres.map((item, index) => {
    return (
        <span key={index}>
            {item.value}
            {index !== genres.length -1 && <span className='genre-line'> | </span>}
            </span>
    );
});
    return <div className='text-genre'>{genresEl}</div>
};

export default Genres;