import { MainTemplate, MenuParams } from 'commons';
import MovieList from 'modules/moviesAndSeries/MovieList';

const MovieListView = () => {
  return (
    <MainTemplate selected={MenuParams.dashboard}>
      {/* with props */}
        <MovieList isOwnPage />
      </MainTemplate>
  );
}

export default MovieListView; 