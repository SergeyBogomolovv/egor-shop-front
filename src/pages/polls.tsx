import PollCard from "@/components/poll-card";
import { useGetPolls } from "@/hooks/use-get-polls";

export default function PollsPage() {
  const { data } = useGetPolls();

  return (
    <main className="flex flex-col items-center gap-10 flex-grow">
      <h1 className="font-bold text-4xl">Все голосования</h1>
      {!data || data?.length === 0 ? (
        <h1 className="text-2xl font-bold mx-auto">Тут пока что пусто..</h1>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 w-full">
          {data?.map((poll) => <PollCard key={poll.id} poll={poll} />)}
        </div>
      )}
    </main>
  );
}
