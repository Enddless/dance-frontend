import { API_URL } from "../../services/api";
import { HallData } from "../../types/auth-type";
import css from "./style.module.scss";


interface ICardProps {
  hall: HallData;
}

const CardHalls = ({ hall }: ICardProps) => {
  return (
    <div key={hall.IdHall} className={css.container}>
      <div className={css.photoContainer}>
        <img src={`${API_URL}${hall.PhotoHall}`} alt="Galerry" className={css.photo} />
        <h2 className={css.caption}>{hall.Title}</h2>
      </div>
      <p>{hall.Description}</p>
    </div>
  );
};

export default CardHalls;
