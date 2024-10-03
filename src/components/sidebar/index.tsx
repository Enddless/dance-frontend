import { NavLink } from 'react-router-dom';
import sprite from 'public/icons/sprite.svg';
import { memo, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import { logout } from '../../store/thunk/auth';
import { AppRoute } from '../../const/route';
import { menuAreaAdministrator } from '../../const/const';
import { adminSlice } from '../../store/slices/admin';
import { LogotypeSettingsSlice } from '../../slices/adminpage/adminpage-logo';
import { Dialog } from '../dialog';

function SidebarMemo() {
  const userRole = useAppSelector((state) => state.auth.userRole)?.role;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const LINK_CLASS = 'admin__sidebar-item';
  const ACTIVE_CLASS = `${LINK_CLASS} active`;

  //выход из аккаунта
  const handleClick = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate(AppRoute.Root);
      });
  };
  //возврат домой
  const returnHome = () => {
    navigate(AppRoute.Root);
  };

  const [isShowBurger, setIsShowBurger] = useState(false);

  return (
    <aside className='admin__sidebar'>
      <div className='admin__sidebar-content hidden-mobile'>
        <div className='admin__sidebar-logo logotype-settings'>
          <LogotypeSettingsSlice />
        </div>
        <ul className='admin__sidebar-list'>
          {menuAreaAdministrator.map((button) => {
            return (
              <li key={button.id} className='admin__sidebar-item-wrapper'>
                <NavLink
                  to={`${AppRoute.AdministratorArea}/${button.path}`}
                  className={({ isActive }) => (isActive ? ACTIVE_CLASS : LINK_CLASS)}
                  onClick={() =>
                    dispatch(adminSlice.actions.changeActiveButtonMenu(button.path))
                  }>
                  {button.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className='admin__sidebar-controls  hidden-mobile'>
        <li className={`admin__sidebar-control ${LINK_CLASS}`} onClick={returnHome}>
          <svg width='25' height='25' viewBox='0 0 25 25'>
            <use xlinkHref={`${sprite}#return`}></use>
          </svg>
          <p>На главную</p>
        </li>
        <li className={`admin__sidebar-control ${LINK_CLASS}`} onClick={handleClick}>
          <svg width='25' height='25' viewBox='0 0 25 25'>
            <use xlinkHref={`${sprite}#logout`}></use>
          </svg>
          <p>Выход</p>
        </li>
      </ul>

      <button
        className='button__burger-menu burger-button visible-mobile'
        type='button'
        onClick={() => setIsShowBurger(!isShowBurger)}>
        <span className='visually-hidden'>Open navigation menu</span>
      </button>
      {isShowBurger && (
        <Dialog onClick={() => setIsShowBurger(!isShowBurger)} userRole={userRole} />
      )}
    </aside>
  );
}

const Sidebar = memo(SidebarMemo);
export default Sidebar;
