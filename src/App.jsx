import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero  from "./components/Hero";
import PainVsSolution from "./components/Painsolution";
import PaymentSection from "./components/PaymentSection";
import Footer  from "./components/Footer";
import "./index.css";

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

export default function App() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="bg-[#0e0e0e] text-white font-sans overflow-x-hidden leading-relaxed">
      <Navbar />
      <Hero />
      {/* <HowItWorks /> */}
      <PainVsSolution />
      <PaymentSection />
      <Footer />
    </div>
  );
}