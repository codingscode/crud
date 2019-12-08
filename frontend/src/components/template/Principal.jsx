import React from 'react'
import './Principal.css'
import Header from './Header'



export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="conteudo container-fluid">
           <div className="p-3 mt-3">
              {props.children}
           </div>
        </main>
    </React.Fragment>


 


