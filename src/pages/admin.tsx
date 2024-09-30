import AdminProductCard from "@/components/admin-product-card";
import CreateTicketForm from "@/components/create-ticket-form";
import { useGetTickets } from "@/hooks/use-get-tickets";

export default function AdminPage() {
  const { data } = useGetTickets();

  return (
    <main className="flex-grow flex flex-col gap-y-6">
      <CreateTicketForm />
      <h2 className="font-bold text-4xl mx-auto">Текущие билеты</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!data || data?.length === 0 ? (
          <h1 className="text-4xl font-bold mx-auto">Тут пока что пусто..</h1>
        ) : (
          <>
            {data?.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
