import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';


const LoginWithGoogle = () => {
    const {googleLogin} = useAuth()

    return (
        <div>
            <button onClick={googleLogin} style={{marginTop: '20px'}}>Login with Google</button><br />
            <Link to="/register">Don't have account</Link>
        </div>
    );
};

export default LoginWithGoogle;