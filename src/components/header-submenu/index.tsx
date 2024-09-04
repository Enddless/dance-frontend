import { Link, Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/route';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import { AuthorizationStatus } from '../../const/const';
import { logout } from '../../store/thunk/auth';
import ControlButton from '../controls-button';
import { useEffect, useState } from 'react';
import sprite from 'public/icons/sprite.svg';
import { getAuthStatus } from '../../store/selectors/selectors';

type IModalFormProps = {
  openModalForm?: () => void;
};

const HeaderSubmenu = ({ openModalForm }: IModalFormProps) => {
  useEffect(() => {
    const findContainer = document.querySelector('#area');

    setTimeout(() => {
      findContainer?.classList.add(`active`);
    }, 10);

    return () => {
      setTimeout(() => {
        findContainer?.classList.remove(`active`);
      }, 10);
    };
  }, []);

  //выход из аккаунта
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logout());
    if (openModalForm) {
      openModalForm();
    }
  };

  //проверка авторизации пользователя
  const authorizationStatus = useAppSelector(getAuthStatus);
  const roleData = useAppSelector((state) => state.auth.userRole)?.role;

  const [role, setRole] = useState(roleData);
  useEffect(() => {
    setRole(roleData);
  }, [roleData]);

  if (authorizationStatus !== AuthorizationStatus.Auth || role === '') {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className='area' id='area'>
      <div className='area__decoration'></div>
      <div className='area__controls'>
        <ControlButton id='close' onClick={openModalForm} />
      </div>

      <ul className='area__submenu-list'>
        <p className='area__submenu-item' onClick={openModalForm}>
          <Link
            to={
              role === 'customers' ? AppRoute.PersonalArea : AppRoute.AdministratorArea
            }>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <use xlinkHref={`${sprite}#user`}></use>
            </svg>
            Профиль
          </Link>
        </p>

        <p className='area__submenu-item' onClick={handleClick}>
          <Link to={AppRoute.Root}>
            <svg width='24' height='24' viewBox='0 0 25 25'>
              <use xlinkHref={`${sprite}#logout`}></use>
            </svg>
            Выход
          </Link>
        </p>
      </ul>
    </div>
  );
};

export default HeaderSubmenu;
