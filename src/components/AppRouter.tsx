import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import Login from "./Login";
import Chat from "./Chat";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? (
    <>
      <Routes>
        <Route path="/chat" Component={Chat} />
        <Route path="*" Component={Chat} />
      </Routes>
      <Navigate to="/chat" />
    </>
  ) : (
    <>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="*" Component={Login} />
      </Routes>
      <Navigate to="/login" />
    </>
  );
};

export default AppRouter;
