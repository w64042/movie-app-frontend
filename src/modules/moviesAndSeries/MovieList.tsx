import { useState } from 'react';
import { useQuery } from 'react-query';
import { MoviesListStyled } from 'modules/moviesAndSeries/views/moviesAndSeries/MoviesListStyled';
import { getMovies } from '../../api/moviesAndSeries/hooks/GetMovies';
import Element from './Element';

const MovieList = () => {
  const [errMessage, setErrMessage] = useState<string>('');
  const { data: movies, error, isLoading } = useQuery("moviesData", getMovies);

  if (isLoading) {
    return <div>Pobieranie filmów...</div>;
  }

  return (
    <>
      <h1>Filmy, które musisz zobaczyć</h1>
      <MoviesListStyled>
        {movies?.map((movie: any) => (
          <Element movie={movie} />
        ))}
      </MoviesListStyled></>
  );
}

export default MovieList; 