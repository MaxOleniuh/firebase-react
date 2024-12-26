import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { getAuth } from "firebase/auth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

initializeApp({
  apiKey: "AIzaSyC98_iQeli0DFkTcJlcr7ETdh-b30OOdww",
  authDomain: "live-chat-3b9ff.firebaseapp.com",
  projectId: "live-chat-3b9ff",
  storageBucket: "live-chat-3b9ff.firebasestorage.app",
  messagingSenderId: "165624448478",
  appId: "1:165624448478:web:064b36efff919c39e1494f",
});

const auth = getAuth();
const firestore = getFirestore();

export const Context = createContext({
  auth: auth,
  firestore: firestore,
});

root.render(
  <Context.Provider
    value={{
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>
);
