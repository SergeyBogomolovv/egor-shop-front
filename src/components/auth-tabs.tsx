import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

export default function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="max-w-[400px] w-full">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="login">
          Вход
        </TabsTrigger>
        <TabsTrigger className="w-full" value="register">
          Регистрация
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
}
