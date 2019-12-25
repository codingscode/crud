import React, {Component} from 'react';
import Principal from '../template/Principal'
import axios from 'axios'

const headerProps = {
   icon: 'users',
   title: 'Usuários',
   subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/usuarios'
const inicialState = {
   usuario: {nome: '', email: ''},
   lista: []
 }

export default class CrudUsuario extends Component {
   state = {...inicialState}

   componentWillMount() {
     axios(baseUrl).then(resp => {
        this.setState({ lista: resp.data})
     })
   }

   clear() {
     this.setState({usuario: inicialState.usuario})
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

   getUpdatedList(usuario, add = true) {
      const lista = this.state.lista.filter(u => u.id !== usuario.id)
      if (add) lista.unshift(usuario)
      return lista
   }

   atualizarCampo(evento) {
      const usuario = {...this.state.usuario}
      usuario[evento.target.nome] = evento.target.value
      this.setState({usuario})
   }

   renderFormulario() {
      return (
        <div className="form">
          <div className="row">
             <div className="col-12 col-md-6">
                <div className="form-group">
                   <label >Nome</label>
                   <input type="text" 
                     className="form-control" 
                     nome="nome" 
                     value={this.state.usuario.nome}
                     onChange={e => this.atualizarCampo(e)}
                     placeholder="Digite o nome..."  />
                </div>
             </div>
             
             <div className="col-12 col-md-6">
                <div className="form-group">
                   <label>E-mail</label>
                   <input type="text"
                     className="form-control"
                     nome="email"
                     value={this.state.usuario.email}
                     onChange={e => this.atualizarCampo(e)} 
                     placeholder="Digite o email..." />
                </div>
             </div>
          </div>

          <hr/>
          <div className="row">
             <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary"
                 onClick={e => this.save(e)}>
                   Salvar
                </button>

                <button className="btn btn-secondary ml-2"
                 onClick={e => this.clear(e)}>
                   Cancelar
                </button>
             </div>
          </div>
        </div>
      )
   }

   load(usuario) {
     this.setState({usuario})
   }

   remove(usuario) {
     axios.delete(` ${baseUrl}/${usuario.id}`).then(resp => {
        const lista = this.getUpdatedList(usuario, false)
        this.setState({ lista })
     })
   }

   renderTable() {
     return (
        <table className="table mt-4">
          <thead>
             <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
             </tr>
          </thead>
          <tbody>
             {this.renderRows()}
          </tbody>
        </table>
     )
   }

   renderRows() {
      return this.state.lista.map(usuario => {
         return (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                 <button className="btn btn-warning" onClick={() => this.load(usuario)}>
                    <i className="fa fa-pencil"></i>
                 </button>
                 <button className="btn btn-danger ml-2" onClick={() => this.remove(usuario)}>
                    <i className="fa fa-trash"></i>
                 </button>
              </td>
            </tr>
         )
      })
   }

   render() {
     //console.log(this.state.lista)
     return (
     <Principal {...headerProps}>
        {this.renderFormulario()}
        {this.renderTable()}
     </Principal>
     )
   }
   
}
