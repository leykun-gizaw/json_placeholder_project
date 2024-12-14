import { MantineProvider } from "@mantine/core";
import ApplicationShell from "./components/ApplicationShell.tsx";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <ApplicationShell></ApplicationShell>
    </MantineProvider>
  );
}

export default App;
