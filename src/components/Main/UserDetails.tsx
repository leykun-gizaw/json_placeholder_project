import React from "react";
import { UserType } from "../../definitions.ts";
import {
  Button,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";

interface UserDetailsProps {
  user: UserType;
}

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  const usr = props.user;
  const infoTableElements = [
    ["Name", usr.name],
    ["User Name", usr.username],
    ["Email", usr.email],
    ["Phone", usr.phone],
    ["Website", usr.website],
  ].map((data) => {
    return (
      <Table.Tr key={data[1]}>
        <Table.Th>{data[0]}</Table.Th>
        <Table.Td>{data[1]}</Table.Td>
      </Table.Tr>
    );
  });
  const companyTableElements = [
    ["Name", usr.company.name],
    ["BS", usr.company.bs],
    ["Catch Phrase", usr.company.catchPhrase],
  ].map((data) => {
    return (
      <Table.Tr key={data[1]}>
        <Table.Th>{data[0]}</Table.Th>
        <Table.Td>{data[1]}</Table.Td>
      </Table.Tr>
    );
  });

  const infoTable = <Table.Tbody>{infoTableElements}</Table.Tbody>;
  const companyTable = <Table.Tbody>{companyTableElements}</Table.Tbody>;

  return (
    <>
      <Title>{props.user.name}</Title>
      <Divider my={"md"} />
      <Image
        src={`https://placeholder.co/300x300?text=${props.user.username}`}
        radius={"md"}
      />
      <Title order={3} my={"md"}>
        Basic Info
      </Title>
      <Table variant={"vertical"} withTableBorder={true} my={"md"}>
        {infoTable}
      </Table>
      <Title order={3} my={"md"}>
        Address
      </Title>
      <SimpleGrid cols={2}>
        <Stack>
          <Title order={5}>Street</Title>
          <Text>{props.user.address.street}</Text>
        </Stack>
        <Stack>
          <Title order={5}>Suite</Title>
          <Text>{props.user.address.suite}</Text>
        </Stack>
        <Stack>
          <Title order={5}>City</Title>
          <Text>{props.user.address.city}</Text>
        </Stack>
        <Stack>
          <Title order={5}>Zipcode</Title>
          <Text>{props.user.address.zipcode}</Text>
        </Stack>
        <Stack>
          <Title order={5}>Geo</Title>
          <Text>
            {props.user.address.geo.lat}, {props.user.address.geo.lng}
          </Text>
        </Stack>
      </SimpleGrid>
      <Title order={3} my={"md"}>
        Company
      </Title>
      <Table variant={"vertical"} withTableBorder={true} my={"md"}>
        {companyTable}
      </Table>
      <Title order={3} my={"md"}>
        Links
      </Title>
      <Flex justify={"space-between"}>
        <Button variant={"outline"}>Todos</Button>
        <Button variant={"outline"}>Posts</Button>
        <Button variant={"outline"}>Albums</Button>
      </Flex>
    </>
  );
};

export default UserDetails;
