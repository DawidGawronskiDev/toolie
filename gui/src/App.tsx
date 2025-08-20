import { Header } from "./components/header";
import { Options } from "./components/options";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Options />
      </main>
    </>
  );
}

export default App;
