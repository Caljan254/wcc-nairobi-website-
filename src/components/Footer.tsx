import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-royal text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            Raising Giants for the Kingdom. A Christ-centered family headquartered in
            Soweto, Nairobi, reaching Kenya and the nations.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Youtube, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-gold-soft transition hover:bg-white/10">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-soft">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/ministries", "Ministries"],
              ["/vision-link-school", "Vision Link School"],
              ["/conferences", "Conferences"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-primary-foreground/80 transition hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-soft">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Soweto, Nairobi, Kenya</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +254 725 494 561</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> info@wcckenya.org</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-soft">Partner With Us</h4>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Your seed builds the sanctuary and educates a child at Vision Link School.
          </p>
          <Link
            to="/donate"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-gold transition hover:scale-105"
          >
            <Heart className="h-4 w-4" /> Give Today
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/70 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} World Commission Church. All rights reserved.</p>
          <p>Apostle Dr. Samuel Olweny · Senior Pastor</p>
        </div>
      </div>
    </footer>
  );
}
