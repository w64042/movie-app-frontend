import { IMenuItem, Nav } from 'commons';
import { SideBarWrapper } from './SideBar.styles';

interface ISideBarProps {
  selected: IMenuItem;
}

export const SideBar: React.FC<ISideBarProps> = ({selected}) => {
  return (
    <SideBarWrapper>
      <Nav selected={selected}/>
    </SideBarWrapper>
  )
}