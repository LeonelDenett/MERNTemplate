import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        if(!user) {
            navigate('/login')
        };
    }, [user, navigate]);
    return (
        <div className='dashboard'>
            <h1>Dashboard Page</h1>
        </div>
    )
}