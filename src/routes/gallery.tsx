import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/SiteShell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — World Commission Church" },
      { name: "description", content: "Moments of worship, ministry and impact at WCC." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519750013411-a82854ce7b8b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1200&q=80",
];

function GalleryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Moments of Glory"
        title="Gallery"
        subtitle="Faces, worship and impact across the WCC family."
        image="https://images.unsplash.com/photo-1519750013411-a82854ce7b8b?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {IMAGES.map((src, i) => (
            <div key={i} className="mb-5 overflow-hidden rounded-2xl break-inside-avoid shadow-sm">
              <img src={src} alt="" loading="lazy" className="w-full transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
