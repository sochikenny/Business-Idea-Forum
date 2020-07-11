import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Authentication from "./Authentication"

const ProtectedRoute = ({ component: Component, loggedIn, path, ...rest }) => {
    return (
      <Route
        path={path}
        {...rest}
        render={props => {
          return Authentication.loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                  error: "You need to login first!",
                },
              }}
            />
          );
        }}
      />
    );
  };

  export default ProtectedRoute;