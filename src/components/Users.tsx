import User from "./User.tsx";
import { UserType } from "../definitions.ts";
import React from "react";

interface UserProps {
  users: UserType[];
  setActiveUser: (index: number) => void;
}

const Users: React.FC<UserProps> = (props) => {
  const userElements = props.users.map((user: UserType) => {
    return (
      <User user={user} key={user.id} setActiveUser={props.setActiveUser} />
    );
  });
  return <>{userElements}</>;
};

export default Users;
