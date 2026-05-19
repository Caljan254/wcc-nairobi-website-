import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell, PageHero } from "@/components/SiteShell";
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — World Commission Church" },
      { name: "description", content: "Get in touch with WCC headquarters in Soweto, Nairobi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <PageHero
        eyebrow="We'd love to hear from you"
        title="Contact Us"
        subtitle="Visit, call, write — or simply join us on a Sunday."
        image="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Reach Us</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Come, encounter Him with us.</h2>

            <div className="mt-10 space-y-6">
              {[
                { icon: MapPin, label: "Headquarters", value: "Soweto, Nairobi, Kenya" },
                { icon: Phone, label: "Apostle Olweny", value: "+254 725 494 561" },
                { icon: Mail, label: "Email", value: "info@wcckenya.org" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-royal text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">{label}</p>
                    <p className="mt-1 font-display text-xl text-primary">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Follow the Journey</p>
              <div className="mt-4 flex gap-3">
                {[Facebook, Youtube, Instagram].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social"
                     className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:bg-gradient-gold hover:text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
                <span className="self-center text-xs text-muted-foreground">Coming soon</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <h3 className="font-display text-2xl text-primary">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We respond within 1–2 business days.</p>
            <div className="mt-6 space-y-4">
              {[
                { id: "name", label: "Your name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "phone", label: "Phone (optional)", type: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{f.label}</label>
                  <input id={f.id} type={f.type} required={f.id !== "phone"} maxLength={120}
                         className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                </div>
              ))}
              <div>
                <label htmlFor="msg" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea id="msg" rows={5} required maxLength={1000}
                          className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
              <button type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-royal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02]">
                <Send className="h-4 w-4" /> {sent ? "Message sent — God bless you!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
            <iframe
              title="WCC Location"
              src="https://www.google.com/maps?q=Soweto,Nairobi,Kenya&output=embed"
              className="h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
