import { NavLink } from 'react-router-dom';
import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import { menuAreaPersonal } from '../../const/const';
import { AppRoute } from '../../const/route';
import { getTickets } from '../../store/thunk/tickets';
import { authSlice } from '../../store/slices/auth';
import Button from '../button';

function SidebarUserMemo() {
  const dispatch = useAppDispatch();
  const buttonActiveData = useAppSelector((state) => state.auth.buttonActive);

  const handleClick = (path: string) => {
    dispatch(authSlice.actions.changeActiveButtonMenuPersonal(path));
    // в зависимости от нажатой кнопки формировать dispatch
    switch (path) {
      case 'tickets':
        dispatch(getTickets());
        break;

      default:
        break;
    }
  };

  return (
    <div className='user__sidebar'>
      <ul className='user__sidebar-list'>
        {menuAreaPersonal.map((button) => {
          const isActive = button.path === buttonActiveData;
          return (
            <li key={button.id} className='user__sidebar-item'>
              <NavLink
                to={`${AppRoute.PersonalArea}/${button.path}`}
                key={button.id}
                // className={({ isActive }) =>
                //   isActive ? ACTIVE_CLASS : LINK_CLASS
                // }
                onClick={() => handleClick(button.path)}>
                <Button
                  text={button.title}
                  cls='menuAreaUser'
                  activeMenuUser={isActive}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const SidebarUser = memo(SidebarUserMemo);
export default SidebarUser;
