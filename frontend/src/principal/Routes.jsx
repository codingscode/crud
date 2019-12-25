import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import CrudUsuario from '../components/usuario/CrudUsuario'


export default props =>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/usuarios' component={CrudUsuario}/>
    <Redirect from='*' to='/'/>
  </Switch>

