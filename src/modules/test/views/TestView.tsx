import { MainTemplate, MenuParams } from 'commons';

const TestView = () => {
  return (
    <MainTemplate selected={MenuParams.dashboard}>
      <h1>This is the test view</h1>
    </MainTemplate>
  );
};

export default TestView;
