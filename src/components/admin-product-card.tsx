import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Product } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/query";
import { toast } from "sonner";
import { $api } from "@/lib/api";

interface Props {
  product: Product;
}

export default function AdminProductCard({ product }: Props) {
  const { mutate, isPending } = useMutation({
    mutationFn: async () => $api.delete(`/tickets/${product.id}`),
    onSuccess() {
      queryClient.refetchQueries({ queryKey: ["tickets"] });
      toast.success("Билет удален");
    },
    onError() {
      toast.error("Ошибка удаления билета");
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      {product.imageUrl && (
        <CardContent>
          <img
            className="rounded-lg aspect-video object-cover"
            src={product.imageUrl}
            alt={product.title}
          />
        </CardContent>
      )}
      <CardFooter>
        <Button
          disabled={isPending}
          onClick={() => mutate()}
          variant="destructive"
        >
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
}
