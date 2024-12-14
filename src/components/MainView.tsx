import { UserType } from "../definitions.ts";
import React from "react";
import { Avatar, Flex, Title } from "@mantine/core";

interface MainViewProps {
  users: UserType[];
  activeUser: number;
}

const MainView: React.FC<MainViewProps> = (props) => {
  const activeUserType =
    props.users.find((user) => user.id === props.activeUser) || props.users[0];
  return (
    <>
      <Flex
        // style={{ backgroundColor: "crimson", color: "white" }}
        align="center"
        gap="md"
      >
        <Avatar name={activeUserType?.name || ""} color={"initials"} />
        <Title>{activeUserType?.username}</Title>
      </Flex>
    </>
  );
};

export default MainView;
