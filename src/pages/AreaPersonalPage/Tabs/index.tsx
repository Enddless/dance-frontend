import { NavLink } from "react-router-dom";
import css from "./styles.module.scss";
import { memo } from 'react';
import { useAppDispatch } from "../../../services/type-service";
import { menuAreaPersonal } from "../../../const/const";
import { AppRoute } from "../../../const/route";
import { userSlice } from "../../../store/slices/user";

function TabsPersonalMemo() {
  const dispatch = useAppDispatch();
  const LINK_CLASS = `${css.menuAreaButton}`;
  const ACTIVE_CLASS = `${LINK_CLASS} ${css.active}`;

  return (
    <>
      <ul className={css.btnGroup}>
        {menuAreaPersonal.map((button) => {
          return (
            <li key={button.id}>
              <NavLink
                to={`${AppRoute.PersonalArea}/${button.path}`}
                key={button.id}
                className={({ isActive }) =>
                  isActive ? ACTIVE_CLASS : LINK_CLASS
                }
                onClick={() =>
                  dispatch(
                    userSlice.actions.changeActiveButtonMenuPersonal(button.path)
                  )
                }
              >
                {button.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const TabsPersonal = memo(TabsPersonalMemo);
export default TabsPersonal;
