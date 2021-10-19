import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const PrivetRoute = ({children, ...rest}) => {
    const {user, loading} = useAuth()
    if(loading){
        return    <Spinner className="text-center mx-auto" animation="grow" variant="danger" />
    }
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