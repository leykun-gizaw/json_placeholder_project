import { MantineProvider } from "@mantine/core";
import ApplicationShell from "./components/ApplicationShell.tsx";
import "@mantine/core/styles.css";
import useFetchData from "./hooks/useFetchData.ts";
import { Route } from "./definitions.ts";
import { RoutesContext } from "./contexts/RoutesContext.ts";

function App() {
  const { data: routes } = useFetchData<Route[]>(
    "http://localhost:3000/available-routes",
  );
  return (
    <MantineProvider>
      <RoutesContext.Provider value={routes}>
        <ApplicationShell></ApplicationShell>
      </RoutesContext.Provider>
    </MantineProvider>
  );
}

export default App;
