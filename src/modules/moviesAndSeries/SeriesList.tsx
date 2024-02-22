import { useQuery } from 'react-query';
import { SeriesListStyled } from 'modules/moviesAndSeries/views/moviesAndSeries/SeriesListStyled';
import { getSeries } from '../../api/moviesAndSeries/hooks/GetSeries';
import Element from './Element';

const SeriesList = () => {
  const { data: series, error, isLoading } = useQuery("seriesData", getSeries);

  if (isLoading) {
    return <div>Pobieranie seriali...</div>;
  }

  return (
    <>
      <h1>Seriale, warte Twojego czasu</h1>

      <SeriesListStyled>
        {series.length > 0 && series?.map((serie: any) => (
          <Element movie={serie} key={serie.title + Math.random()} />
        ))}
        {series.length < 1 && <div>Brak seriali do wyświetlenia</div>}
      </SeriesListStyled>
    </>
  );
}

export default SeriesList; 