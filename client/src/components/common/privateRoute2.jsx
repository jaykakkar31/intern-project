import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute2 = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("educatorToken"))
          return (
            <Redirect
              to={{
                pathname: "/educator/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute2;
