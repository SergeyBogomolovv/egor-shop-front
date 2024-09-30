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
  FormDescription,
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

const productSchema = z.object({
  title: z.string(),
  price: z.string(),
  description: z.string(),
  imageUrl: z.optional(z.string().url()),
});

export default function CreateTicketForm() {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: { title: "", price: "", description: "" },
  });

  const { mutate: create, isPending } = useMutation({
    mutationFn: (dto: z.infer<typeof productSchema>) =>
      $api.post("/tickets", dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      toast.success("Билет создан");
      form.reset();
    },
    onError() {
      toast.error("Ошибка создания билета");
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Добавить новый билет</CardTitle>
        <CardDescription>
          Введите необходимые данные для создания нового билета
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
                    <Input placeholder="Название мероприятия" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цена</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание</FormLabel>
                  <FormControl>
                    <Input placeholder="Добавьте описание" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ссылка на картинку</FormLabel>
                  <FormControl>
                    <Input placeholder="http://..." {...field} />
                  </FormControl>
                  <FormDescription>Опционально</FormDescription>
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
