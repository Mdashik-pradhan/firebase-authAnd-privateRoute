import React from 'react';
import { Route,  Redirect } from 'react-router';
import useAuth from '../../context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth();
    return (
        <Route
            {...rest}
            render={({location}) => user.email? children : 
            <Redirect
            to={{
                pathname: '/login',
                state: {from: location}
            }}
            >
                ূ
            </Redirect> }
        >
            
        </Route>
    );
};

export default PrivateRoute;