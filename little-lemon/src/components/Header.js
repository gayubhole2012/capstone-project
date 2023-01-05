import  React from 'react';
import Little from './littlelemon.png';
import Nav from './Nav';


function Header(){
   return(
        <>
   <header>
       <img src= {Little} alt="" />
       <Nav/>
   </header>
    </>
    )
}
export default Header;
