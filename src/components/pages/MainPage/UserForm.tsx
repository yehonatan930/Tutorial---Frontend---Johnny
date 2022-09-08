import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import UserService from "../../../services/user.service";
import { UserContext } from "../../../utils/UserContext";

export const UserForm = () => {
  const userCtx = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number | "">("");

  const firstNameHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);

  const lastNameHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);

  const ageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setAge("");
    const age = parseInt(e.target.value);
    if (Number.isInteger(age)) {
      setAge(age);
    }
  };

  const resetInputs = () => {
    setFirstName("");
    setLastName("");
    setAge(0);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!(firstName && lastName && age)) return;

    UserService.addUser(firstName, lastName, age).then(() => {
      userCtx.refreshContext();
      resetInputs();
    });
  };

  return (
    <Paper component="form" onSubmit={submitHandler}>
      <TextField
        label="First Name"
        variant="filled"
        value={firstName}
        onChange={firstNameHandler}
      />
      <TextField
        label="Last Name"
        variant="filled"
        value={lastName}
        onChange={lastNameHandler}
      />
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        label="Age"
        variant="filled"
        value={age}
        onChange={ageHandler}
      />
      <Button
        type="submit"
        // sx is meant for one-off customization
        // if it's a significant change, create a new component using styled()
        sx={{
          height: "100%",
        }}
        onClick={submitHandler}
      >
        Add user
      </Button>
    </Paper>
  );
};
