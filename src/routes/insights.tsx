import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/SiteShell";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
});

const INSIGHTS = [
  {
    title: "The Power of the Altar",
    excerpt: "When you raise an altar, you invite the presence of God to dwell. An active altar will always speak for you when words fail. It is a place of sacrifice, a place of covenant, and a place where earthly limitations are suspended by divine authority. Never underestimate the power of consistent, fervent prayer.",
    author: "Apostle Dr. Samuel Olweny",
  },
  {
    title: "Raising Giants in the Spirit",
    excerpt: "You are not called to be ordinary. Inside every believer is a giant waiting to be awakened by the breath of the Holy Spirit. We are raising a generation that will not bow to the pressures of this world, but will stand firm, grounded in the Word, ready to take territories for the Kingdom of God.",
    author: "Apostle Dr. Samuel Olweny",
  },
  {
    title: "The Discipline of Kesha",
    excerpt: "Night vigils are where destinies are rewritten. While men sleep, the watchmen of the spirit enforce the decrees of heaven. There is a unique spiritual transaction that occurs in the midnight hour when we choose to sacrifice our comfort to seek the face of the Lord in intense, unbroken fellowship.",
    author: "Bishop Samuel Tivu",
  },
  {
    title: "Faith That Builds Sanctuaries",
    excerpt: "It takes more than money to build the house of God, it takes sacrifice. God honors the seed of a willing heart. Every brick laid in the physical is a spiritual statement of our trust in His provision, ensuring that future generations have a place to encounter the living God.",
    author: "Pamela Olweny",
  },
  {
    title: "Educating a Generation",
    excerpt: "Knowledge without faith is empty. At Vision Link School, we are combining academic excellence with spiritual depth. By equipping young minds with both the fear of the Lord and quality education, we are literally reshaping the future of Soweto and raising leaders of absolute integrity.",
    author: "Bishop Eli",
  },
  {
    title: "The Commission is Now",
    excerpt: "We cannot wait for tomorrow to reach the nations. The harvest is ripe, and the laborers must rise with urgency and fire. The Great Commission is not a suggestion, it is a mandate. Let us carry the light of Christ into every dark corner, starting from our neighborhoods to the ends of the earth.",
    author: "Apostle Dr. Samuel Olweny",
  },
];

function InsightsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Wisdom & Revelation"
        title="Insights"
        subtitle="Powerful truths and teachings from the leadership of World Commission Church."
        image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((insight, i) => (
            <div key={i} className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:shadow-elegant">
              <div>
                <h3 className="font-display text-2xl text-primary transition-colors group-hover:text-gold">{insight.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{insight.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="h-8 w-8 rounded-full bg-gradient-royal" />
                <span className="text-sm font-semibold text-accent">{insight.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
