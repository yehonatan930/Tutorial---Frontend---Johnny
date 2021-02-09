import { UserAgentApplication } from "msal";

export const requiresInteraction = (errorMessage: any[]) => {
  if (!errorMessage || !errorMessage.length) {
    return false;
  }

  return (
    errorMessage.indexOf("consent_required") > -1 ||
    errorMessage.indexOf("interaction_required") > -1 ||
    errorMessage.indexOf("login_required") > -1
  );
};

export const fetchMsGraph = async (url: string, accessToken: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const isIE = () => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ") > -1;
  const msie11 = ua.indexOf("Trident/") > -1;

  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;

  return msie || msie11;
};

export const GRAPH_SCOPES = {
  OPENID: "openid",
  PROFILE: "profile",
  USER_READ: "User.Read",
  USER_READ_ALL: "User.Read.All",
  USER_READ_BASIC_ALL: "User.ReadBasic.All",
  MAIL_READ: "Mail.Read",
};

export const GRAPH_ENDPOINTS = {
  ME: "https://graph.microsoft.com/v1.0/me",
  USER: "https://graph.microsoft.com/v1.0/users",
  MAIL: "https://graph.microsoft.com/v1.0/me/messages",
};

export const GRAPH_REQUESTS = {
  LOGIN: {
    scopes: [GRAPH_SCOPES.USER_READ],
  },
};

export const msalApp = new UserAgentApplication({
  auth: {
    //@ts-ignore
    clientId: "1c5e04df-0293-4b70-9c62-edc0f3e0b49a",
    authority:
      "https://login.microsoftonline.com/78820852-55fa-450b-908d-45c0d911e76b",
    validateAuthority: false,
    navigateToLoginRequestUrl: true,
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: isIE(),
  },
  system: {
    navigateFrameWait: 0,
  },
});
