import css from "./style.module.scss";
import { IHalls } from "../../interfaces/interfaces";

interface ICardProps {
  hall: IHalls;
}

const CardHalls = ({ hall }: ICardProps) => {
  return (
    <div key={hall.id} className={css.container}>
      <div className={css.photoContainer}>
        <img src={hall.url} alt="Galerry" className={css.photo} />
        <h2 className={css.caption}>{hall.name}</h2>
      </div>
      <p>{hall.description}</p>
    </div>
  );
};

export default CardHalls;
