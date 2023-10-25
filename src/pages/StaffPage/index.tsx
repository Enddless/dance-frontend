import Lead from '../../components/Lead/Lead';
import TitleSection from '../../components/Title/Title';
import { StaffInfo } from './data';
import css from './staffPage.module.scss';

const cards = [
  "Зал 1",
  "Зал 2",
  "Зал 3",
  "Зал 4",
  "Зал 5",
  "Зал 6",
  "Зал 7",
  "Зал 8",
];

const StaffPage = () => {
  return (
    <>
    <Lead cards={cards} />
      <TitleSection title="Персонал" />
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
