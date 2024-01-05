import { IMenuItem, MenuParams } from 'commons';
import { NavListItem } from './Nav.styles';

interface INavProps {
  selected: IMenuItem;
}

export const Nav: React.FC<INavProps> = () => {
  return (
    <ul>
      {MenuParams.menu.map((item: IMenuItem) => (
        <NavListItem key={item.name} to={item.route}>
          <li>{item.name}</li>
        </NavListItem>
      ))}
    </ul>
  );
};
