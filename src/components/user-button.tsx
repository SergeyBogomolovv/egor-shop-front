import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { $api } from "@/lib/api";
import { User } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function UserButton() {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => $api.get<User>("/users/me"),
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isLoading}>
        <Button variant="outline">{data?.data.name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {data?.data.role === "admin" ? "Админ" : "Пользователь"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/create">Панель управления</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
