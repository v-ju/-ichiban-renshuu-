import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/signinBox';

function App() {
 

  return <>
      <main className=' w-full h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signin/>} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  
}

export default App
