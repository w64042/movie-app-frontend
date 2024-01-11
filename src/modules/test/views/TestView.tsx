import { MainTemplate, MenuParams } from 'commons';
import MovieList from 'modules/moviesAndSeries/MovieList';
import SeriesList from 'modules/moviesAndSeries/SeriesList';

const TestView = () => {
  return (
    <MainTemplate selected={MenuParams.dashboard}>
      <MovieList />
      <SeriesList />
    </MainTemplate>
  );
};

export default TestView;
