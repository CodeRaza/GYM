import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  Check,
  Flame,
  HelpCircle,
  LineChart,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Membership & Pricing | RI Fitness Club Lahore",
  description:
    "Total 155 seats only (110 Male, 45 Female). First 50 members get 100% Free Personal Training + Zero Admission Fee. Free mobile workout app for every member.",
};

const whatsappEarlyBirdUrl =
  "https://wa.me/923218806008?text=Hi%20Coach%20Nauman,%20I%20want%20to%20claim%20the%20Early%20Bird%20Offer%20(Free%20Personal%20Training%20%2B%20Admission)%20at%20RI%20Fitness%20Club.";

const whatsappGeneralUrl =
  "https://wa.me/923218806008?text=Hi%20Coach%20Nauman,%20I%20would%20like%20to%20inquire%20about%20joining%20RI%20Fitness%20Club.";

export default function MembershipPage() {
  return (
    <main id="main-content" className="membership-page">
      {/* 1. Hero Section with Capacity Counter */}
      <section className="membership-hero">
        <div className="container membership-hero-inner">
          <div className="membership-hero-copy">
            <div className="badge-tag pulse-glow">
              <Sparkles size={15} aria-hidden="true" />
              Limited Seats · 155 Members Only
            </div>
            <h1>
              Only 155 Members.<br />
              <span>No Rush. Best Training.</span>
            </h1>
            <p className="hero-subtitle">
              Total 155 seats only (110 Male, 45 Female) taakay gym me rash na ho aur equipment free milay.
              Proper space, clean gym, aur direct coaching.
            </p>
            <div className="hero-actions">
              <a
                href={whatsappEarlyBirdUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <MessageCircle size={19} aria-hidden="true" />
                Book on WhatsApp
              </a>
              <Link href="#pricing-table" className="text-link">
                See fees & plans <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Real-time Capacity Breakdown Card */}
          <div className="capacity-hero-card" aria-label="Gym Membership Capacity">
            <div className="capacity-header">
              <div>
                <p className="capacity-title">Total Member Capacity</p>
                <small style={{ color: "var(--muted)", fontSize: "0.8rem" }}>Strict Cap · Zero Overcrowding</small>
              </div>
              <span className="capacity-badge">155 Seats Total</span>
            </div>

            <div className="capacity-meter-wrap">
              <div className="capacity-label-row">
                <span>Total Gym Slots</span>
                <strong>155 Members Max</strong>
              </div>
              <div className="capacity-track" role="progressbar" aria-valuenow={155} aria-valuemin={0} aria-valuemax={155}>
                <div className="capacity-fill" style={{ width: "35%" }} />
              </div>
            </div>

            <div className="gender-split-grid">
              <div className="gender-box">
                <div className="gender-icon-wrap">
                  <Users size={18} aria-hidden="true" />
                </div>
                <strong>110</strong>
                <span>Male Seats</span>
              </div>
              <div className="gender-box">
                <div className="gender-icon-wrap" style={{ color: "var(--yellow)", background: "rgba(244, 211, 34, 0.12)" }}>
                  <Users size={18} aria-hidden="true" />
                </div>
                <strong>45</strong>
                <span>Female Seats</span>
              </div>
            </div>

            <p className="capacity-note">
              Separate schedules and dedicated slots for male and female members to ensure full comfort, privacy, and personal attention.
            </p>

            <a
              href={whatsappEarlyBirdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
              style={{ width: "100%" }}
            >
              Reserve Your Seat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Early Bird Launch Offer Spotlight */}
      <section className="early-bird-section" id="early-bird">
        <div className="container">
          <div className="early-bird-card">
            <div className="early-bird-top">
              <div className="early-bird-ribbon">
                <Flame size={18} aria-hidden="true" />
                Special Launch Offer
              </div>
              <div className="seats-counter-chip">
                <Zap size={16} aria-hidden="true" />
                First 50 Members Only
              </div>
            </div>

            <div className="early-bird-grid">
              <div className="early-bird-headline">
                <h2>
                  First 50 Members: <span>100% Free</span> Personal Training + Admission
                </h2>
                <p>
                  Pehle 50 members ko Coach Nauman ki 1 month Personal Training aur Admission Fee bilkul FREE milegi.
                  Aap ki total <strong>Rs. 11,000</strong> ki bachat hogi!
                </p>

                <div className="perk-chips-grid">
                  <div className="perk-chip">
                    <div className="perk-chip-icon">
                      <Trophy size={18} aria-hidden="true" />
                    </div>
                    <div className="perk-chip-text">
                      <strong>100% Free Personal Training</strong>
                      <span>Rs. 10,000/mo fee completely waived</span>
                    </div>
                  </div>

                  <div className="perk-chip">
                    <div className="perk-chip-icon">
                      <ShieldCheck size={18} aria-hidden="true" />
                    </div>
                    <div className="perk-chip-text">
                      <strong>Zero Admission Fee</strong>
                      <span>Rs. 1,000 joining fee permanently free</span>
                    </div>
                  </div>

                  <div className="perk-chip">
                    <div className="perk-chip-icon">
                      <Smartphone size={18} aria-hidden="true" />
                    </div>
                    <div className="perk-chip-text">
                      <strong>Free Fitness Mobile App</strong>
                      <span>Workout schedule & progress tracker on phone</span>
                    </div>
                  </div>

                  <div className="perk-chip">
                    <div className="perk-chip-icon">
                      <BadgeCheck size={18} aria-hidden="true" />
                    </div>
                    <div className="perk-chip-text">
                      <strong>Full Gym & Machines Access</strong>
                      <span>All strength gear, free weights & clean facilities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Calculation Box */}
              <div className="savings-box">
                <span className="savings-badge">Instant Saving</span>
                <div className="savings-amount">Rs. 11,000</div>
                <div className="savings-label">Total Launch Savings</div>

                <ul className="breakdown-list">
                  <li>
                    <span>Personal Training Fee</span>
                    <span>
                      <del>Rs. 10,000</del> <span className="free-tag">FREE</span>
                    </span>
                  </li>
                  <li>
                    <span>Admission Fee</span>
                    <span>
                      <del>Rs. 1,000</del> <span className="free-tag">FREE</span>
                    </span>
                  </li>
                  <li>
                    <span>Fitness Mobile App</span>
                    <span>
                      <del>Rs. 2,000</del> <span className="free-tag">FREE</span>
                    </span>
                  </li>
                  <li>
                    <strong>You Only Pay:</strong>
                    <strong style={{ color: "var(--green-bright)", fontSize: "1.15rem" }}>Rs. 3,500 / month</strong>
                  </li>
                </ul>

                <a
                  href={whatsappEarlyBirdUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{ width: "100%" }}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Claim 1 of 50 Free Spots
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mobile App Showcase Section (Moved up to 3rd position!) */}
      <section className="app-showcase-section" id="mobile-app">
        <div className="container app-showcase-grid">
          {/* App Mockup Visual */}
          <div className="app-mockup-frame">
            <Image
              src="/media/ri-fitness-app.jpg"
              alt="RI Fitness Club Mobile App interface showing daily workout schedules and body transformation analytics"
              width={600}
              height={600}
              className="app-mockup-image"
              priority
            />
            <div className="app-floating-pill pill-top-left">
              <Calendar size={17} aria-hidden="true" />
              <span>Daily Workout Splits</span>
            </div>
            <div className="app-floating-pill pill-bottom-right">
              <LineChart size={17} aria-hidden="true" />
              <span>Body Progress Tracker</span>
            </div>
          </div>

          {/* App Copy & Feature Details */}
          <div className="app-info-copy">
            <span className="eyebrow">Free For Every Member</span>
            <h2>
              Free Fitness Mobile App.<br />
              <span>Workouts & Progress on Your Phone.</span>
            </h2>
            <p className="app-lead">
              Har member ke liye RI Fitness mobile app bilkul free hai. Daily workout routine check karain,
              apne sets aur weights record karain, aur body transformation ko phone par monitor karain.
            </p>

            <div className="app-feature-items">
              <div className="app-feature-item">
                <div className="app-feature-icon">
                  <Calendar size={20} aria-hidden="true" />
                </div>
                <div className="app-feature-text">
                  <h4>Daily Workout Schedules & Plans</h4>
                  <p>Follow clear daily exercise splits on your phone so you always know what to train.</p>
                </div>
              </div>

              <div className="app-feature-item">
                <div className="app-feature-icon">
                  <Zap size={20} aria-hidden="true" />
                </div>
                <div className="app-feature-text">
                  <h4>Reps, Sets & Weight Logger</h4>
                  <p>Record your weights and sets easily so you get stronger every single week.</p>
                </div>
              </div>

              <div className="app-feature-item">
                <div className="app-feature-icon">
                  <LineChart size={20} aria-hidden="true" />
                </div>
                <div className="app-feature-text">
                  <h4>Body Transformation Tracking</h4>
                  <p>Track your weight and body progress with clear visual charts right inside the app.</p>
                </div>
              </div>

              <div className="app-feature-item">
                <div className="app-feature-icon">
                  <Smartphone size={20} aria-hidden="true" />
                </div>
                <div className="app-feature-text">
                  <h4>100% Free — Zero Extra Charges</h4>
                  <p>No monthly subscription or app charge. Included free for all active RI Fitness members.</p>
                </div>
              </div>
            </div>

            <div className="free-guarantee-badge">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Free Mobile App included for all active members.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Transparent Pricing Plans */}
      <section className="pricing-section" id="pricing-table">
        <div className="container">
          <div className="section-heading center-heading">
            <span className="eyebrow">Simple Fee Structure</span>
            <h2>Simple, Clear Fees. No Hidden Charges.</h2>
            <p style={{ color: "var(--muted)", margin: "0.8rem auto 0", maxWidth: "600px" }}>
              Straightforward pricing for Lahore&apos;s most focused, uncrowded training gym.
            </p>
          </div>

          <div className="pricing-cards-grid">
            {/* Early Bird Plan */}
            <article className="pricing-card featured">
              <span className="pricing-card-badge">Best Value · First 50</span>
              <h3 className="pricing-plan-name">Early Bird Member</h3>
              <p className="pricing-plan-desc">
                Exclusive package for the first 50 signups. Save Rs. 11,000 on joining and personal training.
              </p>

              <div className="pricing-price-wrap">
                <span className="price-currency">PKR</span>
                <span className="price-amount">3,500</span>
                <span className="price-period">/ month</span>
              </div>

              <ul className="pricing-features-list">
                <li className="highlight-item">
                  <Sparkles size={18} aria-hidden="true" />
                  <strong>100% Free Personal Training (Save Rs. 10,000/mo)</strong>
                </li>
                <li className="highlight-item">
                  <Sparkles size={18} aria-hidden="true" />
                  <strong>Zero Admission Fee (Save Rs. 1,000)</strong>
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  <strong>Free RI Fitness Mobile App</strong> (Workout routines & progress tracker)
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  Full access to all strength machines & free weights
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  Personal nutrition & diet advice by Coach Nauman
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  Clean lockers, washrooms, and dedicated environment
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  155 Members capped guarantee (never overcrowded)
                </li>
              </ul>

              <a
                href={whatsappEarlyBirdUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                style={{ width: "100%" }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Join as Early Bird Member
              </a>
            </article>

            {/* Standard Membership Plan */}
            <article className="pricing-card">
              <h3 className="pricing-plan-name">Standard Membership</h3>
              <p className="pricing-plan-desc">
                Regular membership package for continuous training and floor access.
              </p>

              <div className="pricing-price-wrap">
                <span className="price-currency">PKR</span>
                <span className="price-amount">3,500</span>
                <span className="price-period">/ month</span>
              </div>

              <ul className="pricing-features-list">
                <li>
                  <Check size={18} aria-hidden="true" />
                  One-time Admission Fee: <strong>Rs. 1,000</strong>
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  <strong>Free RI Fitness Mobile App</strong> (Included for all active members)
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  Full access to all gym equipment & free weights
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  Floor guidance, form checking, and safety support
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  Clean locker and changing room access
                </li>
                <li>
                  <Check size={18} aria-hidden="true" />
                  Personal Training add-on available: <strong>Rs. 10,000 / month</strong>
                </li>
              </ul>

              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-outline"
                style={{ width: "100%" }}
              >
                Inquire on WhatsApp
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Membership FAQs */}
      <section className="membership-faq">
        <div className="container">
          <div className="section-heading center-heading">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <article className="faq-card">
              <h3>
                <HelpCircle size={20} aria-hidden="true" />
                Gym me sirf 155 seats kyun hain?
              </h3>
              <p>
                Takay gym me rash na ho, aapko kabhi machine ya bench ke liye line me na khara hona paray, aur Coach Nauman aapko proper guidance de sakain. Hum quality aur focus ko priority dete hain.
              </p>
            </article>

            <article className="faq-card">
              <h3>
                <HelpCircle size={20} aria-hidden="true" />
                First 50 Members ka Free Offer kaise claim karain?
              </h3>
              <p>
                Direct WhatsApp (+92 321 8806008) ya call par contact kar ke apni seat reserve karain. Pehle 50 members ko 100% Free Personal Training (Rs. 10,000 bachat) aur Free Admission Fee (Rs. 1,000 bachat) milegi. Aapko sirf Rs. 3,500 monthly fee pay karni hogi!
              </p>
            </article>

            <article className="faq-card">
              <h3>
                <HelpCircle size={20} aria-hidden="true" />
                Free Mobile App kaise milegi?
              </h3>
              <p>
                Registration ke foran baad Coach Nauman aapka profile create karain ge. Aapko app login mil jayega jahan aap apna daily workout routine dekh sakain ge aur sets/weights log kar sakain ge. Ye har active member ke liye bilkul free hai.
              </p>
            </article>

            <article className="faq-card">
              <h3>
                <HelpCircle size={20} aria-hidden="true" />
                Male aur Female ke slots aur timings?
              </h3>
              <p>
                Gym me 110 male seats aur 45 female seats hain. Dedicated timings aur schedule hain taakay male aur female members dono full privacy, safety aur comfort ke sath workout kar sakain.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Bottom Conversion CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow dark-eyebrow">First 50 Slots Filling Fast</span>
            <h2>
              Ready to claim your<br />
              Early Bird Spot?
            </h2>
          </div>
          <div className="cta-side">
            <p>
              155 Seats Only. Join today to get 100% Free Personal Training + Zero Admission Fee + Free Mobile App.
            </p>
            <div className="cta-actions">
              <a
                className="button button-dark"
                href={whatsappEarlyBirdUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} aria-hidden="true" /> Reserve on WhatsApp
              </a>
              <a className="map-link" href="tel:+923218806008">
                <Phone size={19} aria-hidden="true" /> Call +92 321 8806008
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
