import { MainTemplate, MenuParams } from 'commons';
import Lists from 'modules/list/Lists';
import MovieList from 'modules/moviesAndSeries/MovieList';
import SeriesList from 'modules/moviesAndSeries/SeriesList';

const TestView = () => {
  return (
    <MainTemplate selected={MenuParams.dashboard}>
      <Lists />
      <MovieList />
      <SeriesList />
    </MainTemplate>
  );
};

export default TestView;
