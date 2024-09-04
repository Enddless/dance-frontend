import { useEffect } from 'react';
import { DEFAULT_BUTTON_AREA_PERSONAL } from '../../const/const';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import { authSlice } from '../../store/slices/auth';
import SidebarUser from '../../components/sidebar-user';
import ContentUserSlice from './userpage-content';

export const UserPageSlice = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation().pathname.slice(1).split('/')[1];
  const currentButton = useAppSelector((state) => state.auth.buttonActive);

  useEffect(() => {
    dispatch(authSlice.actions.changeActiveButtonMenuPersonal(location));
  }, [location, dispatch]);

  // если определить адрес не удалось, направить на меню по дефолту
  useEffect(() => {
    if (!location) {
      navigate(`${DEFAULT_BUTTON_AREA_PERSONAL.path}`);
    }
  }, [navigate, location]);

  // useEffect(() => {
  //   dispatch(getCurrentUserRole());
  //   dispatch(mainPageData());
  // }, [dispatch]);

  // показывать лоадер пока грузятся данные из perssit
  // const isRehydrated = useAppSelector((state) => state._persist.rehydrated);

  return (
    <section className='section'>
      <div className='user container'>
        <SidebarUser />
        {currentButton && <ContentUserSlice currentButton={currentButton} />}
      </div>
    </section>
  );
};
