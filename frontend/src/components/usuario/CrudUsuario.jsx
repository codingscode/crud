import React, {Component} from 'react';
import Principal from '../template/Principal'
import axios from 'axios'

const headerProps = {
   icon: 'users',
   title: 'Usuários',
   subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'
const inicialState = {
   usuario: {nome: '', email: ''},
   lista: []
 }

export default class CrudUsuario extends Component {
   state = {...inicialState}

   clear() {
     this.setState({user: inicialState.usuario})
   }

   save() {
     const usuario = this.state.usuario
     const metodo = usuario.id ? 'put' : 'post'
     const url = usuario.id ? `${baseUrl}/${usuario.id}` : baseUrl
     axios[metodo](url, usuario)
        .then(resp => {
          const lista = this.getUpdatedList(resp.data)
          this.setState({usuario: inicialState.usuario, lista})
        })
   }

   getUpdatedList(usuario) {
      const lista = this.state.lista.filter(u => u.id !== usuario.id)
      lista.unshift(usuario)
      return lista
   }

   render() {
     return (
     <Principal {...headerProps}>
        Cadastro de Usuário
     </Principal>
     )
   }
   
}
