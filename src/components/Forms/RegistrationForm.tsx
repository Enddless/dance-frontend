import { useState, useEffect } from 'react';
import policy from 'public/terms/Политика.pdf';
import { useAppDispatch } from '../../services/type-service';
import { registration } from '../../store/thunk/auth';
import EyeIcon from '../eye-icon';
import InputCheckbox from '../Input-checkbox';
import Button from '../button';
import { authSlice } from '../../store/slices/auth';
import { validMail, validPassword } from '../../services/validate';
import ConfirmationForm from './ConfirmationForm';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDoublePassword, setShowDoublePassword] = useState(false);

  const [errorMail, setErrorMail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    dublPassword: ''
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //сообщение ошибки, если не заполнена почта
  useEffect(() => {
    const isValidateMail = validMail(formData.email);
    if (!isValidateMail && formData.email !== '') {
      setErrorMail('Введите корректный email');
    } else {
      setErrorMail('');
    }
  }, [formData]);
  //валидность на совпадение паролей
  useEffect(() => {
    const isValidatePassword = validPassword(formData.password);
    const isValidateDblPassword = validPassword(formData.dublPassword);
    if (!isValidatePassword && !isValidateDblPassword && formData.password !== '') {
      setErrorPassword(
        'Не менее 8 символов, с использованием цифр, букв,символов, как минимум 1 заглавная буква)'
      );
    } else if (formData.password !== formData.dublPassword) {
      setErrorPassword('Пароли должны совпадать');
    } else {
      setErrorPassword('');
    }
  }, [formData.password, formData.dublPassword]);
  //валидность формы
  useEffect(() => {
    if (
      agreement &&
      errorPassword === '' &&
      errorMail === '' &&
      formData.password !== '' &&
      formData.email !== ''
    ) {
      setIsValidForm(true);
    } else setIsValidForm(false);
  }, [agreement, errorPassword, errorMail, formData]);

  //регистрация пользователя
  const dispatch = useAppDispatch();
  const [successForm, setSuccessForm] = useState(false);
  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    const emailUser = formData.email;
    const password = formData.password;
    const data = {
      emailUser,
      password
    };
    dispatch(registration(data))
      .unwrap()
      .then(() => {
        setSuccessForm(!successForm);
      })
      .catch(() => {
        setErrorMail('Пользователь с такой почтой уже существует');
      });
  };
  //роут назад
  const handleBack = () => {
    dispatch(authSlice.actions.changeFormActive('login'));
  };

  return (
    <>
      {!successForm ? (
        <>
          <h3 className='modalForm__title'>Регистрация</h3>
          <form onSubmit={handleSubmit} className='form-content'>
            <fieldset>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                value={formData.email}
                onChange={handleChange}
                name='email'
                placeholder='example@mail.com'
                className={errorMail && errorMail !== '' ? 'errorInput' : ''}
              />
              {errorMail && errorMail !== '' && (
                <span className='error-message'>{errorMail}</span>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor='password'>Пароль</label>
              <input
                value={formData.password}
                onChange={handleChange}
                name='password'
                type={showPassword ? 'text' : 'password'}
                className={errorPassword && errorPassword !== '' ? 'errorInput' : ''}
                placeholder='exampLe_56q'
              />
              <div className='eyeIcon'>
                <EyeIcon
                  showPassword={showPassword}
                  togglePasswordVisibility={() => setShowPassword(!showPassword)}
                />
              </div>
            </fieldset>

            <fieldset>
              <label htmlFor='dublPassword'>Повторите пароль</label>
              <input
                value={formData.dublPassword}
                onChange={handleChange}
                name='dublPassword'
                type={showDoublePassword ? 'text' : 'password'}
                className={errorPassword && errorPassword !== '' ? 'errorInput' : ''}
                placeholder='exampLe_56q'
              />
              <div className='eyeIcon'>
                <EyeIcon
                  showPassword={showDoublePassword}
                  togglePasswordVisibility={() =>
                    setShowDoublePassword(!showDoublePassword)
                  }
                />
              </div>

              {errorPassword && errorPassword !== '' && (
                <p className='error-message'>{errorPassword}</p>
              )}
            </fieldset>

            <Button
              text='Зарегистрироваться'
              classList='form-content__button button--registration'
              disabled={!isValidForm}
            />
            <div className='agreement'>
              <label htmlFor='agreement' className='agreeCheckbox'>
                <InputCheckbox
                  onChange={() => setAgreement(!agreement)}
                  agreement={
                    formData.password !== '' || formData.dublPassword !== ''
                      ? agreement
                      : ''
                  }
                />
                <p>
                  регистрируясь, я соглашаюсь с{' '}
                  <span className='conditions'>
                    <a href={policy} target='_blank'>
                      условиями использования и Политикой конфиденциальности
                    </a>
                  </span>
                </p>
              </label>
            </div>
          </form>

          <label className='backButton' onClick={handleBack}>
            Назад
          </label>
        </>
      ) : (
        <ConfirmationForm email={formData.email} password={formData.password} />
      )}
    </>
  );
};

export default RegistrationForm;
