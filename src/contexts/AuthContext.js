import React from "react";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  // const [state, dispatch] = useReducer();
  return (
    <>
      <AuthContext.Provider value={{ ...state, dispatch }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
