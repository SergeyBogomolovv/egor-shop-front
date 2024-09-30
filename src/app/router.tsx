import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import AuthPage from "@/pages/auth";
import { adminLoader, authLoader, protectedLoader } from "./loaders";
import CreatePage from "@/pages/create";
import PollsPage from "@/pages/polls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/polls", element: <PollsPage />, loader: protectedLoader },
      { path: "/auth", element: <AuthPage />, loader: authLoader },
      { path: "/create", element: <CreatePage />, loader: adminLoader },
      { path: "*", element: <HomePage /> },
    ],
  },
]);

export default router;
