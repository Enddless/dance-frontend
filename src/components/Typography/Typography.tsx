import { Typography } from "@mui/material";
import { IPagesFooter, IPagesHeader } from "../../interfaces/interfaces";

interface ITypographyProps {
  className?: string;
  pagesHeader?: IPagesHeader
  pagesFooter?: IPagesFooter
  children?: React.ReactNode;
}

const TypographyMUI = ({ className, pagesHeader, pagesFooter }: ITypographyProps) => {
  return (
    <Typography
      className={className}
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, cursor: "pointer" }}
    >
      {pagesHeader?.title}
      {pagesFooter?.data.title}
    </Typography>
  );
};

export default TypographyMUI;
