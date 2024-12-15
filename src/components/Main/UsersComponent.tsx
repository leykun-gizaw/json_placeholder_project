import { Route, UserType } from "../../definitions.ts";
import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData.ts";
import { Button, Drawer, ScrollArea, Table } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@mantine/hooks";
import UserDetails from "./UserDetails.tsx";

interface UsersComponentProps {
  route: Route;
}
const UsersComponent: React.FC<UsersComponentProps> = (props) => {
  const [drawerOpened, { open, close }] = useDisclosure(false);
  const [drawerDetails, setDrawerDetails] = useState<UserType>({} as UserType);
  const { data: users } = useFetchData<UserType[]>(props.route.href);

  const handleDrawerOpen = (usr: UserType) => {
    setDrawerDetails(usr);
    open();
  };

  const rows = users?.map((user, idx) => {
    return (
      <Table.Tr key={user.id}>
        <Table.Td>{idx + 1}</Table.Td>
        <Table.Td>{user.name}</Table.Td>
        <Table.Td>{user.username}</Table.Td>
        <Table.Td>{user.email}</Table.Td>
        <Table.Td>{user.phone}</Table.Td>
        <Table.Td>{user.website}</Table.Td>
        <Table.Td>
          <Button variant={"subtle"} onClick={() => handleDrawerOpen(user)}>
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <>
      <Table withTableBorder variant={"vertical"}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>No</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>User Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th>Website</Table.Th>
            <Table.Th>{"View"}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Drawer
        opened={drawerOpened}
        onClose={close}
        position={"right"}
        transitionProps={{
          transition: "fade-left",
          duration: 150,
          timingFunction: "linear",
        }}
        overlayProps={{ backgroundOpacity: 0.1, blur: 4 }}
        scrollAreaComponent={ScrollArea.Autosize}
        size={"md"}
        title={"User Details"}
      >
        <UserDetails user={drawerDetails} />
      </Drawer>
    </>
  );
};

export default UsersComponent;
