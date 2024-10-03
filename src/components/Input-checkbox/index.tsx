import classNames from 'classnames';
import sprite from 'public/icons/sprite.svg';

type IInputCheckboxProps = {
  onChange: () => void;
  agreement?: boolean | string;
};
const InputCheckbox = ({ onChange, agreement }: IInputCheckboxProps) => {
  const check = agreement || (agreement !== '' && 'error');
  const classNameList = classNames('checkbox--fake', {
    checkbox__errorInput: check == 'error'
  });

  return (
    <>
      <input
        type='checkbox'
        id='agreement'
        name='agreement'
        className='checkbox checkbox--agreement'
        onChange={onChange}
      />
      <span className={classNameList}>
        <svg width='20' height='20' viewBox='0 0 20 20'>
          <use xlinkHref={`${sprite}#checkmark`}></use>
        </svg>
      </span>
    </>
  );
};

export default InputCheckbox;
