import React from 'react';
import {Header,Footer} from '../Components/Index';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className=''>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout