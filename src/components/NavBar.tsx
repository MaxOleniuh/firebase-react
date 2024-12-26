import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

const NavBar = () => {
  let user = false;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="ml-auto">
          {user ? (
            <Link href="/" color="textPrimary" underline="none">
              Logout
            </Link>
          ) : (
            <Link href="/login" color="textPrimary" underline="none">
              Login
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
