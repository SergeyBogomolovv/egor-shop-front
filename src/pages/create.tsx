import AnswerCard from "@/components/answer-card";
import CreatePollForm from "@/components/create-poll-form";
import PollCard from "@/components/poll-card";
import { useGetPolls } from "@/hooks/use-get-polls";
import { $api } from "@/lib/api";
import { Answer } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export default function CreatePage() {
  const { data } = useGetPolls();

  const { data: answers } = useQuery({
    queryKey: ["answers"],
    queryFn: () => $api.get<Answer[]>("/answers"),
  });

  return (
    <main className="flex-grow flex flex-col gap-y-6">
      <CreatePollForm />
      <h2 className="font-bold text-4xl mx-auto">Все голосования</h2>
      {!data || data?.length === 0 ? (
        <h1 className="text-2xl font-bold mx-auto">
          Голосваний пока что нет..
        </h1>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {data?.map((poll) => <PollCard key={poll.id} poll={poll} isAdmin />)}
        </div>
      )}

      <h2 className="font-bold text-4xl mx-auto">Все ответы</h2>
      {!answers || answers?.data?.length === 0 ? (
        <h1 className="text-2xl font-bold mx-auto">Ответов пока что нет..</h1>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {answers?.data?.map((answer) => (
            <AnswerCard key={answer.id} answer={answer} />
          ))}
        </div>
      )}
    </main>
  );
}
