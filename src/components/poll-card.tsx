import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Poll } from "@/lib/types";
import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useMutation } from "@tanstack/react-query";
import { $api } from "@/lib/api";
import { toast } from "sonner";
import { Input } from "./ui/input";
import queryClient from "@/lib/query";

interface Props {
  poll: Poll;
  isAdmin?: boolean;
}

const answerSchema = z.object({
  answer1: z.string().min(1, { message: "Ответ не может быть пустым" }),
  answer2: z.optional(
    z.string().min(1, { message: "Ответ не может быть пустым" }),
  ),
  answer3: z.optional(
    z.string().min(1, { message: "Ответ не может быть пустым" }),
  ),
  answer4: z.optional(
    z.string().min(1, { message: "Ответ не может быть пустым" }),
  ),
  email: z.string().email(),
});

export default function PollCard({ poll, isAdmin }: Props) {
  const authenticated = useAuth();

  const form = useForm<z.infer<typeof answerSchema>>({
    resolver: zodResolver(answerSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (dto: z.infer<typeof answerSchema>) =>
      $api.post("/answers", dto),

    onSuccess() {
      toast.success("Ответ сохранен");
      queryClient.invalidateQueries({ queryKey: ["polls"] });
      form.reset();
    },
    onError() {
      toast.error("Ошибка сохранения ответа");
    },
  });

  const { mutate: deletePoll, isPending: isDeleting } = useMutation({
    mutationFn: () => $api.delete(`/polls/${poll.id}`),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["polls"] });
      toast.success("Голосование удалено");
    },
    onError() {
      toast.error("Ошибка удаления голосования");
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((values) => mutate(values))}>
        <Card>
          <CardHeader>
            <CardTitle>{poll.title}</CardTitle>
            <CardDescription>Проголосовали: {poll.answered}</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="answer1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{poll.question1}</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите ответ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {poll.question2 && (
              <FormField
                control={form.control}
                name="answer2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{poll.question2}</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите ответ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {poll.question3 && (
              <FormField
                control={form.control}
                name="answer3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{poll.question3}</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите ответ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {poll.question4 && (
              <FormField
                control={form.control}
                name="answer4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{poll.question4}</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите ответ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email для связи</FormLabel>
                  <FormControl>
                    <Input placeholder="email@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button type="submit" disabled={!authenticated || isPending}>
              Ответить
            </Button>
            {isAdmin && (
              <Button
                onClick={() => deletePoll()}
                disabled={isDeleting}
                type="button"
                variant="destructive"
              >
                Удалить
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
