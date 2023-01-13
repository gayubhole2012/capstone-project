import React from 'react';
import Little from '../../assets/images/littlelemon.jpeg';
import Nav from './Nav';
import './style.css';

function Header() {
    return (
        <>
            <header className='full-width'>
                <div className="inner-width">
                    <img src={Little} alt="" />
                    <Nav />
                </div>
            </header>
        </>
    )
}
export default Header;
