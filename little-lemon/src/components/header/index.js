import  React from 'react';
import Little from '../../assets/images/littlelemon.png';
import Nav from './Nav';
import './style.css';

function Header(){
   return(
        <>
   <header className='header-img'>
    <div className="photo">
       <img src= {Little} alt="" />
       </div>
       <Nav/>
   </header>
    </>
    )
}
export default Header;
