import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { $api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/lib/types";

export default function ProfileCard() {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => $api.get<User>("/users/me"),
  });

  return (
    <Card className="self-start w-full">
      <CardHeader>
        <CardTitle>Мой профиль</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">
        <p>Имя: {isLoading ? "Загрузка..." : data?.data?.name}</p>
        <p>Роль: {isLoading ? "Загрузка..." : data?.data?.role}</p>
      </CardContent>
      <CardFooter>
        <Button
          disabled={isLoading}
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
