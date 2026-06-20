export default function Navbar() {
  const scrollToPay = () =>
    document.getElementById("pay").scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 w-full z-[100] px-12 h-[60px] flex items-center
                    justify-end bg-[rgba(14,14,14,0.9)] backdrop-blur-md
                    border-b border-white/[0.07] max-sm:px-5">
      <button
        onClick={scrollToPay}
        className="bg-[#1DB954] text-black border-none rounded-full px-[22px] py-[9px]
                   text-[0.82rem] font-bold cursor-pointer tracking-[0.2px]
                   transition-all duration-150 hover:bg-[#1ed760] hover:scale-[1.03]"
      >
        Get Founder Access — ₹49
      </button>
    </nav>
  );
}