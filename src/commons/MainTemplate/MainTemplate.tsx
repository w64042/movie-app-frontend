import { IMenuItem, TopBar, SideBar} from 'commons';
import {
  MainWrapper,
  MenuWrapper,
  ContentWrapper,
} from './MainTemplate.styles';

interface IMainTemplateProps {
  children: React.ReactNode;
  selected: IMenuItem;
}

export const MainTemplate: React.FC<IMainTemplateProps> = ({
  children,
  selected,
}) => {
  return (
    <MainWrapper>
      <TopBar />
      <MenuWrapper>
        <SideBar selected={selected} />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </MenuWrapper>
    </MainWrapper>
  );
};
