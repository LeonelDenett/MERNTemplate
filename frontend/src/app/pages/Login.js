import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login, reset } from '../redux/features/auth/authSlice';
import Spinner from '../components/Spinner';

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if(isError) {
            toast.error(message)
        };

        if(isSuccess || user) {
            navigate('/')
        };

        dispatch(reset());

    }, [user,isError, isSuccess, message, navigate, dispatch]);

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password };
        dispatch(login(userData));
    };

    if(isLoading) {
        return <Spinner/>
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button>Submit</button>
            </form>
            <Link to="/register">To SignUp</Link>
        </div>
    )
}