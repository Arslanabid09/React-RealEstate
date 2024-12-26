import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import { Contact } from './Pages/Contact'
import Work from './Pages/Work'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/our-work' element={<Work/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App