import SliderBlock from '../../../components/slick-slider';
import { useAppSelector } from '../../../services/type-service';
import TitleSection from '../../../components/title';
import Spinner from '../../../components/spinner';
import { LoadingStatus } from '../../../const/const';
import { Guide } from '../../../components/guide';
import { CardPersonal } from '../../../components/card-personal';

export const PersonalSlice = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const StaffInfo = main?.Teachers;

  const length = StaffInfo?.length;

  const statusPersonal = useAppSelector((state) => state.main.isTeachersLoading);

  return (
    <section className='section main-personal'>
      <TitleSection title='Персонал' cls='main-personal__title' />
      {statusPersonal === LoadingStatus.Pending ? (
        <div className='main-personal__spinnerContainer'>
          <Spinner />
        </div>
      ) : (
        <>
          {StaffInfo && length && length > 4 ? (
            <SliderBlock staffInfo={StaffInfo} />
          ) : (
            <ul className='main-personal__personal-list personal-list grid grid--2'>
              {StaffInfo &&
                StaffInfo.map((teacher) => (
                  <CardPersonal
                    teacher={teacher}
                    prefixClass='main-personal'
                    key={teacher.idTeachers}
                  />
                ))}
            </ul>
          )}
          {!StaffInfo && <Guide link='personal' />}
        </>
      )}
    </section>
  );
};
