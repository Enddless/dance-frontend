import css from "./Footer.module.scss";
import { AppBar, Box, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { footerTheme } from "../../styles/themes";
import Logo from "../Logo/Logo";
import TypographyMUI from "../Typography/Typography";
import { pagesFooterColumn1, pagesFooterColumn2 } from "../../mocks/mocks";

const Footer = () => {
  return (
    <ThemeProvider theme={footerTheme}>
      <Box sx={{ flexGrow: 1 }} className={css.footer}>
        <AppBar position="static" sx={{ boxShadow: "none" }}>
          <Toolbar>
            <Logo />

            <div className={css.menuItem}>
              {pagesFooterColumn1.map((page) => {
                return (
                  <TypographyMUI
                    key={page.id}
                    className={css.menuItem}
                    pagesFooter={page}
                  />
                );
              })}
            </div>

            <div className={css.menuItem}>
              {pagesFooterColumn2.map((page) => {
                return (
                  <TypographyMUI
                    key={page.id}
                    className={css.menuItem}
                    pagesFooter={page}
                  />
                );
              })}
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
