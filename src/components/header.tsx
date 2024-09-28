import { Link } from "react-router-dom";

export default function Header() {
  const authenticated = localStorage.getItem("token");

  return (
    <header className="flex items-center justify-between py-4 md:my-6">
      <Link to="/">
        <h1 className="font-bold text-2xl">Ticket</h1>
      </Link>
      <nav className="flex items-center gap-x-4">
        <Link className="font-thin sm:text-lg text-sm" to="/about">
          Про нас
        </Link>
        {authenticated ? (
          <>
            <Link className="font-thin sm:text-lg text-sm" to="/cart">
              Корзина
            </Link>
            <Link className="font-thin sm:text-lg text-sm" to="/admin">
              Админ-панель
            </Link>
          </>
        ) : (
          <Link className="font-thin sm:text-lg text-sm" to="/auth">
            Вход | Регистрация
          </Link>
        )}
      </nav>
    </header>
  );
}
