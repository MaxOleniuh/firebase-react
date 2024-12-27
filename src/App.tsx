import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "./index";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      {loading && <Loader />}
    </BrowserRouter>
  );
};

export default App;
