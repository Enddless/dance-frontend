import SliderBlock from '../../components/Slider/SliderBlock';
import { useAppSelector } from '../../services/type-service';
import TitleSection from '../../components/title';
import Spinner from '../../components/spinner';
import { LoadingStatus } from '../../const/const';
import { Guide } from '../../components/guide';
import { PhotoContainer } from '../../components/photo-container';

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
            <ul className='main-personal__personal-list'>
              {StaffInfo &&
                StaffInfo.map((teacher) => (
                  <li key={teacher.idTeachers} className='main-personal__personal-item'>
                    <PhotoContainer
                      alt='staffPhoto'
                      className='main-personal__personal-photo'
                      url={`${teacher.photoTeachers}`}
                    />

                    <div className='main-personal__personal-description'>
                      <h5>{teacher.teachersName}</h5>
                      <p>{teacher.description}</p>
                    </div>
                  </li>
                ))}
            </ul>
          )}
          {!StaffInfo && <Guide link='personal' />}
        </>
      )}
    </section>
  );
};
