import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
// import MovieQueriesContextProvider from './MovieQueriesContext';
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;


ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>
      {/* // <MovieQueriesContextProvider> */}
        <App />
      {/* // </MovieQueriesContextProvider> */}
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);


