import React, {useState} from 'react';

const Filter = ({movies, setFilteredMovies}) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    const filteredMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(title.toLowerCase()) && 
      movie.rating >= rating
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className="filter">
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Rating" 
        value={rating} 
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default Filter;
