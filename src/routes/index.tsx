import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { ArrowRight, BookOpen, Calendar, Church, GraduationCap, HandHeart, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "World Commission Church — Raising Giants for the Kingdom" },
      { name: "description", content: "World Commission Church (WCC), Soweto, Nairobi. Led by Apostle Dr. Samuel Olweny. Worship, ministry and education through Vision Link School." },
      { property: "og:title", content: "World Commission Church (WCC) — Nairobi, Kenya" },
      { property: "og:description", content: "A Christ-centered family raising giants for the Kingdom across Kenya and the nations." },
    ],
  }),
  component: HomePage,
});

const HERO = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=2000&q=80";
const WORSHIP = "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1400&q=80";
const KIDS = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80";

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="Worship" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 text-primary-foreground lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold">World Commission Church · Est. Nairobi</p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Welcome to <span className="text-gradient-gold">World Commission Church</span> — Raising Giants for the Kingdom.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            A house of faith, family and fire — headquartered in Soweto, Nairobi, reaching Kenya,
            the South, the West and the nations beyond.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold transition hover:scale-105">
              Discover Our Story <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              <HandHeart className="h-4 w-4" /> Partner With Us
            </Link>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["20+", "Years of Ministry"],
              ["1,000s", "Children Educated"],
              ["6", "Active Ministries"],
              ["2", "Annual Conferences"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-gold">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">A Word From the House</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
              A sanctuary where heaven meets the streets of Soweto.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Under the apostolic covering of <strong className="text-primary">Apostle Dr. Samuel Olweny</strong>,
              World Commission Church has grown from a humble gathering into a movement that disciples
              families, equips leaders and educates a generation through Vision Link School.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We believe every soul who walks through our doors is a giant waiting to be unveiled —
              for the Kingdom, for Kenya, and for the nations.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
              Meet our leadership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={WORSHIP} alt="Worship gathering" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-gradient-gold p-6 shadow-gold sm:block">
              <Sparkles className="h-6 w-6 text-accent-foreground" />
              <p className="mt-2 max-w-[200px] font-display text-lg text-accent-foreground">
                "Raising Giants for the Kingdom."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Pillars</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Four altars. One commission.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Church, title: "Worship", text: "Spirit-led services that magnify the name of Jesus." },
              { icon: Users, title: "Family", text: "Ministries for every age, generation and calling." },
              { icon: GraduationCap, title: "Education", text: "Vision Link School equips children with faith and knowledge." },
              { icon: BookOpen, title: "Mission", text: "Reaching Nairobi, Kenya, and the nations beyond." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-royal text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION LINK CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-3xl bg-gradient-royal p-8 text-primary-foreground shadow-elegant lg:grid-cols-2 lg:p-14">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Vision Link School</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">A child educated is a destiny rewritten.</h2>
            <p className="mt-5 max-w-xl text-white/85">
              Thousands of children from Soweto, Kayole and beyond now read, write and worship
              because someone said yes. Stand with us as we raise the next generation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/vision-link-school" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-accent-foreground shadow-gold transition hover:scale-105">
                Visit the School <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                <HandHeart className="h-4 w-4" /> Sponsor a Child
              </Link>
            </div>
          </div>
          <img src={KIDS} alt="Children at Vision Link School" className="h-72 w-full rounded-2xl object-cover lg:h-full" />
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Mark Your Calendar</p>
              <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Encounter God with us.</h2>
            </div>
            <Link to="/conferences" className="text-sm font-semibold text-primary hover:text-accent">
              All conferences →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { month: "August", title: "Annual General Conference", place: "WCC Headquarters · Soweto, Nairobi" },
              { month: "April", title: "April Conference", place: "Mwangala" },
            ].map((e) => (
              <div key={e.title} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-gold text-accent-foreground">
                  <Calendar className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{e.month} · Annually</p>
                  <h3 className="mt-1 font-display text-2xl text-primary">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
