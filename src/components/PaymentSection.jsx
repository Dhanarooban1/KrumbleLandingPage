import { useState, useEffect, useRef } from "react";

const API_BASE = "http://localhost:3000";
const CONFIG = {
  CURRENCY:     "INR",
  PRODUCT_NAME: "WishFlow",
  PRODUCT_DESC: "Founder Access — Lifetime Pro",
  THEME_COLOR:  "#1DB954",
  ENDPOINT_CONFIG:         `${API_BASE}/config`,
  ENDPOINT_CREATE_ORDER:   `${API_BASE}/create-order`,
  ENDPOINT_VERIFY_PAYMENT: `${API_BASE}/verify-payment`,
};

const PERKS = [
  "Lifetime Pro — never pay again",
  "AI wish + digital gift for every occasion",
  "Day 1 launch access",
  "Direct say in features we build",
  "Your name on the Founders Wall",
  "Full refund if we don't ship in 90 days",
];

export default function PaymentSection() {
  const [name,        setName]        = useState("");
  const [email,       setEmail]       = useState("");
  const [loading,     setLoading]     = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [spots,       setSpots]       = useState(67);
  const [nameErr,     setNameErr]     = useState(false);
  const [emailErr,    setEmailErr]    = useState(false);
  const razorpayKey = useRef(null);

  /* ── Load Razorpay key on mount ── */
  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch(CONFIG.ENDPOINT_CONFIG);
        const data = await res.json();
        razorpayKey.current = data.razorpayKeyId;
      } catch {
        console.error("Could not load payment config.");
      }
    })();

    /* Scarcity counter */
    const id = setInterval(() => {
      setSpots((prev) => {
        if (prev > 52 && Math.random() < 0.25) return prev - 1;
        return prev;
      });
    }, 20000);
    return () => clearInterval(id);
  }, []);

  /* ── Helpers ── */
  function highlight(field) {
    if (field === "name")  { setNameErr(true);  setTimeout(() => setNameErr(false),  1800); }
    if (field === "email") { setEmailErr(true);  setTimeout(() => setEmailErr(false), 1800); }
  }

  async function createOrder() {
    const res = await fetch(CONFIG.ENDPOINT_CREATE_ORDER, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name, email }),
    });
    if (!res.ok) throw new Error(`Order creation failed: ${res.status}`);
    return res.json();
  }

  async function verifyPayment(response) {
    try {
      const res    = await fetch(CONFIG.ENDPOINT_VERIFY_PAYMENT, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id:   response.razorpay_order_id,
          razorpay_signature:  response.razorpay_signature,
          name,
          email,
        }),
      });
      const result = await res.json();
      if (result.verified) setShowOverlay(true);
      else alert("Verification failed. Contact support with ID: " + response.razorpay_payment_id);
    } catch {
      setShowOverlay(true); // webhook fallback
    }
  }

  async function pay() {
    const n = name.trim();
    const e = email.trim();
    if (!n)               { highlight("name");  return; }
    if (!e || !e.includes("@")) { highlight("email"); return; }
    if (!razorpayKey.current) {
      alert("Payment system is loading. Please try again in a moment.");
      return;
    }

    setLoading(true);
    try {
      const order = await createOrder();

      const options = {
        key:         razorpayKey.current,
        amount:      order.amount,
        currency:    order.currency,
        name:        CONFIG.PRODUCT_NAME,
        description: CONFIG.PRODUCT_DESC,
        order_id:    order.id,
        prefill:     { name: n, email: e },
        theme:       { color: CONFIG.THEME_COLOR },
        modal:       { ondismiss: () => setLoading(false) },
        handler:     (response) => verifyPayment(response),
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (r) => {
        alert("Payment failed: " + r.error.description);
        setLoading(false);
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  /* ── Render ── */
  return (
    <>
      <section
        id="pay"
        className="reveal bg-[linear-gradient(160deg,rgba(29,185,84,0.1)_0%,rgba(29,185,84,0.02)_100%)]
                   border-t border-[rgba(29,185,84,0.15)] border-b border-[rgba(29,185,84,0.15)]
                   py-20 px-6 text-center"
      >
        {/* Label */}
        <p className="text-[0.7rem] font-bold tracking-[2px] uppercase text-[#1DB954] mb-3">
          Pre-order · Limited
        </p>

        <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold tracking-[-1px] mb-3">
          Lock your Founder spot<br />before we launch.
        </h2>
        {/* Offer card */}
        <div className="offer-line bg-[#161616] border border-[rgba(29,185,84,0.3)]
                        rounded-[20px] p-11 max-w-[480px] mx-auto mb-5
                        relative overflow-hidden max-sm:p-8">

          <span className="inline-block bg-[#1DB954] text-black text-[0.65rem]
                           font-extrabold tracking-[1.5px] uppercase px-3 py-1
                           rounded-full mb-4">
            Founder Access
          </span>

          <div className="text-[3.4rem] font-black tracking-[-2px] leading-none mb-1">
            ₹100
          </div>
          <p className="text-[0.88rem] text-[#888] line-through mb-5">
            Regular price: ₹999/year
          </p>

          <ul className="list-none text-left max-w-[290px] mx-auto mb-7">
            {PERKS.map((p) => (
              <li key={p}
                  className="flex gap-2.5 items-start text-[0.85rem] text-[#bbbbbb]
                             py-[7px] border-b border-white/[0.07] last:border-0">
                <span className="text-[#1DB954] font-bold flex-shrink-0 mt-[1px]">✓</span>
                {p}
              </li>
            ))}
          </ul>

          {/* Form */}
          <div className="flex flex-col gap-2.5 max-w-[320px] mx-auto">
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
              className={`pay-input bg-white/5 border rounded-[10px] px-4 py-3.5
                         text-white text-[0.9rem] font-[inherit] w-full
                         placeholder:text-[#888] transition-colors duration-200
                         ${nameErr ? "border-[#ff6b6b]" : "border-white/10"}`}
            />
            <input
              type="email"
              placeholder="your@gmail.com"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              className={`pay-input bg-white/5 border rounded-[10px] px-4 py-3.5
                         text-white text-[0.9rem] font-[inherit] w-full
                         placeholder:text-[#888] transition-colors duration-200
                         ${emailErr ? "border-[#ff6b6b]" : "border-white/10"}`}
            />
            <button
              onClick={pay}
              disabled={loading}
              className="bg-[#1DB954] text-black border-none rounded-[10px] py-3.5
                         text-[0.95rem] font-extrabold cursor-pointer flex items-center
                         justify-center gap-1.5 transition-all duration-150
                         hover:bg-[#1ed760] hover:scale-[1.02]
                         disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
            >
              {loading ? "⏳ Preparing payment…" : "🔒 Pay ₹100 · Reserve My Spot"}
            </button>
            <p className="text-[0.72rem] text-[#888] mt-1">
              Razorpay · UPI / Card / NetBanking · Instant refund if we don't ship
            </p>
          </div>
        </div>

        <p className="text-[0.78rem] text-[#888] max-w-[380px] mx-auto leading-[1.65]">
          ⚡ Your ₹9 goes directly toward building WishFlow. This is an honest
          pre-order — not a subscription, not a trick. If we don't ship in 90 days,
          you get it all back.
        </p>
      </section>

      {/* ── Success Overlay ── */}
      {showOverlay && (
        <div className="fixed inset-0 z-[500] bg-black/[0.82] backdrop-blur-sm
                        flex items-center justify-center">
          <div className="animate-popIn bg-[#161616] border border-[rgba(29,185,84,0.3)]
                          rounded-[20px] p-[52px_36px] text-center max-w-[400px] w-[90%]">
            <div className="text-[3.5rem] mb-4">🎉</div>
            <h3 className="text-[1.5rem] font-extrabold tracking-[-0.5px] mb-2.5">
              You're a Founder!
            </h3>
            <p className="text-[0.88rem] text-[#888] leading-[1.7] mb-6">
              Payment confirmed. Check your inbox — you'll get launch updates, early
              access, and your Founder badge the day we ship.
            </p>
            <button
              onClick={() => setShowOverlay(false)}
              className="bg-[#1DB954] text-black border-none rounded-full px-8 py-3
                         text-[0.9rem] font-bold cursor-pointer
                         hover:bg-[#1ed760] transition-colors duration-150"
            >
              Let's go →
            </button>
          </div>
        </div>
      )}
    </>
  );
}