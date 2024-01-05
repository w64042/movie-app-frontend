import styled from 'styled-components';
import { Spin } from 'antd';

const SpinContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = () => {
  return (
    <SpinContainer>
      <Spin />
    </SpinContainer>
  );
};
