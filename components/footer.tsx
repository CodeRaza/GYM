import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/media/ri-fitness-logo-transparent.webp" alt="RI Fitness Club" width={900} height={279} />
          <p>Build strength. Build discipline. Build the version of yourself you came here for.</p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <Link href="/#training">Training</Link>
            <Link href="/#experience">The Gym</Link>
            <Link href="/#coach">Coach</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Visit RI Fitness</p>
          <div className="footer-links">
            <a href="tel:+923218806008"><Phone size={17} aria-hidden="true" /> +92 321 8806008</a>
            <a href="mailto:Naumanismail88@gmail.com"><Mail size={17} aria-hidden="true" /> Naumanismail88@gmail.com</a>
            <a href="https://www.google.com/maps/place/RI+Fitness+Club/@31.6151074,74.269438,19z/data=!3m1!4b1!4m6!3m5!1s0x39191d78a35fd3b7:0xcce7869a867f51fe!8m2!3d31.6151074!4d74.2700831!16s%2Fg%2F11zfk4v03c?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer"><MapPin size={17} aria-hidden="true" /> Open exact location</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} RI Fitness Club</span>
        <a className="footer-credit" href="https://www.atomixweb.com/" target="_blank" rel="noreferrer">Built by AtomixWeb</a>
        <span>Stronger every day.</span>
      </div>
    </footer>
  );
}
