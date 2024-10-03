import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../services/type-service';
import { confirmation } from '../../store/thunk/auth';
import Button from '../button';

type ICodeProps = {
  email: string;
  password: string;
};
const ConfirmationForm = ({ email, password }: ICodeProps) => {
  const dispatch = useAppDispatch();
  const [codeData, setCodeData] = useState('');
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const confirmSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const code = Number(codeData);
    const data = {
      emailUser: email,
      password,
      code
    };
    dispatch(confirmation(data))
      .unwrap()
      .then(() => {
        setSuccess(!success);
      })
      .catch(() => {
        setErrorMessage('Неверный код. Попробуйте еще');
      });
  };
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    if (codeData !== '') {
      setIsValidForm(true);
    } else setIsValidForm(false);
  }, [codeData]);

  return !success ? (
    <>
      <h3 className='modalForm__title'>Подтверждение регистрации</h3>
      <form onSubmit={confirmSubmit} className='form-content'>
        <fieldset>
          <label>
            Код
            <input
              type='number'
              value={codeData}
              onChange={(e) => setCodeData((e.target as HTMLInputElement).value)}
              name='code'
              placeholder='****'
            />
          </label>
          {errorMessage && errorMessage !== '' && (
            <span className='error-message'>{errorMessage}</span>
          )}
        </fieldset>

        <Button
          text='Подтвердить'
          classList='form-content__button button--registration'
          disabled={!isValidForm}
        />
      </form>
    </>
  ) : (
    <>
      <p>Вы успешно зарегистрированы</p>
    </>
  );
};

export default ConfirmationForm;
