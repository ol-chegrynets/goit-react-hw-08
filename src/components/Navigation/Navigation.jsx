import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <nav className={s.navigation}>
      <NavLink className={s.link} to="/">
        Home Page
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Contacts Page
        </NavLink>
      )}
    </nav>
  );
};
