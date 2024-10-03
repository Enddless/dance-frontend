import Button from '../../../components/button';
import ControlButton from '../../../components/controls-button';
import policy from 'public/terms/Политика.pdf';
import TitleSection from '../../../components/title';

const PolicySettingsSlice = () => {
  return (
    <div className='admin__content-policy admin-policy'>
      <TitleSection title='Юридическая информация' cls='admin-policy__title' />
      <ul className='admin-policy__list grid grid--2'>
        <li className='admin-policy__item'>
          <div className='admin-policy__item-controls'>
            <a href={policy} target='_blank' rel='noopener noreferrer'>
              <ControlButton id='view' />
            </a>
            <ControlButton id='delete' />
          </div>
          <div className='admin-policy__item-file'>
            Условия использования и Политика конфиденциальности
          </div>
        </li>
        <li className='admin-policy__item'>
          <div className='admin-policy__item-controls'>
            <a href={policy} target='_blank' rel='noopener noreferrer'>
              <ControlButton id='view' />
            </a>
            <ControlButton id='delete' />
          </div>
          <div className='admin-policy__item-file'>
            Условия использования и Политика конфиденциальности Условия использования и
            Политика конфиденциальности
          </div>
        </li>
      </ul>
      <div className='admin-policy__button-container'>
        <Button text='Добавить' classList='admin-policy__button button button--save' />
      </div>
    </div>
  );
};

export default PolicySettingsSlice;
