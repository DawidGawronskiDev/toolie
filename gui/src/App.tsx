import { Description } from "./components/description";
import { Header } from "./components/header";
import { Options } from "./components/options/options";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="container space-y-8">
        <Description />
        <Options />
      </main>
    </ThemeProvider>
  );
}

export default App;
