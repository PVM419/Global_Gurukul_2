import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DonationButton from "../components/DonationButton";
import ScrollToTop from "../components/ScrollToTop";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <DonationButton />
    </div>
  );
}
