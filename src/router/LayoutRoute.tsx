import { BasicContainer, IMenuItem, MainTemplate } from 'commons';

interface ILayoutRouteProps {
  children: React.ReactNode;
  selected: IMenuItem;
  isCentered?: boolean;
}
export const LayoutRoute: React.FC<ILayoutRouteProps> = ({
  children,
  selected,
  isCentered,
}) => {
  return (
    <MainTemplate selected={selected}>
      <BasicContainer isCentered={isCentered}>{children}</BasicContainer>
    </MainTemplate>
  );
};
