import { HeaderActions } from "@/components/header/header-actions";

const Header = () => {
  return (
    <header className="container py-4">
      <div className="w-full flex items-center justify-between">
        <h1>Toolie</h1>
        <HeaderActions />
      </div>
    </header>
  );
};

export { Header };
