import ProductCard from "@/components/product-card";
import products from "@/lib/products";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10">
      <div className="bg-[url('./assets/banner.avif')] rounded-lg bg-no-repeat bg-center bg-cover text-white p-10">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold md:mb-10 mb-6">
          Билеты на
          <br /> любые
          <br /> мероприятия
        </h1>
        <p className="text-lg font-thin">По низким ценам</p>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
