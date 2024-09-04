import { useNavigate } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import RegistrationForm from '../forms/RegistrationForm';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import RecoveryForm from '../forms/RecoveryForm';
import { authSlice } from '../../store/slices/auth';
import ControlButton from '../controls-button';

type TModalMiniProps = {
  children?: React.ReactNode;
};
export function Modal({ children }: TModalMiniProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const idData = useAppSelector((state) => state.auth.formAuthActiveId);

  return (
    <div className='modalWrapper'>
      <div className='noModalWrapper'>
        <div className='modal'>
          <div className='closeContainer'>
            <ControlButton
              id='close'
              onClick={() => {
                navigate('/');
                dispatch(authSlice.actions.changeFormActive('login'));
              }}
            />
          </div>
          <div className='modalForm'>
            {children ? (
              children
            ) : (
              <>
                {idData === 'login' && <LoginForm />}
                {idData === 'registration' && <RegistrationForm />}
                {idData === 'recovery' && <RecoveryForm />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
