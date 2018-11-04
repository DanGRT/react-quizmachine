import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.js';

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import {loadState, saveState} from './localStorage.js'

const persistedState = {user: loadState()}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState,/* preloadedState, */ composeEnhancers(applyMiddleware(
  thunkMiddleware
)));


//pretty sure this is going to save user state continually, regardless of what changes to store are made (no idea how to get around this)
//trying to use the saveState function after logIn dispatch saved 'loggedIn: false' as props are not updated in time
store.subscribe(() => {
  saveState(store.getState().user)
})


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
