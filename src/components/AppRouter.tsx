import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";

const AppRouter = () => {
  let user = true;
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
