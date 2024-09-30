import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart.store";
import { Ticket } from "@/lib/types";

interface Props {
  product: Ticket;
}

export default function CartCard({ product }: Props) {
  const removeFromCart = useCartStore((store) => store.removeProduct);

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
          variant="destructive"
          onClick={() => removeFromCart(product.id)}
        >
          Удалить из корзины
        </Button>
      </CardFooter>
    </Card>
  );
}
