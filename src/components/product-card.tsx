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

export default function ProductCard({ product }: Props) {
  const products = useCartStore((store) => store.products);

  const addToCart = useCartStore((store) => store.addProduct);

  const authenticated = localStorage.getItem("token");

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
          disabled={!authenticated || products.includes(product)}
          onClick={() => addToCart(product)}
        >
          {authenticated
            ? `В корзин${products.includes(product) ? "е ✓" : "у"}`
            : "Авторизуйтесь"}
        </Button>
      </CardFooter>
    </Card>
  );
}
