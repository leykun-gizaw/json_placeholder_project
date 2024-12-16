import { Album } from "../../definitions.ts";
import React from "react";

interface AlbumsComponentProps {
  albums: Album[];
}
const AlbumsComponent: React.FC<AlbumsComponentProps> = (props) => {
  console.log(props.albums);
  return <></>;
};

export default AlbumsComponent;
