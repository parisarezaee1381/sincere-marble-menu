export function GrapeCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
      <path d="M4 4 C 24 6, 40 14, 52 30" />
      <path d="M22 7 C 26 14, 24 20, 18 22 C 22 16, 18 10, 22 7Z" />
      <path d="M38 14 q 6 -6 12 -2" />
      <circle cx="46" cy="36" r="4" /><circle cx="54" cy="38" r="4" /><circle cx="50" cy="45" r="4" />
      <circle cx="42" cy="44" r="4" /><circle cx="47" cy="53" r="4" /><circle cx="44" cy="61" r="3.5" />
      <path d="M8 4 C 6 20, 10 34, 6 48" opacity=".7" />
      <path d="M6 30 q 6 2 8 8" opacity=".7" />
    </svg>
  );
}
export function SignatureFrame() {
  const c = "pointer-events-none absolute h-14 w-14 text-accent opacity-45 md:h-16 md:w-16";
  return (<>
    <GrapeCorner className={`${c} top-1 right-1 -scale-x-100`} />
    <GrapeCorner className={`${c} top-1 left-1`} />
    <GrapeCorner className={`${c} bottom-1 right-1 hidden -scale-100 md:block`} />
    <GrapeCorner className={`${c} bottom-1 left-1 hidden -scale-y-100 md:block`} />
  </>);
}
export function WineDrop() {
  return (
    <svg viewBox="0 0 60 80" className="h-20 w-16 text-accent" fill="none" stroke="currentColor" strokeWidth="1.2" aria-label="در حال بارگذاری">
      <path d="M14 40 h32 c0 14 -7 22 -16 22 s-16 -8 -16 -22Z" />
      <path d="M30 62 v12 M20 74 h20" />
      <path className="wine-fill" d="M17 48 h26 c-2 8 -7 12 -13 12 s-11 -4 -13 -12Z" fill="currentColor" stroke="none" opacity=".35" />
      <path className="wine-drop" d="M30 6 c3 5 5 8 5 11 a5 5 0 0 1 -10 0 c0 -3 2 -6 5 -11Z" fill="currentColor" stroke="none" />
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
