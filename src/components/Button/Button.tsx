import SimpleButton from "@mui/material/Button";

interface ButtonProps {
  text: string;
  sxString?: { [k: string]: number | string };
  children?: React.ReactNode;
}

const Button = ({ text, sxString, children }: ButtonProps) => {
  return (
    <SimpleButton
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "30px",
        ...sxString,
      }}
    >
      {children}
      {text}
    </SimpleButton>
  );
};

export default Button;
