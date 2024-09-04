import { useState } from 'react';
import EyeIcon from '../../../components/eye-icon';
import Button from '../../../components/button';

const UserPasswordSlice = () => {
  //состояние переключения "глазика"
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showDoublePassword, setShowDoublePassword] = useState(false);
  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const togglePasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleDoublePasswordVisibility = () => {
    setShowDoublePassword(!showDoublePassword);
  };
  const changePassword = () => {
    //добавить диспатч на изменение пароля
  };

  return (
    <div className='user__password grid grid--12'>
      <div className='user__password-form'>
        <fieldset>
          <label htmlFor='currentPassword'>Текущий пароль</label>
          <input
            type={showCurrentPassword ? 'text' : 'password'}
            name='currentPassword'
            id='currentPassword'
            className='checkbox'
            placeholder='*****'
          />
          <div className='eyeIcon'>
            <EyeIcon
              showPassword={showCurrentPassword}
              togglePasswordVisibility={toggleCurrentPasswordVisibility}
            />
          </div>
        </fieldset>

        <fieldset>
          <label htmlFor='newPassword'>Новый пароль</label>
          <input
            type={showNewPassword ? 'text' : 'password'}
            name='newPassword'
            id='newPassword'
            className='checkbox'
            placeholder='*****'
          />
          <div className='eyeIcon'>
            <EyeIcon
              showPassword={showNewPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          </div>
        </fieldset>

        <fieldset>
          <label htmlFor='doubleNewPassword'>Подтвердите пароль</label>
          <input
            type={showDoublePassword ? 'text' : 'password'}
            name='doubleNewPassword'
            id='doubleNewPassword'
            className='checkbox'
            placeholder='*****'
          />
          <div className='eyeIcon'>
            <EyeIcon
              showPassword={showDoublePassword}
              togglePasswordVisibility={toggleDoublePasswordVisibility}
            />
          </div>
        </fieldset>

        <Button text='Сменить пароль' cls='btn-save' openModalForm={changePassword} />
      </div>
    </div>
  );
};

export default UserPasswordSlice;
