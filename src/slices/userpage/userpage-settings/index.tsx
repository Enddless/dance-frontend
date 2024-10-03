import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../services/type-service';
import Spinner from '../../../components/spinner';
import Button from '../../../components/button';
import {
  changeUserData,
  deleteUserData,
  getCurrentUserData
} from '../../../store/thunk/auth';
import { Modal } from '../../../components/modal-form';
import ControlButton from '../../../components/controls-button';
import ProfileImg from '../../../components/user-profile-img';

const UserSettingsSlice = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);
  const dateOfBirth = userData.dateOfBirth ? new Date(userData.dateOfBirth) : '';
  //начальные данные из базы, почти все пустые
  const [userInput, setUserInput] = useState({
    emailUser: userData.emailUser,
    password: userData.password,
    userName: userData.userName,
    genders: userData.genders,
    phoneNumber: userData.phoneNumber,
    dateOfBirth: dateOfBirth && dateOfBirth.toISOString().substr(0, 10)
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleRadioChange = (e: { target: { name: string; value: string } }) => {
    setUserInput({ ...userInput, genders: e.target.value });
  };

  //отправляем в базу обновленные данные всех полей, даже если заполнили только одно поле
  const saveSettings = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!userInput) return false;
    dispatch(
      changeUserData({
        userName: userInput.userName,
        genders: userInput.genders,
        phoneNumber: userInput.phoneNumber,
        dateOfBirth: new Date(userInput.dateOfBirth)
      })
    )
      .unwrap()
      .then(() => {
        dispatch(getCurrentUserData());
      });
  };
  // удаление аккаунта
  const [isDeleteAcc, setIsDeleteAcc] = useState(false);
  const [successDel, setSuccessDel] = useState(false);
  const [errorDel, setErrorDel] = useState(false);
  const deleteAccount = () => {
    setSuccessDel(true);
    setTimeout(() => {
      setSuccessDel(false);
      dispatch(deleteUserData())
        .unwrap()
        .catch(() => setErrorDel(true));
    }, 3000);
  };

  if (!userData) {
    <Spinner />;
  }

  return (
    <>
      <div className='user-settings grid grid--4'>
        <ProfileImg />

        <form className='user-settings__form'>
          <fieldset className='user-settings__fieldset'>
            <label className='user-settings__label'>Имя</label>
            <input
              type='text'
              name='userName'
              id='name'
              placeholder='Введите имя'
              value={userInput.userName}
              onChange={handleChange}
              className='user-settings__input input'
            />
          </fieldset>

          <fieldset className='user-settings__fieldset'>
            <label className='user-settings__label'>Пол</label>
            <div className='user-settings__gender-checkboxes'>
              <input
                type='radio'
                id='female'
                name='genders'
                className='user-settings__radio radio'
                value='female'
                onChange={handleRadioChange}
                checked={userInput.genders === 'female'}
              />
              <label htmlFor='female' className='radioLabel'>
                Ж
              </label>

              <input
                type='radio'
                id='male'
                name='genders'
                className='user-settings__radio radio'
                value='male'
                onChange={handleRadioChange}
                checked={userInput.genders === 'male'}
              />
              <label htmlFor='male' className='radioLabel'>
                М
              </label>
            </div>
          </fieldset>

          <fieldset className='user-settings__fieldset'>
            <label className='user-settings__label'>Номер телефона</label>
            <input
              type='text'
              name='phoneNumber'
              id='tel'
              placeholder='+71111111111'
              value={userInput.phoneNumber}
              onChange={handleChange}
              className='user-settings__input input'
            />
          </fieldset>

          <fieldset className='user-settings__fieldset'>
            <label className='user-settings__label'>E-mail</label>
            <input
              type='email'
              name='emailUser'
              id='email'
              value={userData.emailUser}
              className='user-settings__input input'
              disabled
            />
          </fieldset>

          <fieldset className='user-settings__fieldset'>
            <label className='user-settings__label'>Дата рождения</label>
            <input
              type='date'
              name='dateOfBirth'
              id='date'
              value={userInput.dateOfBirth}
              onChange={handleChange}
            />
          </fieldset>

          <div className='user-settings__buttons'>
            <Button
              text='Сохранить'
              classList='user-settings__button button--save'
              openModalForm={(e: React.MouseEvent<HTMLButtonElement>) => saveSettings(e)}
            />

            <Button
              text='Удалить профиль'
              classList='user-settings__button button--delete'
              openModalForm={() => setIsDeleteAcc(!isDeleteAcc)}
            />
            {isDeleteAcc && (
              <Modal>
                <div className='user-settings__delete-modal'>
                  <p className='user-settings__delete-modal-text'>Вы уверены?</p>
                  <div className='user-settings__delete-modal-buttons'>
                    <Button
                      text='Да'
                      classList='user-settings__button button--save'
                      openModalForm={deleteAccount}
                    />
                    <Button
                      text='Нет'
                      classList='user-settings__button button--cancel'
                      openModalForm={() => setIsDeleteAcc(!isDeleteAcc)}
                    />
                  </div>
                </div>
              </Modal>
            )}
            {successDel && (
              <Modal>
                <div className='user-settings__delete-modal'>
                  <p className='user-settings__delete-modal-text'>Удаляем...</p>
                </div>
              </Modal>
            )}
            {errorDel && (
              <Modal>
                <div className='user-settings__delete-modal'>
                  <ControlButton
                    id='close'
                    onClick={() => {
                      setErrorDel(false);
                      setSuccessDel(false);
                    }}
                  />
                  <p className='user-settings__delete-modal-text'>
                    Ой, что-то пошло не так &#128566
                  </p>
                </div>
              </Modal>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default UserSettingsSlice;
