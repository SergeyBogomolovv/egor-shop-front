import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { $api } from "@/lib/api";

export default function ProfileCard() {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    $api
      .get("/users/me")
      .then(({ data }) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Card className="self-start max-w-[400px] w-full">
      <CardHeader>
        <CardTitle>Мой профиль</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">
        <p>Имя: {loading ? "Загрузка..." : user?.name}</p>
        <p>Роль: {loading ? "Загрузка..." : user?.role}</p>
      </CardContent>
      <CardFooter>
        <Button
          disabled={loading}
          variant="destructive"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Выйти из аккаунта
        </Button>
      </CardFooter>
    </Card>
  );
}
