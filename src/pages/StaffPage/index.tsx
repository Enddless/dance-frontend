import TitleSection from '../../components/Title/Title';
import { StaffInfo } from './data';
import css from './staffPage.module.scss';

const StaffPage = () => {
  return (
    <>
      <TitleSection title="Персонал" className={css.title}/>

      <div className={css.staffWrapper}>
        {StaffInfo.map(({ name, img, description, id }) => 
          <div key={id} className={css.staffInfo}>
            <div>
              <img src={img} alt="staffPhoto" />
            </div>

            <div className={css.staffDescr}>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default StaffPage;
