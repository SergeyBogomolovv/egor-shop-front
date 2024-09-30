import { useAuth } from "@/hooks/use-auth";
import { Link } from "react-router-dom";
import UserButton from "./user-button";

export default function Header() {
  const authenticated = useAuth();

  return (
    <header className="flex items-center justify-between py-4 md:my-6">
      <Link to="/">
        <h1 className="font-bold text-2xl">Poll creator</h1>
      </Link>
      <nav className="flex items-center gap-x-4">
        <Link className="font-thin sm:text-lg text-sm" to="/polls">
          Голосования
        </Link>
        {authenticated ? (
          <UserButton />
        ) : (
          <Link className="font-thin sm:text-lg text-sm" to="/auth">
            Вход
          </Link>
        )}
      </nav>
    </header>
  );
}
