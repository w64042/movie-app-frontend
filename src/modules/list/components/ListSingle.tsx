import { Button } from "antd";
import { useDeleteList } from "api/lists/hooks/useDeleteList";
import { useGetLists } from "api/lists/hooks/useGetLists";
import { Spinner } from "commons";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Element from "../../moviesAndSeries/Element";

const UserLists = (refetchFromCreate: any) => {
  const { data: lists, error: errorLists, isLoading, refetch } = useQuery("listsData", useGetLists);
  const { mutate: deleteList, isLoading: deleteLoading } = useDeleteList();
  const [errMessage, setErrMessage] = useState<string>('');

  useEffect(() => {
    if (refetchFromCreate) {
      refetch();
    }
  }, [refetchFromCreate, refetch]);

  const handleDelete = (id: number) => {
    deleteList({ id }, {
      onSuccess: (res) => {
        if (res.error) {
          setErrMessage(res.message);
        } else {
          setErrMessage('');
          refetch();
        }
      },
      onError: (error) => {
        console.error(error);
      },
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (errorLists) {
    return <div>Wystąpił błąd podczas pobierania list</div>;
  }

  return (
    <>
      <h1>Twoje listy</h1>
      {errMessage && <div>{errMessage}</div>}
      {lists.length > 0 && lists.map((list: any) => (
        <> <div key={list.id + Math.random()} className="user-list-wrapper">
          {list.name}&nbsp;&nbsp;&nbsp;&nbsp;<Button onClick={() => handleDelete(list.id)}>Usuń</Button>
          {list.movies?.length > 0 && <div className="user-list">
            {list.movies.map((movie: any) => (
              <Element movie={movie} key={movie.title + Math.random()} />
            ))}
          </div>}
          {list.series.length > 0 && <div className="user-list">
            {list.series.map((serie: any) => (
              <Element movie={serie} key={serie.title + Math.random()} />
            ))}
          </div>}
          {list.movies?.length < 1 && list.series.length < 1 && <div>List jest pusta</div>}
        </div>
          <br />
        </>
      ))}
      {lists.length < 1 && <div>Brak list do wyświetlenia</div>}
      <br />
    </>

  );
};

export default UserLists;