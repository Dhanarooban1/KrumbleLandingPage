export default function Hero() {
  const scrollToPay = () =>
    document.getElementById("pay").scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero-glow min-h-screen flex flex-col items-center
                        justify-center px-6 py-20 text-center relative">
      <div className="relative flex flex-col items-center w-full">
        
        {/* Headline */}
        <h1 className="text-[clamp(2.6rem,6vw,4.8rem)] font-black leading-[1.05]
                       tracking-[-2.5px] mb-5 max-w-[720px]">
          Never forget to wish<br />
          someone <em className="gradient-text">again.</em>
        </h1>

        {/* Subheading */}
        <p className="text-[clamp(0.95rem,1.8vw,1.1rem)] text-[#bbbbbb]
                      max-w-[460px] leading-[1.75] mb-9">
          WishFlow saves your loved ones — birthdays, anniversaries, or any special day.
          We'll send it automatically via WhatsApp.
          <br />
          <span className="text-white text-[1.15em] font-extrabold tracking-[-0.3px]">
            Plus AI-generated digital gifts included with every wish.
          </span>
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2.5">
          <button
            onClick={scrollToPay}
            className="inline-flex items-center gap-2 bg-[#1DB954] text-black
                       border-none rounded-full px-[38px] py-[15px] text-base
                       font-extrabold cursor-pointer tracking-[-0.2px]
                       shadow-[0_0_40px_rgba(29,185,84,0.22)]
                       transition-all duration-150 hover:bg-[#1ed760] hover:scale-[1.04]"
          >
            One Good Decision Today — ₹100
          </button>
          <span className="text-[0.78rem] text-[#888]">Razorpay secured</span>
        </div>

      </div>
    </section>
  );
}