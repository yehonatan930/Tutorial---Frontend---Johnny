import React, { createContext, useEffect, useState } from "react";
import User from "../models/User";
import UserService from "../services/user.service";

export interface IUserContext {
  users: User[];
  refreshContext: () => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = (props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    refreshContext();
  }, []);

  const refreshContext = async () => {
    setUsers(await UserService.getAllUsers());
  };

  const ctxValue = {
    users,
    refreshContext,
  };

  return (
    <UserContext.Provider value={ctxValue}>
      {props.children}
    </UserContext.Provider>
  );
};
