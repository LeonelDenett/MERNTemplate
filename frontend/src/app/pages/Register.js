import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register, reset } from '../redux/features/auth/authSlice';
import Spinner from '../components/Spinner';

export default function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

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

        if(password !== password2) {
            toast.error('Passwords don\'t match');
        } else {
            const userData = {
                name, email, password
            }

            dispatch(register(userData));
        };
    };

    if(isLoading) {
        return <Spinner/>
    };

    return (
        <div className='register'>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" id="name"  placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="email" id="email"  placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" id="password"  placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" name="password2" id="password2"  placeholder="Password2" onChange={(e) => setPassword2(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <Link to="/login">To SignIn</Link>
        </div>
    )
}