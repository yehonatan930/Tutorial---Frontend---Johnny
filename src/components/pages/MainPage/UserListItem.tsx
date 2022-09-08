import { ListItem, ListItemText, styled } from "@mui/material";
import { User } from "../../../models/user.model";

interface IProps {
  user: User;
}

const StyledListItem = styled(ListItem)`
  background-color: white;
  color: black;
  border-bottom: 1px solid black;
`;

export const UserListItem: React.FC<IProps> = ({ user }) => {
  return (
    <StyledListItem>
      <ListItemText
        primary={`${user.firstName} ${user.lastName}`}
        secondary={user.age}
      ></ListItemText>
    </StyledListItem>
  );
};
