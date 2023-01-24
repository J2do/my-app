import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "../components/userItem";

interface UserListProps {
  users: IUser[];
}
const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      
    </div>
  );
};

export default UserList;
