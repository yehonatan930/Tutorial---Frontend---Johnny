import { List } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { UserListItem } from "./UserListItem";

export const UserList = () => {
  const userCtx = useContext(UserContext);
  const users = userCtx.users.map((user) => {
    return <UserListItem key={user.name} user={user} />;
  });
  return <List>{users}</List>;
};
