import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero  from "./components/Hero.jsx";
import PainVsSolution from "./components/Painsolution.jsx";
import Footer  from "./components/Footer.jsx";
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
      <PainVsSolution />  
      <Footer />
    </div>
  );
}