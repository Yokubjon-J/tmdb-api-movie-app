import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import MovieQueriesContextProvider from './MovieQueriesContext';
const domain = process.env.REACT_AUTH_DOMAIN;
const clientId = process.env.REACT_AUTH_CLIENT_ID;


ReactDOM.render(
    // <MovieQueriesContextProvider>
      <App />,
    // </MovieQueriesContextProvider>,
  document.getElementById('root')
);


