import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth()
    return (
        <div>
            <div className="header">
                <Link to="/">Home </Link> 
                <Link to="/shipping">Shipping </Link> 
                <Link to="/register">Register </Link> 
                <Link to="/login">Login </Link>
                <span>{user.displayName}</span>
                {user?.email && <button onClick={logout}>Log out</button>}
            </div>
        </div>
    );
};

export default Header;