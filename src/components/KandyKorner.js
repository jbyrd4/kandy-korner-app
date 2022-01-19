import React from "react";
import { ApplicationViews } from "./ApplicationView.js";
import { NavBar } from "./nav/NavBar.js";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login.js";
import { Register } from "./auth/Register.js";

export const KandyKorner = () => (
    <>
    <Route
      render={() => {
        if (localStorage.getItem("kandy_customer")) {
          return (
            <>
            <h1>Kandy Korner</h1>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
    

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>)