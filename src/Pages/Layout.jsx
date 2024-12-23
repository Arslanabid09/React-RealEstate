import React from 'react';
import {Header,Footer} from '../Components/Index';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='bg-slate-200'>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout