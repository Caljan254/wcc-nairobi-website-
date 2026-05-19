import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/SiteShell";
import { Baby, Music, Users, Heart, Hand, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries — World Commission Church" },
      { name: "description", content: "Discover the ministries of WCC: Children, Choir, Youth, Women, Men and Ushering." },
    ],
  }),
  component: MinistriesPage,
});

const MINISTRIES = [
  { icon: Baby, title: "Children's Ministry", text: "Discipling little hearts with songs, scripture and joyful play." },
  { icon: Music, title: "Choir & Music Ministry", text: "Voices, instruments and sound engineers serving the throne of worship." },
  { icon: Sparkles, title: "Youth Ministry", text: "Equipping the next generation to stand bold for Christ in their world." },
  { icon: Heart, title: "Women's Ministry", text: "Led by Pamela Olweny — a sisterhood of prayer, dignity and purpose." },
  { icon: Users, title: "Men's Ministry", text: "Forging godly men, husbands and fathers after God's own heart." },
  { icon: Hand, title: "Ushering & Grounds", text: "The first smile, the safest space — hospitality that honors every guest." },
];

function MinistriesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Serve · Belong · Grow"
        title="Ministries at WCC"
        subtitle="Six altars where gifts meet calling and people meet Jesus."
        image="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MINISTRIES.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-accent hover:shadow-elegant">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-royal text-primary-foreground transition group-hover:bg-gradient-gold group-hover:text-accent-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-primary">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
