import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const NavBar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="ml-auto">
          {user ? (
            <Button
              onClick={() => auth.signOut()}
              color="inherit"
              variant="outlined"
            >
              Logout
            </Button>
          ) : (
            <Link href="/login" color="primary" underline="none">
              Login
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
