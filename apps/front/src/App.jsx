import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Dashboard} from './pages/Dashboard';
import {Signin} from './pages/signinBox';
import HiraganaPage from './pages/HiraganaPage';

function App() {
 

  return <>
      <main className='w-full h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signin/>} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/hiragana' element={<HiraganaPage/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  
}

export default App
