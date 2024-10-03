import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import { adminSlice } from '../../store/slices/admin';
import { DEFAULT_BUTTON_AREA_ADMIN } from '../../const/const';
import { getCurrentUserRole } from '../../store/thunk/auth';
import { aboutStudio } from '../../store/thunk/studio';
import Sidebar from '../../components/sidebar';
import { ContentSlice } from './adminpage-content';

export const AdminPageSlice = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentMenuButton = useAppSelector((state) => state.admin.buttonActive);
  const location = useLocation().pathname.slice(1).split('/')[1];

  // если поменялась кнопка,вызвать диспатч
  useEffect(() => {
    dispatch(adminSlice.actions.changeActiveButtonMenu(location));
  }, [location, dispatch]);

  // если определить адрес не удалось, направить на меню по дефолту
  useEffect(() => {
    if (!location) {
      navigate(`${DEFAULT_BUTTON_AREA_ADMIN.path}`);
    }
  }, [navigate, location]);

  useEffect(() => {
    dispatch(getCurrentUserRole());
    dispatch(aboutStudio());
  }, [dispatch]);

  return (
    <section className='admin grid grid--2'>
      <Sidebar />

      {currentMenuButton && <ContentSlice isActiveButton={currentMenuButton} />}
    </section>
  );
};
