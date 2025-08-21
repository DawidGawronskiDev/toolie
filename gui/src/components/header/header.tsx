import { HeaderActions } from "@/components/header/header-actions";
import { Logo } from "@/components/logo";

const Header = () => {
  return (
    <header className="container py-4">
      <div className="w-full flex items-center justify-between">
        <Logo />
        <HeaderActions />
      </div>
    </header>
  );
};

export { Header };
