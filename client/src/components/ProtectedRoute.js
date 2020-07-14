import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Authentication from "./Authentication"
import { useStoreContext } from "../utils/GlobalState";



const ProtectedRoute = ({ component: Component, loggedIn, path, ...rest }) => {
  const [state, dispatch] = useStoreContext();
    return (
      <Route
        path={path}
        {...rest}
        render={props => {
          return state.isAuthenticated ? (
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