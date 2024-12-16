import { Post } from "../../definitions.ts";
import React from "react";

interface PostsCommentProps {
  posts: Post[];
}
const PostsComponent: React.FC<PostsCommentProps> = (props) => {
  console.log(props.posts);
  return <></>;
};

export default PostsComponent;
