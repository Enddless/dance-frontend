interface ButtonProps {
  text: string;
  classList?: string;
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
  classList,
  children,
  openModalForm,
  onMouseEnter,
  onMouseLeave,
  disabled,
  activeMenuUser,
  activeDashboardMenu
}: ButtonProps) => {
  return (
    <button
      className={`button ${classList}  ${activeMenuUser && 'button--activeMenuUser'} ${
        activeDashboardMenu && 'button--activeDashboardMenu'
      }`}
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
