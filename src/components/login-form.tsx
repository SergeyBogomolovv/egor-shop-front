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

const loginSchema = z.object({
  name: z.string(),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не короче 6 символов" }),
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { name: "", password: "" },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const { data } = await $api.post("/auth/login", values);
      localStorage.setItem("token", data.token);
      window.location.reload();
    } catch (error) {
      form.setError("root", {
        type: "custom",
        message: "Неверное имя пользователя или пароль",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>С возвращением!</CardTitle>
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
                    <Input placeholder="Никита" {...field} />
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
          </CardContent>
          <CardFooter>
            {form.formState.errors.root && (
              <p className="text-red-500">
                {form.formState.errors.root.message}
              </p>
            )}
            <Button type="submit">Войти</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
