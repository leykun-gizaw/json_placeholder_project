import { Album } from "../../definitions.ts";
import React, { useContext } from "react";
import { RoutesContext } from "../../contexts/RoutesContext.ts";
import useFetchData from "../../hooks/useFetchData.ts";

const AlbumsComponent: React.FC = () => {
  const albumsRoute = useContext(RoutesContext).find(
    (route) => route.name === "albums",
  );
  const albums = useFetchData<Album[]>(albumsRoute?.href as string);
  console.log(albums);
  return <></>;
};

export default AlbumsComponent;
