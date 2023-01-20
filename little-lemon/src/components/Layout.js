import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Main from '../containers/Main';
import  Footer from './footer';



function Layout(){
    return(
    <>

    <Header/>
    <Outlet/>
    <Main/>
    <Footer />
   
</>
    )
}

export default Layout;