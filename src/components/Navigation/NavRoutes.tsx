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
import useFetchData from "../../hooks/useFetchData.ts";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type RouteIconType = {
  name: string;
  icon: IconProp;
};

const NavRoutes = () => {
  const { data: routes } = useFetchData<Route[]>(
    "http://localhost:3000/available-routes",
  );

  const routeIcons: Array<RouteIconType> = [
    { name: "users", icon: faUsers },
    { name: "comments", icon: faComment },
    { name: "posts", icon: faFeatherPointed },
    { name: "todos", icon: faList },
    { name: "albums", icon: faFilm },
    { name: "photos", icon: faImages },
  ];

  const routeElements = routes.map((route) => {
    const leftIcon = routeIcons.find(
      (routeIcon) => routeIcon.name === route?.name,
    );

    return (
      <NavLink
        key={route?.id}
        label={route?.name}
        rightSection={<FontAwesomeIcon icon={faChevronRight} />}
        leftSection={
          <FontAwesomeIcon icon={leftIcon ? leftIcon.icon : faChevronRight} />
        }
      />
    );
  });

  return <>{routeElements}</>;
};

export default NavRoutes;