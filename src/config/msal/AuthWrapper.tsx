import { useAccount, useMsal } from "@azure/msal-react";
import React, { useEffect, useState } from "react";
import AxiosInstance from "../../utils/axios.instance";
import { authRequest } from "./authConfig";

const AuthWrapper: React.FC = ({ children }) => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [isTokenAcuired, setIsTokenAcuired] = useState(false);
  useEffect(() => {
    const middlewareId = AxiosInstance.interceptors.request.use(
      async (config) => {
        const accessToken = await instance
          .acquireTokenSilent({
            ...authRequest,
            account: account || undefined,
          })
          .catch((e) =>
            instance.acquireTokenRedirect({
              ...authRequest,
              account: account || undefined,
            })
          );
        if (config.headers) {
          if (accessToken) {
            config.headers["Authorization"] =
              "Bearer " + accessToken.accessToken;
          }
          config.headers["Content-Type"] = "application/json";
          return config;
        }
      },
      (error) => {
        Promise.reject(error);
      }
    );
    setIsTokenAcuired(true);
    return () => AxiosInstance.interceptors.request.eject(middlewareId);
  }, [instance, account]);

  return isTokenAcuired ? <>{children} </> : <div></div>;
};
export default AuthWrapper;