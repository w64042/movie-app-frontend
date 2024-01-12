import { useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from 'antd';
import { ListsStyled } from './views/ListsStyled';
import { getMovies } from '../../api/moviesAndSeries/hooks/GetMovies';

const Lists = () => {

  return (
    <>
      <h1>Twoje listy</h1>
      <ListsStyled>
        <p>Nic tutaj nie ma...
        <br/><small>PS. martwimy się, że nic nie oglądasz</small>
        </p>
        <Button>
          Dodaj listę
        </Button>
      </ListsStyled>
    </>
  );
}

export default Lists; 