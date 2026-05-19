import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — World Commission Church" },
      { name: "description", content: "The story of Apostle Dr. Samuel Olweny and the leadership of WCC." },
    ],
  }),
  component: AboutPage,
});

const LEADERS = [
  {
    name: "Apostle Dr. Samuel Olweny",
    role: "Founder & Senior Pastor",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pamela Olweny",
    role: "Co-Founder · Women's Ministry",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bishop Samuel Tivu",
    role: "Bishop",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bishop Eli",
    role: "Bishop",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bishop Jonathan Tivu",
    role: "Bishop",
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Reverend Jackson Masila",
    role: "Reverend",
    img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=600&q=80",
  },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Story"
        title="From Soweto to the Nations"
        subtitle="A journey of faith, sacrifice and supernatural multiplication."
        image="https://images.unsplash.com/photo-1519750013411-a82854ce7b8b?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-4xl px-4 py-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Founder's Story</p>
        <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
          Apostle Dr. Samuel Olweny
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Apostle Dr. Samuel Olweny began with nothing but a whisper from heaven. Raised in the
            humble streets of Soweto, Nairobi, he carried a hunger for God that the world could not
            satisfy. In a season of surrender, he heard the unmistakable calling of the Lord — to
            gather a people, to build a sanctuary, and to raise giants for the Kingdom.
          </p>
          <p>
            What started as a small fellowship of believers has grown, by the grace of God, into
            <strong className="text-primary"> World Commission Church</strong> — a thriving family
            of worshippers reaching Nairobi, Western and Southern Kenya, and the nations beyond.
          </p>
          <p>
            His passion for the next generation birthed <strong className="text-primary">Vision
            Link School</strong>, where thousands of children — many from the most overlooked
            corners of Soweto and Kayole — have received both right faith and a quality
            education. Today, doctors, teachers and ministers walk the streets of Kenya as fruit
            of one man's obedience.
          </p>
          <p>
            Alongside his wife <strong className="text-primary">Pamela Olweny</strong>, the
            Apostle continues to disciple a generation that will not bow — a generation marked by
            holiness, purpose and the unstoppable commission of Christ.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Leadership</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">The Hands That Shepherd Us</h2>
            <p className="mt-4 text-muted-foreground">Servants of God carrying the apostolic mantle of WCC.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERS.map((l) => (
              <div key={l.name} className="group overflow-hidden rounded-2xl bg-card shadow-sm transition hover:shadow-elegant">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={l.img} alt={l.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-primary">{l.name}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-widest text-accent">{l.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Our Vision", "To raise a generation of Kingdom giants who transform Kenya and the nations."],
            ["Our Mission", "Preach Christ, disciple families, and educate children in faith and excellence."],
            ["Our Values", "Holiness · Family · Excellence · Compassion · The fear of the Lord."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-display text-2xl text-primary">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
