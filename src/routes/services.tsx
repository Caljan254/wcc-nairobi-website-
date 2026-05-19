import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/SiteShell";
import { Clock, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const SERVICES = [
  { day: "Wednesday", title: "Prayers", time: "5:00 PM - 7:00 PM", desc: "Midweek intercession and teaching." },
  { day: "Friday", title: "Kesha (Night Vigil)", time: "9:00 PM - 4:00 AM", desc: "A powerful night of prayer, worship, and deliverance." },
  { day: "Saturday", title: "Practices", time: "Flexible", desc: "Choir, worship team, and ministry practices." },
  { day: "Sunday", title: "First Service", time: "8:00 AM - 10:00 AM", desc: "Early morning worship and the Word." },
  { day: "Sunday", title: "Second Service", time: "10:00 AM - 1:00 PM", desc: "Main celebration service." },
];

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Join Us"
        title="Our Services"
        subtitle="Gather with us throughout the week as we seek the face of God."
        image="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-5xl px-4 py-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-accent transition">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-accent-foreground">
                <CalendarDays className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-primary">{s.day}</h3>
              <p className="mt-1 font-semibold text-accent">{s.title}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{s.time}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
