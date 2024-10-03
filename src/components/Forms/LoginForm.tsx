import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../services/type-service';
import { getCurrentUserData, getCurrentUserRole, login } from '../../store/thunk/auth';
import EyeIcon from '../eye-icon';
import Button from '../button';
import { authSlice } from '../../store/slices/auth';
import { useNavigate } from 'react-router';
import { validMail } from '../../services/validate';

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();
  const [isValidForm, setIsValidForm] = useState(false);
  const [errorMail, setErrorMail] = useState('');

  //состояние инпутов главной формы
  const [item, setItem] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    setErrorMail('');
  };

  //сообщение ошибки, если не заполнена почта
  useEffect(() => {
    setErrorMessage('');
    const isValidateMail = validMail(item.email);
    if (!isValidateMail && item.email !== '') {
      setErrorMail('Введите корректный email');
    } else {
      setErrorMail('');
    }
    if (isValidateMail && item.password !== '') {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [item]);

  //вход пользователя
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const emailUser = item.email;
    const password = item.password;
    const data = {
      emailUser,
      password
    };
    dispatch(login(data))
      .unwrap()
      .then(() => {
        dispatch(getCurrentUserRole());
      })
      .then(() => {
        dispatch(getCurrentUserData());
      })
      .then(() => navigate('/'))
      .catch(() => {
        setErrorMessage('Неправильный логин или пароль');
      });
  };

  //состояние переключения "глазика"
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h3 className='modalForm__title'>Вход</h3>

      <form onSubmit={handleSubmit} className='form-content'>
        <fieldset>
          <label htmlFor='tel'>
            Адрес электронной почты
            <input
              type='email'
              value={item.email}
              onChange={handleChange}
              name='email'
              className={
                (errorMail && errorMail !== '') || (errorMessage && errorMessage !== '')
                  ? 'errorInput'
                  : ''
              }
              placeholder='example@gmail.com'
            />
          </label>
          {errorMail && errorMail !== '' && (
            <span className='error-message'>{errorMail}</span>
          )}
          {errorMessage && errorMessage !== '' && (
            <span className='error-message'>{errorMessage}</span>
          )}
        </fieldset>

        <fieldset>
          <label htmlFor='password'>
            Пароль
            <input
              value={item.password}
              onChange={handleChange}
              name='password'
              type={showPassword ? 'text' : 'password'}
              className={errorMessage && errorMessage !== '' ? 'errorInput' : ''}
              placeholder='exampLe_56q'
            />
            <div className='eyeIcon'>
              <EyeIcon
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
              />
            </div>
          </label>
        </fieldset>

        <div className='linkGroup'>
          <label
            onClick={() => {
              dispatch(authSlice.actions.changeFormActive('registration'));
            }}>
            Зарегистрироваться
          </label>
          <label
            onClick={() => {
              dispatch(authSlice.actions.changeFormActive('recovery'));
            }}>
            Забыли пароль?
          </label>
        </div>

        <Button
          text='Войти'
          classList='form-content__button button--registration'
          disabled={!isValidForm}
        />
      </form>
    </>
  );
};

export default LoginForm;
