import { Photo } from "../../definitions.ts";
import React, { useContext } from "react";
import { RoutesContext } from "../../contexts/RoutesContext.ts";
import useFetchData from "../../hooks/useFetchData.ts";

const PhotosComponent: React.FC = () => {
  const photosRoute = useContext(RoutesContext).find(
    (route) => route.name === "photos",
  );
  const photos = useFetchData<Photo[]>(photosRoute?.href as string);
  console.log(photos);
  return <></>;
};

export default PhotosComponent;
