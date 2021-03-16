import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../../../GlobalStyle/GlobalStyle.styles';
import Input from '../../atoms/Input/Input';
import Message, { Msg } from '../../atoms/Message/Message';
import Card from '../../molecules/Card/Card';
import Header from '../../molecules/Header/Header';
import { GridWrapper } from '../GridWrapper/GridWrapper.styles';
import { AppWrapper } from './App.styles';

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

const App: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>('');
  const [status, setStatus] = useState<Msg>({
    loading: false,
    error: false,
    content: null,
  });
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let mounted = true;
    if (filterValue !== '') {
      const delaySearchFn = setTimeout(() => {
        setStatus((prevState) => ({
          ...prevState,
          loading: true,
        }));
        axios
          .get(
            `https://www.omdbapi.com/?s=${filterValue}&apikey=${process.env.REACT_APP_API_KEY}`
          )
          .then((res) => {
            if (mounted) {
              console.log(res);
              setStatus((prevState) => ({
                ...prevState,
                loading: false,
              }));
              if (res.data.Search === undefined) {
                setStatus((prevState) => ({
                  ...prevState,
                  error: true,
                  content: res.data.Error,
                }));
              } else {
                setMovies(res.data.Search);
              }
            }
          })
          .catch((err) =>
            setStatus({ loading: false, error: true, content: err.message })
          );
      }, 2000);

      return () => {
        clearTimeout(delaySearchFn);
        mounted = false;
      };
    }
  }, [filterValue]);

  const hadleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setStatus({
        loading: false,
        error: true,
        content: 'You must type some word to search',
      });
    } else {
      setStatus({ loading: true, error: false, content: null });
    }
    setMovies([]);
    setFilterValue(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header>
          <h1>Search for a movie</h1>
          <Input
            value={filterValue}
            placeholder="Search for a movie..."
            onChange={hadleInputChange}
          />
          {(status.loading || status.error) && <Message msg={status} />}
        </Header>
        <GridWrapper>
          {movies !== undefined &&
            movies.map((movie) => (
              <Card
                uniqueKey={movie.imdbID}
                linkHref={`https://www.imdb.com/title/${movie.imdbID}`}
                imgSrc={movie.Poster}
                imgAlt={`${movie.Title}, ${movie.Year}`}
                title={`${movie.Title}, ${movie.Year}`}
              />
            ))}
        </GridWrapper>
      </AppWrapper>
    </>
  );
};

export default App;
