import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import CartPage from "@/pages/cart";
import AboutPage from "@/pages/about";
import AuthPage from "@/pages/auth";
import { adminLoader, authLoader, protectedLoader } from "./loaders";
import AdminPage from "@/pages/admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/cart", element: <CartPage />, loader: protectedLoader },
      { path: "/auth", element: <AuthPage />, loader: authLoader },
      { path: "/admin", element: <AdminPage />, loader: adminLoader },
      { path: "*", element: <HomePage /> },
    ],
  },
]);

export default router;
