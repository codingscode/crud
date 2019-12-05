import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Aplicacao from './principal/Aplicacao';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Aplicacao />, document.getElementById('root'));


serviceWorker.unregister();
