import { isIE } from "./auth-utils";
import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID ?? "",
    authority: process.env.REACT_APP_AUTHORITY,
    navigateToLoginRequestUrl: true,
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
    
    // authorityMetadata: "https://login.microsoftonline.com/" + "78820852-55fa-450b-908d-45c0d911e76b" + "/v2.0/.well-known/openid-configuration/"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: isIE(), // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

export const authRequest = {
    // scopes: ["openid", "profile"],
  scopes: [
    "api://template/access",//TODO
    "openid",
  ]  
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};