import { Description } from "./components/description";
import { Header } from "./components/header";
import { Options } from "./components/options";

function App() {
  return (
    <>
      <Header />
      <main className="container space-y-8">
        <Description />
        <Options />
      </main>
    </>
  );
}

export default App;
