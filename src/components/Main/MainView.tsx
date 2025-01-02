import { Route } from "../../definitions.ts";
import React from "react";
import { Button, Divider, Flex, Title } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import PostsComponent from "./PostsComponent.tsx";
import AlbumsComponent from "./AlbumsComponent.tsx";
import PhotosComponent from "./PhotosComponent.tsx";
import CommentsComponent from "./CommentsComponent.tsx";
import UsersComponent from "./UsersComponent.tsx";
import TodosComponent from "./TodosComponent.tsx";

interface MainViewProps {
  route: Route;
}

const MainView: React.FC<MainViewProps> = (props) => {
  let chosenComponent = <></>;

  switch (props.route?.name) {
    case "posts":
      chosenComponent = <PostsComponent />;
      break;
    case "comments":
      chosenComponent = <CommentsComponent />;
      break;
    case "users":
      chosenComponent = <UsersComponent />;
      break;
    case "todos":
      chosenComponent = <TodosComponent />;
      break;
    case "albums":
      chosenComponent = <AlbumsComponent />;
      break;
    case "photos":
      chosenComponent = <PhotosComponent />;
      break;
  }
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
      {chosenComponent}
    </>
  );
};

export default MainView;
