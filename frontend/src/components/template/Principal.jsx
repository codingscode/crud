import React from 'react'
import './Principal.css'
import Header from './Header'



export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="conteudo">
            Conteudo
        </main>
    </React.Fragment>


 


