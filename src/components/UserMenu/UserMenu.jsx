import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import s from './UserMenu.module.css';
import { selectAuthUser } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
