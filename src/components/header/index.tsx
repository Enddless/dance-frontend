import Logo from '../logo';
import Button from '../button';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import HeaderSubmenu from '../header-submenu';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import sprite from 'public/icons/sprite.svg';
import { AppRoute } from '../../const/route';
import { authSlice } from '../../store/slices/auth';

import { pagesHeader } from '../../const/const';
import { getAuthStatus } from '../../store/selectors/selectors';
import { Dialog } from '../dialog';

const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  //  открытие модалки регистрации или входа
  const [isOpenModal, setIsModal] = useState(false);
  const openModalForm = () => {
    setIsModal(!isOpenModal);
  };

  //проверка авторизации пользователя
  const authorizationStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector((state) => state.auth.userData);

  const [userData, setUserData] = useState(user);
  useEffect(() => {
    setUserData(user);
  }, [user]);

  const [isShowBurger, setIsShowBurger] = useState(false);

  const userRole = useAppSelector((state) => state.auth.userRole)?.role;

  return (
    <div className='header'>
      <div className='header__inner container'>
        <div className='header__logo logo'>
          <Logo />
        </div>

        <nav className='header__menu hidden-mobile'>
          <ul className='header__menu-list'>
            {pagesHeader.map((page) => {
              const check = page.title === 'Услуги и цены' || page.title === 'Контакты';
              return (
                <li key={page.id} className='header__menu-item'>
                  {check ? (
                    <HashLink smooth to={page.url} className='header__menu-link'>
                      {page.title}
                    </HashLink>
                  ) : (
                    <Link to={page.url} className='header__menu-link'>
                      {page.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {authorizationStatus === 'AUTH' && userRole === 'customers' && (
          <div className='header__userControl  hidden-mobile'>
            <Link
              to={`${AppRoute.PersonalArea}/notifications`}
              className='header__userControl-notification'>
              <svg width='30' height='30' viewBox='0 0 30 30'>
                <use xlinkHref={`${sprite}#notification`}></use>
              </svg>
            </Link>
            <div className='header__submenu'>
              <Button
                text={
                  userData?.userName !== ''
                    ? `${userData.userName}`
                    : `${userData.emailUser?.split('@')[0]}`
                }
                classList='header__button button--enter'
                openModalForm={openModalForm}></Button>
              {isOpenModal && <HeaderSubmenu openModalForm={openModalForm} />}
            </div>
          </div>
        )}

        {authorizationStatus === 'AUTH' && userRole === 'administrator' && (
          <div className='header__submenu   hidden-mobile'>
            <Button
              text='Admin'
              classList='header__button button--enter'
              openModalForm={openModalForm}></Button>
            {isOpenModal && <HeaderSubmenu openModalForm={openModalForm} />}
          </div>
        )}

        {(authorizationStatus === 'NO_AUTH' ||
          authorizationStatus === 'UNKNOWN' ||
          userRole === '') && (
          <Link
            className='hidden-mobile'
            to={`${AppRoute.Modal}${AppRoute.Login}`}
            state={{ previousLocation: location }}
            onClick={() => dispatch(authSlice.actions.changeFormActive('login'))}>
            <Button text='Вход' classList='header__button button--enter'></Button>
          </Link>
        )}

        {/* dialogs and burgers-button for mobile */}
        {authorizationStatus === 'AUTH' && userRole === 'customers' && (
          <div className='header__mobile-controls visible-mobile'>
            <Link
              to={`${AppRoute.PersonalArea}/notifications`}
              className='header__userControl-notification'>
              <svg width='30' height='30' viewBox='0 0 30 30'>
                <use xlinkHref={`${sprite}#notification`}></use>
              </svg>
            </Link>
            <button
              className='button__burger-menu burger-button visible-mobile'
              type='button'
              onClick={() => setIsShowBurger(!isShowBurger)}>
              <span className='visually-hidden'>Open navigation menu</span>
            </button>
          </div>
        )}

        {authorizationStatus === 'AUTH' && userRole === 'administrator' && (
          <button
            className='button__burger-menu burger-button visible-mobile'
            type='button'
            onClick={() => setIsShowBurger(!isShowBurger)}>
            <span className='visually-hidden'>Open navigation menu</span>
          </button>
        )}

        {(authorizationStatus === 'NO_AUTH' ||
          authorizationStatus === 'UNKNOWN' ||
          userRole === '') && (
          <>
            <button
              className='button__burger-menu burger-button visible-mobile'
              type='button'
              onClick={() => setIsShowBurger(!isShowBurger)}>
              <span className='visually-hidden'>Open navigation menu</span>
            </button>
          </>
        )}

        {isShowBurger && (
          <Dialog onClick={() => setIsShowBurger(!isShowBurger)} userRole={userRole} />
        )}
      </div>
    </div>
  );
};

export default Header;
