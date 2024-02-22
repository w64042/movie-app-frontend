import { Button } from "antd";
import { useGetLists } from "api/lists/hooks/useGetLists";
import { Spinner } from "commons";
import { useQuery } from "react-query";

const UserLists = () => {
  const { data: lists, error, isLoading } = useQuery("listsData", useGetLists);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h1>Twoje listy</h1>
      {lists.length > 0 && lists.map((list: any) => (
        <> <div key={list.id}>
          {list.name}&nbsp;&nbsp;&nbsp;&nbsp;<Button>Usuń</Button>
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