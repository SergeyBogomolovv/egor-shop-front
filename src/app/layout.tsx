import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen max-w-[1280px] mx-auto">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
