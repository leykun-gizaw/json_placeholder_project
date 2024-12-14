import { NavLink } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faComment,
  faFeatherPointed,
  faFilm,
  faImages,
  faList,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Route } from "../../definitions.ts";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { Dispatch, SetStateAction } from "react";

type RouteIconType = {
  name: string;
  icon: IconProp;
};

interface NavRoutesProps {
  routes: Route[];
  activeRouteIndex: number;
  setActiveRouteIndex: Dispatch<SetStateAction<number>>;
}

const NavRoutes: React.FC<NavRoutesProps> = (props) => {
  const routeIcons: Array<RouteIconType> = [
    { name: "users", icon: faUsers },
    { name: "comments", icon: faComment },
    { name: "posts", icon: faFeatherPointed },
    { name: "todos", icon: faList },
    { name: "albums", icon: faFilm },
    { name: "photos", icon: faImages },
  ];

  const routeElements = props.routes.map((route, idx) => {
    const leftIcon = routeIcons.find(
      (routeIcon) => routeIcon.name === route?.name,
    );

    return (
      <NavLink
        active={props.activeRouteIndex === idx}
        key={route?.id}
        label={route?.name}
        rightSection={<FontAwesomeIcon icon={faChevronRight} />}
        leftSection={
          <FontAwesomeIcon icon={leftIcon ? leftIcon.icon : faChevronRight} />
        }
        onClick={() => props.setActiveRouteIndex(idx)}
      />
    );
  });

  return <>{routeElements}</>;
};

export default NavRoutes;
