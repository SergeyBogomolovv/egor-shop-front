import CreatePollForm from "@/components/create-poll-form";
import PollCard from "@/components/poll-card";
import { useGetPolls } from "@/hooks/use-get-polls";

export default function CreatePage() {
  const { data } = useGetPolls();

  return (
    <main className="flex-grow flex flex-col gap-y-6">
      <CreatePollForm />
      <h2 className="font-bold text-4xl mx-auto">Все голосования</h2>
      {!data || data?.length === 0 ? (
        <h1 className="text-2xl font-bold mx-auto">Тут пока что пусто..</h1>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {data?.map((poll) => <PollCard key={poll.id} poll={poll} isAdmin />)}
        </div>
      )}
    </main>
  );
}
