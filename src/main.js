import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reporter from './lib/redux-reporter';
import session from './lib/redux-session';

import App from './component/app/app';
import combineReducers from './reducer/index';
import './styles/main.scss';
// import session from './lib/redux-session';
// import reporter from './lib/redux-reporter';

// setting up the Store
const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(reporter, session)));

// rendering 
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);
