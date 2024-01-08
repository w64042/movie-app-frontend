import {useGetMovies} from '../../api/moviesAndSeries/hooks/useGetMovies';

const List = () => {
  const { data } = useGetMovies();
  return (
    <div>
      {data.moviesAndSeries.map((item: any) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default List; 