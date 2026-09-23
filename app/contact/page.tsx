import type { Metadata } from "next";
import Image from "next/image";
import { GoogleReviews } from "@/components/google-reviews";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: "Connect with Coach Nauman Ismail at RI Fitness Club Lahore. Get direct contact details and exact location.",
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
          <p>Questions about training or ready to visit? Reach out directly to Coach Nauman or visit the club in Lahore.</p>
        </div>
      </section>

      <section className="section contact-content" id="contact-form">
        <div className="container contact-grid">
          {/* Owner Showcase Card replacing Form */}
          <div className="contact-owner-card">
            <div className="contact-owner-media">
              <Image
                src="/media/coach-nauman.webp"
                alt="Coach Nauman Ismail - Owner & Head Trainer at RI Fitness Club"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 55vw"
                className="contact-owner-image"
              />
              <div className="contact-owner-badge">
                <span>Owner & Head Coach</span>
              </div>
              <div className="contact-owner-overlay" />
            </div>

            <div className="contact-owner-body">
              <p className="contact-owner-tag">Meet the Founder</p>
              <h2>Coach Nauman Ismail</h2>
              <p className="contact-owner-creds">
                President LDAA · Gold Medalist · MSc Mathematics · Certified Fitness Trainer
              </p>
              <p className="contact-owner-desc">
                Available on-site daily to walk you through the gym floor, discuss your fitness ambitions, and personally tailor your strength and workout routine.
              </p>
              <div className="contact-owner-actions">
                <a
                  href="https://wa.me/923218806008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
                <a href="tel:+923218806008" className="button button-outline">
                  <Phone size={18} aria-hidden="true" />
                  Call Directly
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details Aside */}
          <aside className="contact-details" aria-label="Contact details">
            <div className="details-heading">
              <span className="eyebrow">Direct contact</span>
              <h2>Prefer to reach us yourself?</h2>
            </div>
            <a className="detail-card" href="mailto:Naumanismail88@gmail.com">
              <span className="detail-icon"><Mail aria-hidden="true" /></span>
              <span><small>Email</small><strong>Naumanismail88@gmail.com</strong></span>
            </a>
            <a className="detail-card" href="tel:+923218806008">
              <span className="detail-icon"><Phone aria-hidden="true" /></span>
              <span><small>Phone / WhatsApp</small><strong>+92 321 8806008</strong></span>
            </a>
            <a className="detail-card" href={mapLink} target="_blank" rel="noreferrer">
              <span className="detail-icon"><MapPin aria-hidden="true" /></span>
              <span><small>Exact location</small><strong>Open in Google Maps</strong></span>
            </a>
            <div className="detail-card no-link">
              <span className="detail-icon"><Clock3 aria-hidden="true" /></span>
              <span><small>Before you visit</small><strong>Call or WhatsApp for today&apos;s timings</strong></span>
            </div>
            <div className="contact-note">
              <strong>Your first visit, made easy.</strong>
              <p>Come see the gym, discuss your goal with Coach Nauman, and start your fitness journey with confidence.</p>
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
