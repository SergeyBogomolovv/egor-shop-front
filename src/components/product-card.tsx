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

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
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
        <Button>Добавить в корзину</Button>
      </CardFooter>
    </Card>
  );
}
