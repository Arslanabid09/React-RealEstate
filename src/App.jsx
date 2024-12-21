import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import { Contact } from './Pages/Contact'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App