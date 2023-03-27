import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Calendario from './Pages/Calendario/Calendario';

export default function Rutas() {

  return (
    <>  
       
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Calendario/>} />
                </Routes>
        </BrowserRouter>

    </>

  )
}
