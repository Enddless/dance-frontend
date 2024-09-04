import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/route';

type TGuideProps = {
  link: string;
};

export const Guide = ({ link }: TGuideProps) => {
  return (
    <p className='guide'>
      Еще ничего нет. Добавить нужную информацию можно в личном кабинете
      <Link to={`${AppRoute.AdministratorArea}/${link}`}> администратора</Link>
    </p>
  );
};
