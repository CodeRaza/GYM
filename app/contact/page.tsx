import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { GoogleReviews } from "@/components/google-reviews";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: "Contact RI Fitness Club, share your training goals, and get exact directions to the gym in Lahore.",
};

const mapLink = "https://www.google.com/maps/place/RI+Fitness+Club/@31.6151074,74.269438,19z/data=!3m1!4b1!4m6!3m5!1s0x39191d78a35fd3b7:0xcce7869a867f51fe!8m2!3d31.6151074!4d74.2700831!16s%2Fg%2F11zfk4v03c?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D";

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <div>
            <span className="eyebrow">Contact RI Fitness</span>
            <h1>Let&apos;s build your<br /><span>stronger routine.</span></h1>
          </div>
          <p>Questions about training or ready to visit? Send your details and we&apos;ll help you take the next step.</p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container contact-grid">
          <ContactForm />
          <aside className="contact-details" aria-label="Contact details">
            <div className="details-heading"><span className="eyebrow">Direct contact</span><h2>Prefer to reach us yourself?</h2></div>
            <a className="detail-card" href="mailto:Naumanismail88@gmail.com">
              <span className="detail-icon"><Mail aria-hidden="true" /></span>
              <span><small>Email</small><strong>Naumanismail88@gmail.com</strong></span>
            </a>
            <a className="detail-card" href="tel:+923218806008">
              <span className="detail-icon"><Phone aria-hidden="true" /></span>
              <span><small>Phone</small><strong>+92 321 8806008</strong></span>
            </a>
            <a className="detail-card" href={mapLink} target="_blank" rel="noreferrer">
              <span className="detail-icon"><MapPin aria-hidden="true" /></span>
              <span><small>Exact location</small><strong>Open in Google Maps</strong></span>
            </a>
            <div className="detail-card no-link">
              <span className="detail-icon"><Clock3 aria-hidden="true" /></span>
              <span><small>Before you visit</small><strong>Email for today&apos;s timings</strong></span>
            </div>
            <div className="contact-coach-preview">
              <div className="contact-coach-avatar">
                <Image
                  src="/media/coach-nauman.webp"
                  alt="Coach Nauman Ismail"
                  fill
                  sizes="80px"
                />
              </div>
              <div className="contact-coach-text">
                <strong>Coach Nauman Ismail</strong>
                <p>Available on-site to walk you through the gym, discuss your goals, and set up your training plan.</p>
              </div>
            </div>
            <div className="contact-note">
              <strong>Your first visit, made easy.</strong>
              <p>Come see the gym, discuss your goal, and choose your next step without pressure.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="map-section" aria-labelledby="map-title">
        <div className="container map-heading">
          <div><span className="eyebrow">Find the club</span><h2 id="map-title">Your route to RI Fitness.</h2></div>
          <a className="button button-outline" href={mapLink} target="_blank" rel="noreferrer">Open exact location <MapPin size={18} aria-hidden="true" /></a>
        </div>
        <iframe
          title="RI Fitness Club location on Google Maps"
          src="https://maps.google.com/maps?q=RI%20Fitness%20Club%4031.6151074%2C74.2700831&z=19&hl=en&output=embed"
          width="100%"
          height="560"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      <GoogleReviews />
    </main>
  );
}
