interface ButtonProps {
  text: string;
  sxString?:  string ;
  children?: React.ReactNode;
}

const Button = ({ text, sxString, children }: ButtonProps) => {
  return (
    <button className={sxString}>
      {children}
      {text}
    </button>
  );
};

export default Button;
