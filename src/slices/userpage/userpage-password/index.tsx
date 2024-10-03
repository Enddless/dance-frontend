import { useState } from 'react';
import EyeIcon from '../../../components/eye-icon';
import Button from '../../../components/button';

const UserPasswordSlice = () => {
  // состояние переключения "глазика"
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isDoublePasswordVisible, setIsDoublePasswordVisible] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setIsCurrentPasswordVisible(!isCurrentPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };

  const toggleDoublePasswordVisibility = () => {
    setIsDoublePasswordVisible(!isDoublePasswordVisible);
  };

  const changePassword = () => {
    // добавить диспатч на изменение пароля
  };

  return (
    <div className='user-password'>
      <div className='user-password__form'>
        <fieldset className='user-password__fieldset'>
          <label htmlFor='currentPassword' className='user-password__label'>
            Текущий пароль
          </label>
          <input
            type={isCurrentPasswordVisible ? 'text' : 'password'}
            name='currentPassword'
            id='currentPassword'
            className='user-password__input'
            placeholder='*****'
          />
          <div className='user-password__eye-icon'>
            <EyeIcon
              showPassword={isCurrentPasswordVisible}
              togglePasswordVisibility={toggleCurrentPasswordVisibility}
            />
          </div>
        </fieldset>

        <fieldset className='user-password__fieldset'>
          <label htmlFor='newPassword' className='user-password__label'>
            Новый пароль
          </label>
          <input
            type={isNewPasswordVisible ? 'text' : 'password'}
            name='newPassword'
            id='newPassword'
            className='user-password__input'
            placeholder='*****'
          />
          <div className='user-password__eye-icon'>
            <EyeIcon
              showPassword={isNewPasswordVisible}
              togglePasswordVisibility={toggleNewPasswordVisibility}
            />
          </div>
        </fieldset>

        <fieldset className='user-password__fieldset'>
          <label htmlFor='doubleNewPassword' className='user-password__label'>
            Подтвердите пароль
          </label>
          <input
            type={isDoublePasswordVisible ? 'text' : 'password'}
            name='doubleNewPassword'
            id='doubleNewPassword'
            className='user-password__input'
            placeholder='*****'
          />
          <div className='user-password__eye-icon'>
            <EyeIcon
              showPassword={isDoublePasswordVisible}
              togglePasswordVisibility={toggleDoublePasswordVisibility}
            />
          </div>
        </fieldset>

        <Button
          text='Сменить пароль'
          classList='user-password__button button button--save'
          openModalForm={changePassword}
        />
      </div>
    </div>
  );
};

export default UserPasswordSlice;
