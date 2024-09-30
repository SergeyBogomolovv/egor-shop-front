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

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((store) => store.addProduct);
  const cart = useCartStore((store) => store.products);

  const authenticated = localStorage.getItem("token");

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
          disabled={!authenticated || cart?.includes(product)}
          onClick={() => addToCart(product)}
        >
          {authenticated
            ? `В корзин${cart?.includes(product) ? "е ✓" : "у"}`
            : "Авторизуйтесь"}
        </Button>
      </CardFooter>
    </Card>
  );
}
