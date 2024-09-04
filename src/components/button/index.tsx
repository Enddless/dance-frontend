import classNames from 'classnames';

interface ButtonProps {
  text: string;
  cls?: string;
  children?: React.ReactNode;
  openModalForm?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  activeMenuUser?: boolean;
  activeDashboardMenu?: boolean;
}

const Button = ({
  text,
  cls,
  children,
  openModalForm,
  onMouseEnter,
  onMouseLeave,
  disabled,
  activeMenuUser,
  activeDashboardMenu
}: ButtonProps) => {
  const enterButton = cls === 'btn-enter';
  const more = cls === 'btn-more';
  const regButton = cls === 'btn-reg';
  const disabledButton = cls === 'btn-dis' || disabled;
  // user
  const menuAreaUser = cls === 'menuAreaUser';
  const activeMenu = activeMenuUser;
  const saveButton = cls === 'btn-save';
  const deleteButton = cls === 'btn-del';
  const recordButton = cls === 'btn-rec';
  //admin
  const add = cls === 'add';
  const dashboardMenuAdmin = cls === 'dashboardMenuAdmin';
  const activeDashboardMenuAdmin = activeDashboardMenu;
  const cancelButton = cls === 'btn-cancel';

  const classNamesList = classNames('button', {
    button__enter: enterButton,
    button__more: more,
    button__registration: regButton,
    button__disabled: disabledButton,
    button__menuUser: menuAreaUser,
    button__activeMenuUser: activeMenu,
    button__save: saveButton,
    button__delete: deleteButton,
    button__add: add,
    button__record: recordButton,
    button__dashboardAdmin: dashboardMenuAdmin,
    button__activeDashboardMenu: activeDashboardMenuAdmin,
    button__cancel: cancelButton
  });

  return (
    <button
      className={classNamesList}
      onClick={openModalForm}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}>
      {children}
      {text}
    </button>
  );
};

export default Button;
