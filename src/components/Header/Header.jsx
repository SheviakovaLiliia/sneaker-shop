import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar sx={{ background: "#232425", mb: 3 }} position="static">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Sneaker Shop</Typography>
          <Toolbar>
            <Stack direction="row" gap={8}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cart">Cart</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </Stack>
          </Toolbar>
        </Stack>
      </Container>
    </AppBar>
  );
};

// <header className={s.header}>
//   <h1>Sneaker-shop</h1>
//   <nav className={s.nav}>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/cart">Cart</NavLink>
//     <NavLink to="/contacts">Contacts</NavLink>
//   </nav>
// </header>
