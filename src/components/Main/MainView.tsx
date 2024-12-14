import { Route } from "../../definitions.ts";
import React from "react";
import { Button, Divider, Flex, Title } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

interface MainViewProps {
  route: Route;
}

const MainView: React.FC<MainViewProps> = (props) => {
  return (
    <>
      <Flex align={"center"} justify={"space-between"}>
        <Title order={3}>{props.route?.name}</Title>
        <Button
          variant={"outline"}
          rightSection={<FontAwesomeIcon icon={faDownload} />}
        >
          Download
        </Button>
      </Flex>
      <Divider my={"sm"} />
    </>
  );
};

export default MainView;
