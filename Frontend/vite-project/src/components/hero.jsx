import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const submitForm = async (e) => {
  e.preventDefault();
  const newErrors = {};
  Object.keys(form).forEach((key) => {
    if (!form[key]) newErrors[key] = true;
  });
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }
  setLoading(true);
  try {
    const response = await fetch("http://localhost:5000/saveuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json();

    if (!response.ok) {
      alert(data?.error || "Something went wrong");
    } else {
      alert("You're on the list! Welcome to WishFlow 🎉");
      setOpen(false);
      document.getElementById("pay")?.scrollIntoView({ behavior: "smooth" });
    }
  } catch {
    alert("Something went wrong");
  }
  setLoading(false);
};

  const inputBase =
    "w-full bg-[#111111] border text-white rounded-xl px-5 py-4 text-[14px] outline-none transition-colors duration-150 placeholder:text-[#3a3a3a] focus:border-[#1DB954]";

  const inputClass = (field) =>
    `${inputBase} ${errors[field] ? "border-[#e22134]" : "border-white/[0.08]"}`;

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
        style={{ background: "#0a0a0a" }}
      >
        {/* Badge */}
        <div className="flex items-center gap-2 border border-[#1DB954]/60 text-[#1DB954] text-[10px] font-bold tracking-[1.8px] uppercase px-4 py-[7px] rounded-full mb-10">
          <span className="w-[6px] h-[6px] rounded-full bg-[#1DB954] animate-pulse inline-block" />
          Launching Soon · 100 Founder Spots Only
        </div>

        {/* Headline */}
        <h1
          className="font-black text-white leading-[1.02] tracking-[-2.5px] mb-6"
          style={{ fontSize: "clamp(3.2rem, 9vw, 5.8rem)" }}
        >
          Never forget to
          <br />
          wish someone{" "}
          <span className="text-[#1DB954]">again.</span>
        </h1>

        {/* Sub-copy */}
        <p
          className="text-[#888] max-w-[400px] leading-[1.8] mb-1"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 0.975rem)" }}
        >
          WishFlow saves your loved ones — birthdays, anniversaries,
          or any special day. We'll send it automatically via WhatsApp.
        </p>
        <p
          className="text-white font-bold max-w-[400px] leading-[1.8] mb-10"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 0.975rem)" }}
        >
          Plus AI-generated digital gifts included with every wish.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#1DB954] text-black font-black rounded-full px-10 py-[15px] text-[14.5px] tracking-[-0.2px] transition-all duration-150 hover:bg-[#1ed760] hover:scale-[1.03] active:scale-[0.98]"
            style={{ boxShadow: "0 0 48px rgba(29,185,84,0.22)" }}
          >
            One Good Decision Today
          </button>
          <span className="text-[#444] text-[11px] tracking-wide">Razorpay secured</span>
        </div>
      </section>

      {/* ── MODAL ── */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80"
            style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
            onClick={() => setOpen(false)}
          />

          {/* Card */}
          <div
            className="relative w-full max-w-[420px] rounded-2xl p-8 z-10"
            style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.07)",
              animation: "popIn 0.24s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-[#555] hover:text-white hover:bg-white/10 transition-all text-[13px]"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
                style={{ background: "rgba(29,185,84,0.12)", border: "1px solid rgba(29,185,84,0.2)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-white text-[21px] font-black text-center tracking-[-0.5px] mb-1">
              Join WishFlow
            </h2>
            <p className="text-[#555] text-[13px] text-center mb-7">
              Enter your details to continue
            </p>

            {/* Form */}
            <form onSubmit={submitForm} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass("phone")}
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={form.age}
                  onChange={handleChange}
                  className={inputClass("age").replace("w-full ", "")}
                />
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className={`${inputClass("gender").replace("w-full ", "")} bg-[#111111]`}
                >
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-[#333] text-[10px] tracking-[1.5px] uppercase">
                  secure checkout
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1DB954] text-black font-black py-[15px] rounded-full text-[14px] tracking-[0.2px] transition-all duration-150 hover:bg-[#1ed760] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
              >
                {loading ? "Please wait…" : "Save"}
              </button>

              <p className="text-center text-[11px] text-[#3a3a3a] flex items-center justify-center gap-1 mt-1">
                🔒 Secure · No Spam · Razorpay Protected
              </p>
            </form>
          </div>

          <style>{`
            @keyframes popIn {
              from { transform: scale(0.86) translateY(12px); opacity: 0; }
              to   { transform: scale(1)    translateY(0);    opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </>
  );
}