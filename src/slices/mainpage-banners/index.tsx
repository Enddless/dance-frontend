import SliderBlock from '../../components/Slider/SliderBlock';
import { useAppSelector } from '../../services/type-service';
import Spinner from '../../components/spinner';
import { LoadingStatus } from '../../const/const';
import { Guide } from '../../components/guide';

export const BannersSlice = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const bannerUrl = main?.Banners;
  const statusBanners = useAppSelector((state) => state.main.isBannerLoading);
  return (
    <section className='section main-banners'>
      {statusBanners === LoadingStatus.Pending ? (
        <div className='main-banners__spinnerContainer'>
          <Spinner />
        </div>
      ) : (
        <>{bannerUrl ? <SliderBlock cards={bannerUrl} /> : <Guide link='news' />}</>
      )}
    </section>
  );
};
