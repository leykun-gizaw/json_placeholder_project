import { Comment } from "../../definitions.ts";
import React from "react";

interface CommentsComponentProps {
  comments: Comment[];
}
const CommentsComponent: React.FC<CommentsComponentProps> = (props) => {
  console.log(props.comments);
  return <></>;
};

export default CommentsComponent;
