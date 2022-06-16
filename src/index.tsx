import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { msalInstance } from "./config/msal";
import AuthWrapper from './config/msal/AuthWrapper';
import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';
import { authRequest } from './config/msal/authConfig';
import { InteractionType } from '@azure/msal-browser';

(async () => {
  let myApp = <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect} 
            authenticationRequest={authRequest}
            errorComponent={()=><div>ERROR, PANIC!!</div>}
            loadingComponent={()=><div>LOADING, wait a little :)</div>}>
        <AuthWrapper>
          <App />
        </AuthWrapper>
      </MsalAuthenticationTemplate>
    </MsalProvider>
  </React.StrictMode>
    ReactDOM.render(myApp, document.getElementById("root"));

})();
 
  // ReactDOM.render(<React.StrictMode>
  // <App />
  // </React.StrictMode>, document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
