import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/SiteShell";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/conferences")({
  head: () => ({
    meta: [
      { title: "Conferences & Events — World Commission Church" },
      { name: "description", content: "Annual General Conference (August) and April Conference at Mwangala." },
    ],
  }),
  component: ConferencesPage,
});

const EVENTS = [
  {
    month: "August",
    title: "Annual General Conference",
    place: "WCC Headquarters · Soweto, Nairobi",
    desc: "Our flagship gathering — a week of teaching, worship and impartation for the whole church family.",
    img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    month: "April",
    title: "April Conference",
    place: "Mwangala",
    desc: "A regional convergence of believers gathering at Mwangala for refreshing and revival.",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80",
  },
];

function ConferencesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Gather · Encounter · Send"
        title="Conferences & Events"
        subtitle="Sacred assemblies where heaven invades earth."
        image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Annual Conferences</p>
        <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Two seasons. One movement.</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {EVENTS.map((e) => (
            <article key={e.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={e.img} alt={e.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  <Calendar className="h-4 w-4" /> {e.month} · Annually
                </div>
                <h3 className="mt-3 font-display text-3xl text-primary">{e.title}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" /> {e.place}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Upcoming Events</p>
          <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">More gatherings coming soon</h2>
          <p className="mt-5 text-muted-foreground">
            Crusades, conventions and prayer meetings are added throughout the year. Subscribe by
            calling the church office or following us on social media to stay informed.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Crusades", "Prayer Vigils", "Mission Trips"].map((t) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-xl text-primary">{t}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
