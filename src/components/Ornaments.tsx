export function GrapeCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3 C 20 4, 34 9, 46 20 S 62 40, 66 52" />
      <path d="M3 3 C 4 20, 9 34, 20 46 S 40 62, 52 66" />
      <path d="M18 6 c 6 -4 13 -2 15 4 c -3 -1 -5 1 -5 4 c -3 -2 -6 0 -7 3 c -1 -5 -4 -7 -3 -11Z" />
      <path d="M22 8 l 4 6 M26 7 l 1 5" strokeWidth=".7" />
      <path d="M6 18 c -4 6 -2 13 4 15 c -1 -3 1 -5 4 -5 c -2 -3 0 -6 3 -7 c -5 -1 -7 -4 -11 -3Z" />
      <path d="M36 13 c 4 -3 9 -2 10 2 M40 11 c 2 -4 6 -5 8 -3" strokeWidth=".8" />
      <path d="M13 36 c -3 4 -2 9 2 10 M11 40 c -4 2 -5 6 -3 8" strokeWidth=".8" />
      <path d="M30 30 q 4 4 8 6" strokeWidth=".8" />
      {[[40,40],[46,43],[43,48],[50,49],[46,54],[52,56],[48,61]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.8" strokeWidth=".9" />
      ))}
      <path d="M34 34 q 3 2 6 6" strokeWidth=".8" />
    </svg>
  );
}
export function SignatureFrame() {
  const c = "pointer-events-none absolute z-10 h-16 w-16 text-accent opacity-50 md:h-20 md:w-20";
  return (<>
    <GrapeCorner className={`${c} top-1.5 right-1.5 -scale-x-100`} />
    <GrapeCorner className={`${c} top-1.5 left-1.5`} />
    <GrapeCorner className={`${c} bottom-1.5 right-1.5 hidden -scale-100 md:block`} />
    <GrapeCorner className={`${c} bottom-1.5 left-1.5 hidden -scale-y-100 md:block`} />
  </>);
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
