import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell, PageHero } from "@/components/SiteShell";
import { Smartphone, Landmark, CreditCard, Heart, Copy, Check } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — World Commission Church" },
      { name: "description", content: "Partner with WCC. Support church construction and Vision Link School via M-Pesa, bank or card." },
    ],
  }),
  component: DonatePage,
});

const AMOUNTS = [500, 1000, 2500, 5000, 10000];

function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground hover:text-primary"
    >
      {copied ? <Check className="h-3 w-3 text-accent" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function DonatePage() {
  const [method, setMethod] = useState<"mpesa" | "bank" | "card">("mpesa");
  const [purpose, setPurpose] = useState("Church Construction");
  const [amount, setAmount] = useState<number | "">(1000);
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Partner With the Vision"
        title="Give to the Work of God"
        subtitle="Your generosity raises sanctuaries and educates a generation through Vision Link School."
        image="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-6xl px-4 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Sidebar */}
          <aside className="space-y-4">
            <h2 className="font-display text-3xl text-primary">Choose a method</h2>
            {[
              { id: "mpesa", icon: Smartphone, label: "M-Pesa", sub: "Till / Buy Goods" },
              { id: "bank", icon: Landmark, label: "Bank Transfer", sub: "Equity · KCB" },
              { id: "card", icon: CreditCard, label: "Card", sub: "Visa · Mastercard · PayPal" },
            ].map((m) => {
              const active = method === m.id;
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id as typeof method)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                    active ? "border-accent bg-gradient-royal text-primary-foreground shadow-elegant" : "border-border bg-card hover:border-accent"
                  }`}
                >
                  <div className={`grid h-12 w-12 place-items-center rounded-xl ${active ? "bg-gradient-gold text-accent-foreground" : "bg-secondary text-primary"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg">{m.label}</p>
                    <p className={`text-xs ${active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{m.sub}</p>
                  </div>
                </button>
              );
            })}
          </aside>

          {/* Main */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:p-10">
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-accent">Purpose of Giving</label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {["Church Construction", "Vision Link School Support"].map((p) => (
                    <button
                      type="button" key={p} onClick={() => setPurpose(p)}
                      className={`rounded-xl border p-4 text-left text-sm font-medium transition ${
                        purpose === p ? "border-accent bg-secondary text-primary" : "border-border hover:border-accent"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label className="text-xs font-semibold uppercase tracking-widest text-accent">Amount (KES)</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {AMOUNTS.map((a) => (
                    <button type="button" key={a} onClick={() => setAmount(a)}
                            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                              amount === a ? "border-accent bg-gradient-gold text-accent-foreground" : "border-border text-muted-foreground hover:border-accent"
                            }`}>
                      {a.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number" min={1} max={10000000} value={amount}
                  onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Or enter a custom amount"
                  className="mt-4 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div className="mt-8 rounded-2xl bg-secondary/60 p-6">
                {method === "mpesa" && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">M-Pesa · Buy Goods</p>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div><p className="text-xs text-muted-foreground">Till Number</p><p className="font-display text-3xl text-primary">0725494561</p></div>
                      <CopyBtn value="0725494561" />
                    </div>
                    <ol className="ml-5 list-decimal text-sm text-muted-foreground">
                      <li>Go to M-Pesa → Lipa na M-Pesa → Buy Goods</li>
                      <li>Enter Till Number <strong>0725494561</strong></li>
                      <li>Enter amount, then your PIN. Save the confirmation message.</li>
                    </ol>
                  </div>
                )}
                {method === "bank" && (
                  <div className="space-y-4 text-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">Bank Transfer</p>
                    {[
                      { bank: "Equity Bank", acc: "0123456789012", branch: "Soweto Branch" },
                      { bank: "KCB Bank", acc: "1122334455", branch: "Kayole Branch" },
                    ].map((b) => (
                      <div key={b.bank} className="rounded-xl bg-card p-4">
                        <p className="font-display text-lg text-primary">{b.bank}</p>
                        <p className="text-xs text-muted-foreground">A/c Name: World Commission Church · {b.branch}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="font-mono text-sm">{b.acc}</p>
                          <CopyBtn value={b.acc} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {method === "card" && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">Card · Stripe / PayPal</p>
                    <p className="text-sm text-muted-foreground">
                      Secure card processing via Stripe and PayPal will appear here. (Integration placeholder.)
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input placeholder="Card number" maxLength={19} className="rounded-lg border border-input bg-background px-4 py-3 text-sm" />
                      <div className="grid grid-cols-2 gap-3">
                        <input placeholder="MM/YY" maxLength={5} className="rounded-lg border border-input bg-background px-4 py-3 text-sm" />
                        <input placeholder="CVC" maxLength={4} className="rounded-lg border border-input bg-background px-4 py-3 text-sm" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button type="submit"
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-royal px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02]">
                <Heart className="h-4 w-4 text-gold" />
                {submitted ? "Thank you for your gift — God richly bless you!" : `Confirm Gift · ${purpose}`}
              </button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                "Each of you should give what you have decided in your heart to give." — 2 Corinthians 9:7
              </p>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
