import Button from '../../../components/button';
import ControlButton from '../../../components/controls-button';
import policy from 'public/terms/Политика.pdf';

const PolicySettingsSlice = () => {
  return (
    <div className='admin-page__policy'>
      <h2>Юридическая информация</h2>
      <ul className='admin-page__policy-list grid grid--12'>
        <li className='admin-page__policy-item'>
          <div className='admin-page__policy-item-file'>
            Условия использования и Политика конфиденциальности
          </div>
          <div className='admin-page__policy-item-controls'>
            <a href={policy} target='_blank'>
              <ControlButton id='view' />
            </a>
            <ControlButton id='delete' />
          </div>
        </li>
        <li className='admin-page__policy-item'>
          <div className='admin-page__policy-item-file'>
            Условия использования и Политика конфиденциальности Условия использования и
            Политика конфиденциальности
          </div>
          <div className='admin-page__policy-item-controls'>
            <a href={policy} target='_blank'>
              <ControlButton id='view' />
            </a>
            <ControlButton id='delete' />
          </div>
        </li>
      </ul>
      <div className='admin-page__policy-buttonContainer'>
        <Button text='Добавить' cls='btn-save' />
      </div>
    </div>
  );
};

export default PolicySettingsSlice;
