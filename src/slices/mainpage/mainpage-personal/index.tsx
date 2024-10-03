import SliderBlock from '../../../components/slick-slider';
import { useAppSelector } from '../../../services/type-service';
import TitleSection from '../../../components/title';
import Spinner from '../../../components/spinner';
import { LoadingStatus } from '../../../const/const';
import { Guide } from '../../../components/guide';

export const PersonalSlice = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const StaffInfo = main?.Teachers;

  const statusPersonal = useAppSelector((state) => state.main.isTeachersLoading);

  return (
    <section className='section main-personal'>
      <TitleSection title='Персонал' cls='main-personal__title container' />
      {statusPersonal === LoadingStatus.Pending ? (
        <div className='main-personal__spinnerContainer'>
          <Spinner />
        </div>
      ) : (
        <>
          {StaffInfo && <SliderBlock staffInfo={StaffInfo} />}
          {!StaffInfo && <Guide link='personal' />}
        </>
      )}
    </section>
  );
};
