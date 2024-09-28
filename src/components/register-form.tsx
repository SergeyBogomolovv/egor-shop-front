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
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";

const registerSchema = z.object({
  name: z.string(),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не короче 6 символов" }),
  admin: z.any(),
});

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", password: "", admin: false },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      const { data } = await $api.post("/auth/register", {
        ...values,
        role: values.admin ? "admin" : "user",
      });
      toast.success(data.message);
    } catch (error) {
      form.setError("name", {
        type: "custom",
        message: "Такой пользователь уже существует",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Добро пожаловать!</CardTitle>
        <CardDescription>Введите имя и пароль</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="flex flex-col gap-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя пользователя</FormLabel>
                  <FormControl>
                    <Input placeholder="Егор" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="admin"
              render={({ field }) => (
                <FormItem className="flex items-end gap-2">
                  <FormControl>
                    <Checkbox
                      checked={!!field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Админ?</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Зарегистрироваться</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
