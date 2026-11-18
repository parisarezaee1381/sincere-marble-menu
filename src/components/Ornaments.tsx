export function FiligreeCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4 H 70 M4 4 V 70" strokeWidth=".6" />
      <path d="M8 8 H 46 M8 8 V 46" strokeWidth=".6" />
      <path d="M8 8 C 22 10, 30 18, 30 30 C 30 38, 22 40, 19 34 C 16 28, 24 24, 26 30" />
      <path d="M30 30 C 42 30, 50 22, 56 14 C 60 9, 66 9, 68 13 C 70 18, 64 21, 61 17" />
      <path d="M30 30 C 30 42, 22 50, 14 56 C 9 60, 9 66, 13 68 C 18 70, 21 64, 17 61" />
      <path d="M56 14 C 64 18, 74 16, 82 10" strokeWidth=".8" />
      <path d="M14 56 C 18 64, 16 74, 10 82" strokeWidth=".8" />
      <path d="M38 22 c 3 -5 9 -6 12 -3 M22 38 c -5 3 -6 9 -3 12" strokeWidth=".8" />
      <path d="M36 36 c 6 0 10 4 10 10 c -6 0 -10 -4 -10 -10Z" strokeWidth=".9" />
      <g strokeWidth=".8">
        <circle cx="16" cy="16" r="2.2" />
        <path d="M16 11.5 v-1.8 M16 20.5 v1.8 M11.5 16 h-1.8 M20.5 16 h1.8" />
        <circle cx="84" cy="9" r="1.5" /><circle cx="9" cy="84" r="1.5" />
        <circle cx="46" cy="46" r="1" fill="currentColor" />
      </g>
    </svg>
  );
}
export function SignatureFrame() {
  const c = "pointer-events-none absolute z-10 h-12 w-12 text-accent opacity-55 md:h-20 md:w-20";
  return (<>
    <FiligreeCorner className={`${c} top-1 right-1 -scale-x-100`} />
    <FiligreeCorner className={`${c} top-1 left-1`} />
    <FiligreeCorner className={`${c} bottom-1 right-1 -scale-100`} />
    <FiligreeCorner className={`${c} bottom-1 left-1 -scale-y-100`} />
  </>);
}
export function Crest({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 64" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M52 8 l4 -5 4 4 4 -4 4 5 -2 3 h-12Z" strokeWidth=".9" />
      <path d="M60 14 C 72 14, 78 22, 78 32 C 78 44, 70 52, 60 58 C 50 52, 42 44, 42 32 C 42 22, 48 14, 60 14Z" />
      <path d="M60 18 C 69 18, 74 24, 74 32 C 74 42, 68 48, 60 53 C 52 48, 46 42, 46 32 C 46 24, 51 18, 60 18Z" strokeWidth=".6" />
      <text x="60" y="40" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="20" fontWeight="300" fill="currentColor" stroke="none">S</text>
      {[0,1].map((m)=>(
        <g key={m} transform={m ? "translate(120 0) scale(-1 1)" : undefined}>
          <path d="M40 50 C 30 46, 22 36, 22 22" />
          <path d="M37 47 c -6 0 -9 -3 -9 -7 c 5 0 8 3 9 7Z M32 41 c -6 -1 -8 -5 -7 -9 c 5 1 7 5 7 9Z M28 33 c -5 -2 -6 -6 -4 -10 c 4 2 5 6 4 10Z M24 24 c -3 -3 -3 -7 0 -10 c 3 3 2 7 0 10Z" strokeWidth=".8" />
          <path d="M42 54 C 32 58, 20 58, 10 52 C 6 50, 6 46, 10 46 C 13 46, 13 50, 10 50" strokeWidth=".8" />
        </g>
      ))}
      <circle cx="60" cy="61" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function Divider() {
  return (
    <svg viewBox="0 0 240 16" className="w-48 text-accent opacity-70" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <path d="M4 8 H 100 M140 8 H 236" strokeWidth=".7" />
      <path d="M120 2 l 6 6 -6 6 -6 -6Z" />
      <circle cx="106" cy="8" r="1.6" /><circle cx="134" cy="8" r="1.6" />
    </svg>
  );
}
export function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center text-secondary-foreground">
      <svg viewBox="0 0 200 20" className="w-40 text-accent" fill="none" stroke="currentColor" strokeWidth="1"><path d="M2 10 C 50 -4, 150 24, 198 10" /></svg>
      <p className="font-light tracking-wide">مِته هنوز جامی برای این بخش پر نکرده</p>
    </div>
  );
}
