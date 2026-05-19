import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

const TikTokIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-gradient-royal text-primary-foreground">
      <div className="grid w-full gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            Raising Giants for the Kingdom. A Christ-centered family headquartered in
            Soweto, Nairobi, reaching Kenya and the nations.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-gold-soft transition hover:bg-white/10"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="youtube" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-gold-soft transition hover:bg-white/10"><Youtube className="h-4 w-4" /></a>
            <a href="#" aria-label="instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-gold-soft transition hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="tiktok" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-gold-soft transition hover:bg-white/10"><TikTokIcon className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-soft">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/ministries", "Ministries"],
              ["/services", "Services"],
              ["/insights", "Insights"],
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
        <div className="flex w-full flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-primary-foreground/70 sm:flex-row lg:px-8">
          <p className="w-full text-center sm:w-1/3 sm:text-left">
            © {new Date().getFullYear()} World Commission Church. All rights reserved.
          </p>
          <p className="w-full text-center text-[11px] uppercase tracking-widest text-white/50 sm:w-1/3">
            Developed by <a href="http://www.softskysolution.co.ke" target="_blank" rel="noopener noreferrer" className="text-gold-soft transition hover:text-gold">SoftSkySolution</a>
          </p>
          <p className="w-full text-center sm:w-1/3 sm:text-right">
            Apostle Dr. Samuel Olweny, Senior Pastor
          </p>
        </div>
      </div>
    </footer>
  );
}
