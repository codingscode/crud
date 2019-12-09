import React from 'react'

import './Aplicacao.css'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
   <BrowserRouter>
     <div className="aplicacao">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
     </div>

   </BrowserRouter>
   





