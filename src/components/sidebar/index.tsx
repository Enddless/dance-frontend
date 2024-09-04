import { NavLink } from 'react-router-dom';
import sprite from 'public/icons/sprite.svg';
import { memo } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/type-service';
import { logout } from '../../store/thunk/auth';
import { AppRoute } from '../../const/route';
import { menuAreaAdministrator } from '../../const/const';
import { adminSlice } from '../../store/slices/admin';
import { LogotypeSettingsSlice } from '../../slices/adminpage/adminpage-logo';

function SidebarMemo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const LINK_CLASS = 'admin-page__sidebar-item';
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

  return (
    <aside className='admin-page__sidebar'>
      <div className='admin-page__sidebar-content'>
        <div className='admin-page__sidebar-logo'>
          <LogotypeSettingsSlice />
        </div>
        <ul className='admin-page__sidebar-list'>
          {menuAreaAdministrator.map((button) => {
            return (
              <li key={button.id}>
                <NavLink
                  to={`${AppRoute.AdministratorArea}/${button.path}`}
                  key={button.id}
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

      <ul className='admin-page__sidebar-controls'>
        <li className={`logout ${LINK_CLASS}`} onClick={returnHome}>
          <svg width='25' height='25' viewBox='0 0 25 25'>
            <use xlinkHref={`${sprite}#return`}></use>
          </svg>
          <p>На главную</p>
        </li>
        <li className={`logout ${LINK_CLASS}`} onClick={handleClick}>
          <svg width='25' height='25' viewBox='0 0 25 25'>
            <use xlinkHref={`${sprite}#logout`}></use>
          </svg>
          <p>Выход</p>
        </li>
      </ul>
    </aside>
  );
}

const Sidebar = memo(SidebarMemo);
export default Sidebar;
