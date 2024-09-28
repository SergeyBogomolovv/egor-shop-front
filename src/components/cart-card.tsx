import { Product } from "@/lib/products";
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

interface Props {
  product: Product;
}

export default function CartCard({ product }: Props) {
  const removeFromCart = useCartStore((store) => store.removeProduct);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          className="rounded-lg aspect-video object-cover"
          src={product.image}
          alt={product.title}
        />
      </CardContent>
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
