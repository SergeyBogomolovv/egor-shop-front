import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { $api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import queryClient from "@/lib/query";
import { toast } from "sonner";

const pollSchema = z.object({
  title: z.string().min(1, { message: "Заголовок не может быть пустым" }),
  question: z.string().min(1, { message: "Вопрос не может быть пустым" }),
});

export default function CreatePollForm() {
  const form = useForm<z.infer<typeof pollSchema>>({
    resolver: zodResolver(pollSchema),
    defaultValues: { title: "", question: "" },
  });

  const { mutate: create, isPending } = useMutation({
    mutationFn: (dto: z.infer<typeof pollSchema>) => $api.post("/polls", dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["polls"] });
      toast.success("Голосование создано");
      form.reset();
    },
    onError() {
      toast.error("Ошибка создания голосования");
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Создать новое голосование</CardTitle>
        <CardDescription>
          Введите необходимые данные для создания голосования
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((values) => create(values))}>
          <CardContent className="flex flex-col gap-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название</FormLabel>
                  <FormControl>
                    <Input placeholder="Название опроса" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Вопрос</FormLabel>
                  <FormControl>
                    <Input placeholder="Что ты любишь?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            {form.formState.errors.root && (
              <p className="text-red-500">
                {form.formState.errors.root.message}
              </p>
            )}
            <Button type="submit" disabled={isPending}>
              Создать
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
