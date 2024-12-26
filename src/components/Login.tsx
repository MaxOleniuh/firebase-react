import React, { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Box, Container, Grid2, Button } from "@mui/material";
import { Context } from "../index";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { auth } = useContext(Context);

  const handleLogin = async () => {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid2
        container
        alignContent="center"
        justifyContent="center"
        height="100vh"
      >
        <Grid2 className="bg-slate-400 w-96 p-10">
          <Box>
            <Button onClick={handleLogin} variant="outlined">
              Sign in with Google
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Login;
