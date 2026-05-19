import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/SiteShell";
import { GraduationCap, BookOpen, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/vision-link-school")({
  head: () => ({
    meta: [
      { title: "Vision Link School — World Commission Church" },
      { name: "description", content: "Educating thousands of needy children in Soweto, Kayole and beyond — in right faith and academics." },
    ],
  }),
  component: SchoolPage,
});

function SchoolPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="A Ministry of WCC"
        title="Vision Link School"
        subtitle="Educating thousands of children in right faith, character and academic excellence."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1400&q=80"
            alt="Children studying"
            className="rounded-2xl shadow-elegant"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Who We Are</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
              A school for the overlooked, the chosen and the called.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Vision Link School exists to support needy students within and outside Soweto and Kayole —
              children whose stories deserve more than the streets could ever offer. We give them books,
              uniforms, meals, mentorship and most of all, the love of Christ.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: BookOpen, t: "Our Mission", d: "Educating thousands of children in right faith and academic excellence." },
              { icon: GraduationCap, t: "Our Programs", d: "Early years, primary and junior secondary — with mentorship and discipleship." },
              { icon: Heart, t: "Our Impact", d: "Generations of children rescued from poverty and placed on the path of destiny." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-primary">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-royal p-10 text-primary-foreground shadow-elegant lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Stand With a Child</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Your gift writes a future.</h2>
              <p className="mt-4 max-w-2xl text-white/85">
                For the cost of a coffee a day you can keep a child in class, in faith, and in the
                presence of a teacher who believes in them.
              </p>
            </div>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-accent-foreground shadow-gold transition hover:scale-105"
            >
              Support the School <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
