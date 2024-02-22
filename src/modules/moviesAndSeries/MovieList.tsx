import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { MoviesListStyled } from 'modules/moviesAndSeries/views/moviesAndSeries/MoviesListStyled';
import { getMovies } from '../../api/moviesAndSeries/hooks/GetMovies';
import Element from './Element';

interface MyComponentProps {
  isOwnPage?: boolean;
}

const MovieList: React.FC<MyComponentProps> = (props) => {
  const [errMessage, setErrMessage] = useState<string>('');
  const { data: movies, error, isLoading } = useQuery("moviesData", getMovies);
  const ref = useRef(null);
  if (isLoading) {
    return <div>Pobieranie filmów...</div>;
  }

  const scrollBottom = () => {
    const last = ref.current as any;
    last.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <h1>Filmy, które musisz zobaczyć</h1>
     {!props.isOwnPage && <div><button onClick={scrollBottom}>Pssst. jeśli szukasz seriali kliknij tutaj</button></div>}
      <MoviesListStyled>
        {movies.length > 0 && movies.map((movie: any) => (
          <Element movie={movie} key={movie.title + Math.random()} />
        ))}
        {movies.length < 1 && <div>Brak filmów do wyświetlenia</div>}
      </MoviesListStyled>
      <div ref={ref} />
    </>
  );
}

export default MovieList; 