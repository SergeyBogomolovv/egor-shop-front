import CartCard from "@/components/cart-card";
import ProfileCard from "@/components/profile-card";
import { useCartStore } from "@/store/cart.store";

export default function CartPage() {
  const products = useCartStore((store) => store.products);

  return (
    <main className="flex flex-col items-center gap-10">
      <ProfileCard />
      {products.length === 0 && (
        <h1 className="text-3xl font-bold">Корзина пуста</h1>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
