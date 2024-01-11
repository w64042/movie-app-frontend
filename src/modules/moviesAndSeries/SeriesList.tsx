import { useQuery } from 'react-query';
import { SeriesListStyled } from 'modules/moviesAndSeries/views/moviesAndSeries/SeriesListStyled';
import { getSeries } from '../../api/moviesAndSeries/hooks/GetSeries';
import Element from './Element';

const SeriesList = () => {
  const { data: series, error, isLoading } = useQuery("seriesData", getSeries);
  return (
    <SeriesListStyled>
      {/* {series?.map((serie: any) => (
       <Element movie={serie} />
      ))} */}
    </SeriesListStyled>
  );
}

export default SeriesList; 