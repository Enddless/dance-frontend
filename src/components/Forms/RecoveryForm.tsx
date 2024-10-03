import { useEffect, useState } from 'react';
import Button from '../button';
import { useAppDispatch } from '../../services/type-service';
import { authSlice } from '../../store/slices/auth';
import { validMail } from '../../services/validate';

const RecoveryForm = () => {
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState('');
  const [errorMail, setErrorMail] = useState('');
  const handleBack = () => {
    dispatch(authSlice.actions.changeFormActive('login'));
  };
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    const isValidateMail = validMail(inputData);
    if (isValidateMail) {
      setIsValidForm(true);
      setErrorMail('');
    } else {
      setIsValidForm(false);
      setErrorMail('Введите корректный email');
    }
  }, [inputData]);

  return (
    <>
      <h3 className='modalForm__title'>Восстановление пароля</h3>
      <form //onSubmit={""}
        className='form-content'>
        <fieldset>
          <label>
            Email
            <input
              type='email'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              name='email'
              placeholder='example@mail.com'
              className={errorMail && inputData !== '' ? 'errorInput' : ''}
            />
          </label>
          {errorMail && inputData !== '' && (
            <span className='error-message'>{errorMail}</span>
          )}
        </fieldset>

        <Button
          text='Отправить пароль на email'
          classList='form-content__button button--registration'
          disabled={!isValidForm}
        />
      </form>
      <label className='backButton' onClick={handleBack}>
        Назад
      </label>
    </>
  );
};

export default RecoveryForm;
