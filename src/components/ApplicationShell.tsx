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

function ApplicationShell() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const handleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{
        width: 400,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Center h={"100%"}>
          <Flex justify={"space-between"} w={"95%"} gap="md">
            <Center>
              <Flex align={"center"} gap="md">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
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
        <NavRoutes />
      </AppShell.Navbar>

      <AppShell.Main></AppShell.Main>
    </AppShell>
  );
}

export default ApplicationShell;
