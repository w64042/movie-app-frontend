import { MainTemplate, MenuParams } from 'commons';
import SeriesList from 'modules/moviesAndSeries/SeriesList';

const SeriesListView = () => {
  return (
    <MainTemplate selected={MenuParams.dashboard}>
      <SeriesList />
    </MainTemplate>
  );
}

export default SeriesListView; 