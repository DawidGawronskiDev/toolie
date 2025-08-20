import { Description } from "@/components/description";
import { Header } from "@/components/header/header";
import { Options } from "@/components/options/options";
import { ThemeProvider } from "@/components/theme-provider";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <ThemeProvider>
      <StarsBackground />
      <Header />
      <main className="container space-y-8">
        <Description />
        <Options />
      </main>
    </ThemeProvider>
  );
}

export default App;
