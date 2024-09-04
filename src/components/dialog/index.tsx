import { HashLink } from 'react-router-hash-link';
import { pagesHeader } from '../../const/const';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../services/type-service';

import { AppRoute } from '../../const/route';

import sprite from 'public/icons/sprite.svg';
import { logout } from '../../store/thunk/auth';
import { useState } from 'react';

type TDialodProps = {
  onClick?: () => void;
  userRole: string | undefined;
};
export const Dialog = ({ onClick, userRole }: TDialodProps) => {
  //  открытие модалки регистрации или входа
  const [isOpenModal, setIsModal] = useState(true);
  const openModalForm = () => {
    setIsModal(!isOpenModal);
  };

  //выход из аккаунта
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logout());
    if (openModalForm) {
      openModalForm();
    }
  };

  return (
    <dialog className='mobile-overlay visible-mobile' onClick={onClick}>
      <form className='mobile-overlay__close-button-wrapper' method='dialog'>
        <button className='mobile-overlay__close-button cross-button' type='submit'>
          <span className='visually-hidden'>Close navigation menu</span>
        </button>
      </form>
      <div className='mobile-overlay__body'>
        <ul
          // className={css.burger}
          className='mobile-overlay__list'>
          {pagesHeader.map((page) => {
            const check = page.title === 'Услуги и цены' || page.title === 'Контакты';
            return (
              <li
                key={page.id}
                // className={css.menuItem}
                className='mobile-overlay__item'>
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
        </ul>
      </div>
    </dialog>
  );
};
