import { NavLink } from "react-router-dom";
import { menuAreaAdministrator } from "../../../../const/const";
import { AppRoute } from "../../../../const/route";
import { useAppDispatch } from "../../../../services/type-service";
import css from "./styles.module.scss";
import { adminSlice } from "../../../../store/slices/admin";
import sprite from "../../../../assets/sprite.svg";
import { memo } from 'react';
import { logout } from "../../../../services/thunk/auth";

function TabsAdminMemo() {
  const dispatch = useAppDispatch();
  const LINK_CLASS = `${css.menuItem}`;
  const ACTIVE_CLASS = `${LINK_CLASS} ${css.active}`;

  //выход из аккаунта
  const handleClick = () => {
    dispatch(logout());
  };
  

  return (
    <>
      <ul className={css.menu}>
        {menuAreaAdministrator.map((button) => {
          return (
            <li key={button.id}>
              <NavLink
                to={`${AppRoute.AdministratorArea}/${button.path}`}
                key={button.id}
                className={({ isActive }) =>
                  isActive ? ACTIVE_CLASS : LINK_CLASS
                }
                onClick={() =>
                  dispatch(
                    adminSlice.actions.changeActiveButtonMenu(button.path)
                  )
                }
              >
                {button.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className={`${css.logout} ${LINK_CLASS}`} onClick={handleClick}>
        <svg width="25" height="25" viewBox="0 0 25 25">
          <use xlinkHref={`${sprite}#logout`}></use>
        </svg>
        <p>Выход</p>
      </div>
    </>
  );
}

const TabsAdmin = memo(TabsAdminMemo);
export default TabsAdmin;
