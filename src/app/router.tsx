import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import CartPage from "@/pages/cart";
import AboutPage from "@/pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

export default router;
