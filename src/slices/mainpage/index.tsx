import { useEffect } from 'react';
import { AboutSlice } from './mainpage-about';
import { BannersSlice } from './mainpage-banners';
import { PersonalSlice } from './mainpage-personal';
import { ContactsSlice } from './mainpage-contacts';
import { PricesSlice } from './mainpage-prices';
import { ReviewsSlice } from './mainpage-reviews';
import { useAppDispatch } from '../../services/type-service';
import { mainPageData } from '../../store/thunk/mainPage';

export const MainPageSlice = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainPageData());
  }, [dispatch]);

  return (
    <>
      <BannersSlice />
      <div className='container'>
        <AboutSlice />
        <PersonalSlice />
        <PricesSlice />
        <ReviewsSlice />
        <ContactsSlice />
      </div>
    </>
  );
};
