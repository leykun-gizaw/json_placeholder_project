import React from "react";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { UserType } from "../definitions.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

type UserProps = {
  user: UserType;
  setActiveUser: (index: number) => void;
};

const User: React.FC<UserProps> = (props) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={`https://placehold.co/400x500?text=${props.user.username}`}
          height={160}
          alt={`${props.user.name}'s image`}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.user.name}</Text>
        <Badge color="pink">{props.user.address.city}</Badge>
      </Group>

      <Text size="sm" c="dimmed"></Text>

      <Button radius="md" onClick={() => props.setActiveUser(props.user.id)}>
        <span>Show user</span>
        <FontAwesomeIcon icon={faDoorOpen} />
      </Button>
    </Card>
  );
};

export default User;
