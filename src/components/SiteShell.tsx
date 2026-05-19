import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: {
  eyebrow?: string; title: string; subtitle?: string; image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center text-primary-foreground lg:px-8 lg:py-24">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
