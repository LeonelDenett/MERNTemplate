import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className='page'>{ children }</div>
            <Footer/>
        </div>
    )
}