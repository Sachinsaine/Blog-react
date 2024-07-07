import { Footer } from "./pages/Footer/Footer";
import { Navbar } from "./pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
