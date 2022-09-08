import { Typography } from "@mui/material";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";

export const MainPage = () => {
  return (
    <>
      <Typography variant="h1">Users</Typography>
      <UserForm />
      <UserList />
    </>
  );
};
