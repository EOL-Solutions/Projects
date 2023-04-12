import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Products} from '../pages/Products/Products';
import { About } from '../pages/About/About';
import { Help } from '../pages/Help/Help';
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
                    <Route path='products' element={<Products/>} />
                    <Route path='about' element ={<About />} />
                    <Route path='help' element={<Help />}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App