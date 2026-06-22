const painPoints = [
  "You forget birthdays and feel guilty for days",
  "Late wishes feel worse than no wish at all",
  "You rely on Facebook to remind you",
  "Important people feel unimportant to you",
  "Client relationships erode silently",
];

const solutions = [
  "Every date is saved once, remembered forever",
  "Wishes arrive right on time, every time",
  "AI crafts a message that actually sounds like you",
  "AI-generated digital gift shared with every wish",
  "People feel seen and valued by you",
  "Client bonds grow without any extra effort",
];

export default function PainVsSolution() {
  return (
    <div className="reveal px-6 pt-0 pb-20 max-w-[900px] mx-auto max-sm:pb-16">

      <p className="text-center text-[0.7rem] font-bold tracking-[2px] uppercase
                    text-[#1DB954] mb-3">
        Why it matters
      </p>
      <h2 className="text-center text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold
                     tracking-[-1px] mb-3">
        The problem we're solving
      </h2>
      <p className="text-center text-[#888] text-[0.95rem] max-w-[420px] mx-auto mb-10">
        Missing a birthday isn't just awkward — it's a slow leak in your closest relationships.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-[760px] mx-auto max-sm:grid-cols-1">

        {/* Pain column */}
        <div className="bg-[#161616] border border-[rgba(255,80,80,0.15)] rounded-[14px] p-7">
          <div className="text-[0.68rem] font-bold tracking-[1.5px] uppercase
                          text-[#ff6b6b] mb-4">
            Without WishFlow
          </div>
          <ul className="list-none flex flex-col gap-2.5">
            {painPoints.map((p) => (
              <li key={p} className="flex gap-2.5 items-start text-[0.85rem] text-[#bbbbbb]">
                <span className="text-[#ff6b6b] flex-shrink-0 mt-[1px]">✗</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution column */}
        <div className="bg-[#161616] border border-[rgba(29,185,84,0.2)] rounded-[14px] p-7">
          <div className="text-[0.68rem] font-bold tracking-[1.5px] uppercase
                          text-[#1DB954] mb-4">
            With WishFlow
          </div>
          <ul className="list-none flex flex-col gap-2.5">
            {solutions.map((s) => (
              <li key={s} className="flex gap-2.5 items-start text-[0.85rem] text-[#bbbbbb]">
                <span className="text-[#1DB954] flex-shrink-0 mt-[1px]">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}