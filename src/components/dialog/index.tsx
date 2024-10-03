import { HashLink } from 'react-router-hash-link';
import { menuAreaAdministrator, pagesHeader } from '../../const/const';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/type-service';
import { AppRoute } from '../../const/route';
import sprite from 'public/icons/sprite.svg';
import { logout } from '../../store/thunk/auth';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { adminSlice } from '../../store/slices/admin';
import { authSlice } from '../../store/slices/auth';
import classNames from 'classnames';

type TDialodProps = {
  onClick?: () => void;
  userRole: string | undefined;
};
export const Dialog = ({ onClick, userRole }: TDialodProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //  открытие модалки регистрации или входа
  const [isOpenModal, setIsModal] = useState(true);
  const openModalForm = () => {
    setIsModal(!isOpenModal);
  };

  //выход из аккаунта
  const handleClick = () => {
    dispatch(logout());
    if (openModalForm) {
      openModalForm();
    }
  };

  //возврат домой
  const returnHome = () => {
    navigate(AppRoute.Root);
  };
  const overlayClassList = classNames('mobile-overlay visible-mobile', {
    'mobile-overlay--admin': userRole === 'administrator'
  });

  return (
    <dialog className={overlayClassList} onClick={onClick}>
      <form className='mobile-overlay__close-button-wrapper' method='dialog'>
        <button className='mobile-overlay__close-button cross-button' type='submit'>
          <span className='visually-hidden'>Close navigation menu</span>
        </button>
      </form>
      <div className='mobile-overlay__body'>
        {userRole === 'administrator' ? (
          <ul className='mobile-overlay__list'>
            {menuAreaAdministrator.map((button) => {
              return (
                <li key={button.id} className='mobile-overlay__item'>
                  <NavLink
                    to={`${AppRoute.AdministratorArea}/${button.path}`}
                    className='admin__sidebar-item'
                    onClick={() =>
                      dispatch(adminSlice.actions.changeActiveButtonMenu(button.path))
                    }>
                    {button.title}
                  </NavLink>
                </li>
              );
            })}
            <li className='mobile-overlay__item' onClick={returnHome}>
              <svg width='25' height='25' viewBox='0 0 25 25'>
                <use xlinkHref={`${sprite}#return`}></use>
              </svg>
              <p>На главную</p>
            </li>
            <li className='mobile-overlay__item' onClick={handleClick}>
              <svg width='25' height='25' viewBox='0 0 25 25'>
                <use xlinkHref={`${sprite}#logout`}></use>
              </svg>
              <p>Выход</p>
            </li>
          </ul>
        ) : (
          <ul className='mobile-overlay__list'>
            {pagesHeader.map((page) => {
              const check = page.title === 'Услуги и цены' || page.title === 'Контакты';
              return (
                <li key={page.id} className='mobile-overlay__item'>
                  {check ? (
                    <HashLink smooth to={page.url} className='mobile-overlay__link'>
                      {page.title}
                    </HashLink>
                  ) : (
                    <Link to={page.url} className='mobile-overlay__link'>
                      {page.title}
                    </Link>
                  )}
                </li>
              );
            })}

            {userRole === 'customers' ? (
              <>
                <li className='mobile-overlay__item'>
                  <Link
                    to={
                      userRole === 'customers'
                        ? AppRoute.PersonalArea
                        : AppRoute.AdministratorArea
                    }>
                    <svg width='24' height='24' viewBox='0 0 24 24'>
                      <use xlinkHref={`${sprite}#user`}></use>
                    </svg>
                    Профиль
                  </Link>
                </li>

                <li className='mobile-overlay__item' onClick={handleClick}>
                  <Link to={AppRoute.Root}>
                    <svg width='24' height='24' viewBox='0 0 25 25'>
                      <use xlinkHref={`${sprite}#logout`}></use>
                    </svg>
                    Выход
                  </Link>
                </li>
              </>
            ) : (
              <li className='mobile-overlay__item'>
                <Link
                  className='header__icon-enter visible-mobile'
                  to={`${AppRoute.Modal}${AppRoute.Login}`}
                  state={{ previousLocation: '/' }}
                  onClick={() => dispatch(authSlice.actions.changeFormActive('login'))}>
                  <svg width='48' height='48' viewBox='0 0 48 48'>
                    <use xlinkHref={`${sprite}#enter`}></use>
                  </svg>
                  Вход
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </dialog>
  );
};
