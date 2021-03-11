import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  AppWrapper,
  GlobalStyle,
  GridWrapper,
  HeaderWrapper,
  Input,
  MovieWrapper
} from './App.styles';

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

const App: React.FC = () => {
  const [filterValue, setFilterValue] = useState('');
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let mounted = true;
    if (filterValue !== '') {
      const delaySearchFn = setTimeout(() => {
        setLoading(true);
        axios
          .get(
            `https://www.omdbapi.com/?s=${filterValue}&apikey=${process.env.REACT_APP_API_KEY}`
          )
          .then((res) => {
            if (mounted) {
              setLoading(false);
              setMovies(res.data.Search);
              if (res.data.Search === undefined) {
                setErrMsg(res.data.Error);
              }
            }
          })
          .catch((err) => setErrMsg(err.message));
      }, 2000);

      return () => clearTimeout(delaySearchFn);
    }
  }, [filterValue]);

  const hndleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrMsg(null);
    setMovies([]);
    setFilterValue(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <HeaderWrapper>
          <h1>Search for a movie</h1>
          {errMsg && <h2>{errMsg}</h2>}
          {loading && <h2>Loading...</h2>}
          <Input
            placeholder="Search by title"
            value={filterValue}
            onChange={hndleInputChange}
          />
        </HeaderWrapper>
        <GridWrapper>
          {movies !== undefined &&
            movies.map((movie) => (
              <MovieWrapper key={movie.imdbID}>
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  title="See details - go to IMDB"
                >
                  <img src={movie.Poster} alt={movie.Title + movie.Year} />
                  <h4>
                    {movie.Title}, {movie.Year}
                  </h4>
                </a>
              </MovieWrapper>
            ))}
        </GridWrapper>
      </AppWrapper>
    </>
  );
};

export default App;
