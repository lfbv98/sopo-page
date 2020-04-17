import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import App from './App';
import authenticationReducer from './store/reducers/authentication';
import newsReducer from './store/reducers/news.js';
import tourismReducer from './store/reducers/tourism.js';
import commentReducer from './store/reducers/comments.js';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  authenticationStore: authenticationReducer,
  newsStore: newsReducer,
  tourismStore: tourismReducer,
  commentStore: commentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
