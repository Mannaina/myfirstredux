import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Input from "./Input";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Appstate} from './Reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Appstate);

ReactDOM.render(
    <Provider store={store}>
        <Input/>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
