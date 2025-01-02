import {
  ActionIcon,
  AppShell,
  Burger,
  Center,
  Divider,
  Flex,
  Pagination,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import React, { useContext, useState } from "react";
import NavRoutes from "./Navigation/NavRoutes.tsx";
import MainView from "./Main/MainView.tsx";
import { RoutesContext } from "../contexts/RoutesContext.ts";

const ApplicationShell: React.FC = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);
  const routes = useContext(RoutesContext);

  const handleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      footer={{ height: 50 }}
      layout={"alt"}
    >
      <AppShell.Header>
        <Center h={"100%"}>
          <Flex justify={"space-between"} w={"100%"} gap="md" mx={"md"}>
            <Center>
              <Flex align={"center"} gap="md">
                <Burger
                  opened={mobileOpened}
                  onClick={toggleMobile}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Burger
                  opened={desktopOpened}
                  onClick={toggleDesktop}
                  visibleFrom="sm"
                  size="sm"
                />
                <Title order={2} fw={500}>{`{JSON} Placeholder`}</Title>
              </Flex>
            </Center>
            <Center>
              <ActionIcon
                size={"lg"}
                variant={"outline"}
                color={"gray"}
                onClick={handleColorScheme}
              >
                {colorScheme === "light" ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faSun} />
                )}
              </ActionIcon>
            </Center>
          </Flex>
        </Center>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Title order={3}>Available Routes</Title>
        <Divider my={"sm"} />
        <NavRoutes
          routes={routes}
          activeRouteIndex={activeRouteIndex}
          setActiveRouteIndex={setActiveRouteIndex}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <MainView route={routes[activeRouteIndex]} />
      </AppShell.Main>
      <AppShell.Footer py={"md"}>
        <Center h={"100%"}>
          <Pagination total={5} />
        </Center>
      </AppShell.Footer>
    </AppShell>
  );
};

export default ApplicationShell;
