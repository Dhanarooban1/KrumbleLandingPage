export default function Footer() {
  return (
    <footer className="px-12 py-9 border-t border-white/[0.07] flex items-center
                       justify-between flex-wrap gap-4 max-sm:px-5 max-sm:py-7">
      <div className="font-bold text-base">WishFlow 🎁</div>

      <div className="flex gap-5 flex-wrap">
        {["Privacy", "Terms", "Contact"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-[#888] text-[0.8rem] no-underline
                       transition-colors duration-200 hover:text-white"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="text-[0.75rem] text-[#888]">
        © 2026 WishFlow. Made in India 🇮🇳
      </div>
    </footer>
  );
}