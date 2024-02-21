import { useQuery } from 'react-query';
import { SeriesListStyled } from 'modules/moviesAndSeries/views/moviesAndSeries/SeriesListStyled';
import { getSeries } from '../../api/moviesAndSeries/hooks/GetSeries';
import Element from './Element';

const SeriesList = () => {
  const { data: series, error, isLoading } = useQuery("seriesData", getSeries);

  if (isLoading) {
    return <div>Pobieranie filmów...</div>;
  }

  return (
    <>
      <h1>Seriale, warte Twojego czasu</h1>

      <SeriesListStyled>
        {series?.map((serie: any) => (
          <Element movie={serie} key={serie.title + Math.random()} />
        ))}
      </SeriesListStyled>
    </>
  );
}

export default SeriesList; 