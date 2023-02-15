import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { About } from '../pages/About/About';
import Home from '../pages/Home';
import Layout from '../templates/Layout';
function App (){
  return (
  <>
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element ={<About />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App