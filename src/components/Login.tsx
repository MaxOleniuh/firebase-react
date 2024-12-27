import React, { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Container, Grid2, Button } from "@mui/material";
import { Context } from "../index";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { auth } = useContext(Context);

  const handleLogin = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <Container>
      <Grid2
        container
        alignContent="center"
        justifyContent="center"
        height="100vh"
      >
        <Button onClick={handleLogin} variant="outlined">
          Sign in with Google
        </Button>
      </Grid2>
    </Container>
  );
};

export default Login;
