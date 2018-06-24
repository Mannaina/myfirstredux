import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import {updateInput} from './Reducer'
import Input from './Input';

const store = createStore(updateInput);
 
ReactDOM.render(<Provider store={store}>
  <Input />
</Provider>, document.getElementById('root'));
registerServiceWorker();
