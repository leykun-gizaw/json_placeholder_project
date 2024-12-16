import { Photo } from "../../definitions.ts";
import React from "react";

interface PhotosComponentProps {
  photos: Photo[];
}
const PhotosComponent: React.FC<PhotosComponentProps> = (props) => {
  console.log(props.photos);
  return <></>;
};

export default PhotosComponent;
