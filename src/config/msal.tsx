import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./msal/authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);

export const logout = () => {
  msalInstance.logoutRedirect();
};
