import React, {Component} from 'react';
import Principal from '../template/Principal'


const headerProps = {
   icon: 'users',
   title: 'Usuários',
   subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

export default class CrudUsuario extends Component {
   render() {
     <Principal {...headerProps}>
        Cadastro de Usuário
     </Principal>
   }
   
}
