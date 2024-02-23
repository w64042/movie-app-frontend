import { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Input, Popover } from 'antd';
import { ErrMessage, Spinner } from 'commons';
import { SuccessMessage } from 'commons/SuccessMessage/SuccessMessage';
import { useCreateList } from 'api/lists/hooks/useCreateList';
import { ListsStyled } from './views/ListsStyled';
import UserLists from './components/ListSingle';

const Lists = () => {
  const [name, setName] = useState<string>('');
  const [hovered, setHovered] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>('');
  const { mutate: createList, isLoading } = useCreateList();
  const [successMessage, setSuccessMessage] = useState<string>('');

  const hide = () => {
    setHovered(false);
  };

  const handleCreateList = () => {
    createList({name}, {
      onSuccess: (res) => {
        if (res.error) {
          setErrMessage(res.message);
        } else {
          setErrMessage('');
          setSuccessMessage('Lista została dodana');
          setName('');

        }
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const handleHoverChange = (open: boolean) => {
    setHovered(open);
  };

  const hoverContent = (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Input
          type='text'
          placeholder='Nazwa listy'
          name='name'
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />
        <Button disabled={isLoading} onClick={hide}>
          &times;
        </Button>
        <Button disabled={isLoading} onClick={handleCreateList}>
          Dodaj
        </Button>
      </div>
      <div> {isLoading && <Spinner />} </div>
      {errMessage && <ErrMessage errMessage={errMessage} />}
      {successMessage && <SuccessMessage successMessage={successMessage} />}
    </div>
  );

  return (
    <>
      <h1>Twoje listy</h1>
      <ListsStyled>
        <UserLists refetchFromCreate={name} />
        <Popover
          style={{ width: 500 }}
          content={hoverContent}
          title='Stwórz listę'
          trigger={'click'}
          open={hovered}
          onOpenChange={handleHoverChange}
          placement='leftBottom'
        >
          <Button>
            Dodaj listę
          </Button>
        </Popover>
      </ListsStyled>
    </>
  );
}

export default Lists; 