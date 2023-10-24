import css from "./Header.module.scss";
// import React, { useState } from "react";
import {
  AppBar,
  Box,
  //   IconButton,
  Toolbar,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import { headerTheme } from "../../styles/themes";
import LoginIcon from "@mui/icons-material/Login";
// import LogoutIcon from '@mui/icons-material/Logout';
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Lead from "../Lead/Lead";
import TypographyMUI from "../Typography/Typography";
import { pagesHeader } from "../../mocks/mocks";

const Header = () => {
  return (
    <>
      <ThemeProvider theme={headerTheme}>
        <Box sx={{ flexGrow: 1 }} className={css.header}>
          <AppBar position="static" sx={{ boxShadow: "none" }}>
            <Toolbar>
              {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
              <Logo />
              {pagesHeader.map((page) => {return <TypographyMUI key={page.id} className={css.menuItem} pagesHeader={page} />})}
              <Box>
                <Button text="Вход">
                  <LoginIcon />
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>

      <Lead />
    </>
  );
};

export default Header;
