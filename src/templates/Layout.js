import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavbarResponsive from '../components/NavbarResponsive/NavbarResponsive';
import { useState } from 'react';

export default function Layout (){
    const [hamActive, setHamActive] = useState(false);
    return(
        <div>
            <Navbar hamActive={hamActive} setHamActive={setHamActive} />
            <NavbarResponsive hamActive={hamActive}/>
            <Outlet />
            <Footer />
        </div>
    )
}