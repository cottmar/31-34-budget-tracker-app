import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './component/app/app';
import categoriesReducer from './reducer/category';
import './styles/main.scss';

// setting up the Store
const middleware = {};
const store = createStore(categoriesReducer, composeWithDevTools(applyMiddleware(...middleware)));

// rendering 
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);
