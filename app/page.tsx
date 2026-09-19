import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { GoogleReviews } from "@/components/google-reviews";
import { CoachSection } from "@/components/coach-section";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Dumbbell,
  MapPin,
  MoveRight,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Strength equipment",
    text: "A practical training floor built for progressive strength, from first reps to heavier lifts.",
  },
  {
    icon: Target,
    title: "Goal-led coaching",
    text: "Clear guidance that keeps your form, routine, and effort moving in the right direction.",
  },
  {
    icon: Users,
    title: "Motivating community",
    text: "Train in an energetic space where consistency is respected and progress is celebrated.",
  },
];

const steps = [
  ["01", "Visit the club", "See the training floor, equipment, and environment for yourself."],
  ["02", "Share your goal", "Tell us what you want to improve and where you are starting."],
  ["03", "Start with purpose", "Follow a focused routine and build consistency one session at a time."],
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="status-pill"><span /> Now welcoming new members</div>
            <p className="hero-kicker">RI Fitness Club · Lahore</p>
            <h1>Train harder.<br /><span>Live stronger.</span></h1>
            <p className="hero-lead">A focused gym for people who want real strength, better fitness, and the discipline to keep progressing.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact#contact-form">Plan your first visit <ArrowRight size={19} aria-hidden="true" /></Link>
              <Link className="text-link" href="/equipment">Explore the gym <MoveRight size={20} aria-hidden="true" /></Link>
            </div>
            <div className="hero-proof" aria-label="Club highlights">
              <span><Check aria-hidden="true" /> Modern equipment</span>
              <span><Check aria-hidden="true" /> Expert guidance</span>
              <span><Check aria-hidden="true" /> All fitness levels</span>
            </div>
          </div>
          <div className="hero-visual">
            <HeroVideo />
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div>STRENGTH <span>◆</span> DISCIPLINE <span>◆</span> PROGRESS <span>◆</span> ENERGY</div>
        </div>
      </section>

      <GoogleReviews />

      <section className="section training" id="training">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Why train here</span><h2>Everything you need to<br />keep moving forward.</h2></div>
            <p>No confusing routines or intimidating atmosphere—just the equipment, guidance, and energy to make every session count.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className="benefit-card" key={title}>
                <div className="card-top"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="container experience-grid">
          <div className="reel-card reel-main">
            <video controls playsInline preload="none" poster="/media/gym-tour.webp">
              <source src="/media/gym-tour.mp4" type="video/mp4" />
            </video>
            <div className="reel-label"><Sparkles size={18} aria-hidden="true" /> Take a quick gym tour</div>
          </div>
          <div className="experience-copy">
            <span className="eyebrow">See the experience</span>
            <h2>Your workout deserves the right environment.</h2>
            <p>Walk into a clean, energetic training space with a full range of machines and room to stay focused on your goals.</p>
            <ul className="check-list">
              <li><BadgeCheck aria-hidden="true" />Purposeful equipment selection</li>
              <li><BadgeCheck aria-hidden="true" />Support for beginners and experienced lifters</li>
              <li><BadgeCheck aria-hidden="true" />A serious, positive training culture</li>
            </ul>
            <Link className="button button-outline" href="/contact">Visit RI Fitness <ArrowRight size={19} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <CoachSection />

      <section className="section process-section">
        <div className="container">
          <div className="section-heading center-heading"><span className="eyebrow">Start simple</span><h2>Your next chapter starts in three steps.</h2></div>
          <div className="steps-grid">
            {steps.map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div><span className="eyebrow dark-eyebrow">Ready when you are</span><h2>Make today your<br />day one.</h2></div>
          <div className="cta-side">
            <p>Visit RI Fitness Club, meet the coach, and find the right way to start.</p>
            <div className="cta-actions">
              <Link className="button button-dark" href="/contact#contact-form">Send an enquiry <ArrowRight size={19} aria-hidden="true" /></Link>
              <a className="map-link" href="https://www.google.com/maps/place/RI+Fitness+Club/@31.6151074,74.269438,19z/data=!3m1!4b1!4m6!3m5!1s0x39191d78a35fd3b7:0xcce7869a867f51fe!8m2!3d31.6151074!4d74.2700831!16s%2Fg%2F11zfk4v03c?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer"><MapPin size={19} aria-hidden="true" /> Get directions</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
