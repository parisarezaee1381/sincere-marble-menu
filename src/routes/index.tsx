import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { categories, faNum, type MenuItem } from "@/data/menu";
import { Divider, EmptyState, SignatureFrame } from "@/components/Ornaments";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "منوی رستوران سینسیر | ضیافت لوکس" },
      { name: "description", content: "منوی دیجیتال رستوران سینسیر، الهیه، برج افرا — صبحانه، غذای ایرانی و بین‌المللی، دسر و نوشیدنی." },
      { property: "og:title", content: "منوی رستوران سینسیر" },
      { property: "og:description", content: "ضیافتی آرام زیر نور شمع؛ منوی دیجیتال رستوران سینسیر در تهران." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Card({ item }: { item: MenuItem }) {
  return (
    <article className={`group relative overflow-hidden rounded-sm marble p-5 md:p-6 transition-colors duration-500 md:hover:bg-card-hover">
      {item.signature && <SignatureFrame />}
      <div className="relative bg-background/70 px-3 pt-3 pb-7 ring-1 ring-accent/25 shadow-[inset_0_0_20px_oklch(0_0_0/0.5)]">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={item.img} alt={item.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-[1.03]" />
        </div>
      </div>
      <div className="relative mt-5 space-y-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-normal text-foreground">{item.name}{item.signature && <span className="mr-2 text-xs font-light tracking-[0.2em] text-accent">ویژه</span>}</h3>
          <span className="price shrink-0 font-bold text-accent">{faNum(item.price / 1000)} <span className="text-xs font-normal">هزار تومان</span></span>
        </div>
        <p className="text-sm leading-7 text-secondary-foreground">{item.desc}</p>
        {item.badges && <div className="flex gap-2 pt-1">{item.badges.map((b) => <span key={b} className="rounded-full border border-secondary-foreground/40 px-2.5 py-0.5 text-[11px] text-secondary-foreground">{b}</span>)}</div>}
      </div>
    </article>
  );
}

function Index() {
  const loading = false;
  const [active, setActive] = useState("breakfast");
  const [veg, setVeg] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) return;
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    categories.forEach((c) => { const el = document.getElementById(c.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [loading]);
  useEffect(() => { tabsRef.current?.querySelector(`[data-id="${active}"]`)?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" }); }, [active]);

  return (
    <div dir="rtl" className="candle min-h-screen font-sans">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="pt-4 pb-2 text-center">
          <div className="font-display text-2xl font-light tracking-[0.55em] [text-shadow:0_0_18px_oklch(0.8_0.08_75/0.25)] text-foreground">SINCERE</div>
          <div className="mt-1 text-[11px] font-light tracking-[0.4em] text-secondary-foreground">رستوران سینسیر</div>
        </div>
        <nav ref={tabsRef} className="no-scrollbar flex gap-6 overflow-x-auto px-5 md:justify-center">
          {categories.map((c) => (
            <a key={c.id} data-id={c.id} href={`#${c.id}`} className={`shrink-0 border-b py-3 text-sm transition-colors ${active === c.id ? "border-accent text-foreground" : "border-transparent text-secondary-foreground hover:text-foreground"}`}>{c.title}</a>
          ))}
        </nav>
      </header>

      <main className="fade-in mx-auto max-w-6xl px-5 py-8">
        <div className="mb-6 flex justify-end">
          <button onClick={() => setVeg(!veg)} className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${veg ? "border-accent text-accent" : "border-border text-secondary-foreground"}`}>فقط وجترین</button>
        </div>
        {categories.map((c) => {
          const items = veg ? c.items.filter((i) => i.badges?.includes("وجترین")) : c.items;
          return (
            <section key={c.id} id={c.id} className="scroll-mt-32 py-14">
              <div className="mb-12 flex flex-col items-center gap-4"><h2 className="inscription text-center text-2xl md:text-3xl text-foreground">{c.title}</h2><Divider /></div>
              {items.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((i) => <Card key={i.id} item={i} />)}</div> : <EmptyState />}
            </section>
          );
        })}
      </main>

      <div className="border-t border-border px-5 py-4 text-xs text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <span>الهیه، برج افرا · <a href="tel:02122391706" className="hover:text-foreground">۲۲۳۹۱۷۰۶</a></span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-accent hover:text-foreground">بازگشت به بالا ↑</button>
        </div>
      </div>
    </div>
  );
}
