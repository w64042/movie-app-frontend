import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoutBtn } from 'assets/svg/user-regular.svg';
import { Button, Popover } from 'antd';
import { useLogout } from 'api/login/hooks/useLogout';
import { useCookies } from 'react-cookie';
import { Spinner } from 'commons/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { ErrMessage } from 'commons/ErrMessage/ErrMessage';

const IconWrapper = styled.div``;

export const Logout = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { mutate: logout, isLoading } = useLogout();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies();
  const [errMessage, setErrMessage] = useState<string>('');
  const navigate = useNavigate();

  const hide = () => {
    setHovered(false);
  };

  const handleLogout = () => {
    logout(null, {
      onSuccess: (res) => {
        if (res.error) {
          setErrMessage(res.message);
        } else {
          setErrMessage('');
          removeCookie('User', { path: '/' });
          navigate('/login');
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
        <Button disabled={isLoading} onClick={hide}>
          Nie
        </Button>
        <Button disabled={isLoading} onClick={handleLogout}>
          Tak
        </Button>
      </div>
      <div> {isLoading && <Spinner />} </div>
      {errMessage && <ErrMessage errMessage={errMessage} />}
    </div>
  );

  return (
    <Popover
      style={{ width: 500 }}
      content={hoverContent}
      title='Wylogować?'
      trigger={'click'}
      open={hovered}
      onOpenChange={handleHoverChange}
      placement='leftBottom'
    >
      <IconWrapper>
        <LogoutBtn />
      </IconWrapper>
    </Popover>
  );
};
