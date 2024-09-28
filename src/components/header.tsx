import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 sticky">
      <Link to="/">
        <h1 className="font-bold text-2xl">Ticket</h1>
      </Link>
      <nav className="flex items-center gap-x-4">
        <Link className="font-thin text-lg" to="/about">
          Про нас
        </Link>
        <Link className="font-thin text-lg" to="/cart">
          Корзина
        </Link>
      </nav>
    </header>
  );
}
