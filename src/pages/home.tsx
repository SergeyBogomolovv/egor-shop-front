import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10 flex-grow items-center">
      <h1 className="font-bold text-4xl">Приветствуем в poll creator!</h1>
      <img className="md:w-[80%] lg:w-[70%]" alt="hero-image" src="/hero.jpg" />
      <div className="flex flex-col gap-6">
        <Button size="lg" asChild>
          <Link to="/polls">Голосовать</Link>
        </Button>
        <Button size="lg" variant="outline">
          <Link to="/auth">Авторизация</Link>
        </Button>
      </div>
    </main>
  );
}
