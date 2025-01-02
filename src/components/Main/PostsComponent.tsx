import { Post } from "../../definitions.ts";
import React, { useContext } from "react";
import { RoutesContext } from "../../contexts/RoutesContext.ts";
import useFetchData from "../../hooks/useFetchData.ts";

const PostsComponent: React.FC = () => {
  const postsRoute = useContext(RoutesContext).find(
    (route) => route.name === "posts",
  );
  const posts = useFetchData<Post[]>(postsRoute?.href as string);
  console.log(posts);
  return <></>;
};

export default PostsComponent;
