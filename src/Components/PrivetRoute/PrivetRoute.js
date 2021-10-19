import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const PrivetRoute = ({children, ...rest}) => {
    const {user} = useAuth()
    return (
        <Route
        {...rest}
        render={({location})=>user.email ? children : 
        <Redirect
        to={{
            pathname: "/signin",
            state: { from: location }
          }}
        ></Redirect> }
        >
            
        </Route>
    );
};

export default PrivetRoute;