import {
  ActionIcon,
  AppShell,
  Burger,
  Center,
  Flex,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import NavRoutes from "./Navigation/NavRoutes.tsx";
import useFetchData from "../hooks/useFetchData.ts";
import { Route } from "../definitions.ts";
import MainView from "./Main/MainView.tsx";

function ApplicationShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  const { data: routes } = useFetchData<Route[]>(
    "http://localhost:3000/available-routes",
  );

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
    >
      <AppShell.Header>
        <Center h={"100%"}>
          <Flex justify={"space-between"} w={"95%"} gap="md">
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
        <NavRoutes
          routes={routes}
          activeRouteIndex={activeRouteIndex}
          setActiveRouteIndex={setActiveRouteIndex}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <MainView route={routes[activeRouteIndex]} />
      </AppShell.Main>
    </AppShell>
  );
}

export default ApplicationShell;
