import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Prices from './components/Prices/Prices';
import StaffPage from './components/BlockStaff';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainReviews from './components/Reviews/Reviews';
import { useAppDispatch } from '../../services/type-service';
import { mainPageData } from '../../store/thunk/mainPage';
import { useEffect } from 'react';
import Banners from './components/Banners';
// import { useAboutStudio } from '../../hooks/useAboutStudio';

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainPageData());
  }, [dispatch]);

  // const { isLoading, error, data: posts } = useAboutStudio();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  // if (!posts) {
  //   return <div>No posts available.</div>;
  // }

  return (
    <>
      <Header />
      <Banners />
      <About />
      <StaffPage />
      <Prices />
      <MainReviews />
      <Contacts />
      <Footer />
    </>
  );
};

export default MainPage;
