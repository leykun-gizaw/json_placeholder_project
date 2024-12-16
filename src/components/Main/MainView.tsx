import {
  Album,
  Comment,
  Photo,
  Post,
  Route,
  Todo,
  UserType,
} from "../../definitions.ts";
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
  data:
    | Array<UserType>
    | Array<Post>
    | Array<Comment>
    | Array<Album>
    | Array<Photo>
    | Array<Todo>;
}

const MainView: React.FC<MainViewProps> = (props) => {
  let chosenComponent = <></>;

  switch (props.route?.name) {
    case "posts":
      chosenComponent = <PostsComponent posts={props.data as Post[]} />;
      break;
    case "comments":
      chosenComponent = (
        <CommentsComponent comments={props.data as Comment[]} />
      );
      break;
    case "users":
      chosenComponent = <UsersComponent users={props.data as UserType[]} />;
      break;
    case "todos":
      chosenComponent = <TodosComponent todos={props.data as Todo[]} />;
      break;
    case "albums":
      chosenComponent = <AlbumsComponent albums={props.data as Album[]} />;
      break;
    case "photos":
      chosenComponent = <PhotosComponent photos={props.data as Photo[]} />;
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
