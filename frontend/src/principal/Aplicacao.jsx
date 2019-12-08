import React from 'react'

import './Aplicacao.css'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

export default props =>
   <div className="aplicacao">
      <Logo />
      <Nav />
      <Home />
      <Footer />
   </div>





