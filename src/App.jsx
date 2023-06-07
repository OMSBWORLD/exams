import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogIn from './Pages/LogIn'
import Register from './Pages/Register'
import Special from './Pages/Special'


function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/login' element={<LogIn/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/*' element={<Special/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
