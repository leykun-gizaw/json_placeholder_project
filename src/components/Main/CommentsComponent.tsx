import { Comment } from "../../definitions.ts";
import React, { useContext } from "react";
import { RoutesContext } from "../../contexts/RoutesContext.ts";
import useFetchData from "../../hooks/useFetchData.ts";

const CommentsComponent: React.FC = () => {
  const commentsRoute = useContext(RoutesContext).find(
    (route) => route.name === "comments",
  );
  const comments = useFetchData<Comment[]>(commentsRoute?.href as string);
  console.log(comments);
  return <></>;
};

export default CommentsComponent;
