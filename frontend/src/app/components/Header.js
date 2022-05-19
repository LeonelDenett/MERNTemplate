import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../redux/features/auth/authSlice';


export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

    return (
        <nav className='header'>
            <h1>Header</h1>
            {
                user ? (<button onClick={onLogout}>Logout</button>)
                :
                <div>
                    <Link className='linkHeader' to="login">Login</Link>
                    <Link className='linkHeader' to="/">Dashboard</Link>
                    <Link className='linkHeader' to="register">Register</Link>
                </div>
            }
        </nav>
    )
}