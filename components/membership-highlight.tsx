import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const whatsappEarlyBirdUrl =
  "https://wa.me/923218806008?text=Hi%20Coach%20Nauman,%20I%20want%20to%20claim%20the%20Early%20Bird%20Offer%20(Free%20Personal%20Training%20%2B%20Admission)%20at%20RI%20Fitness%20Club.";

export function MembershipHighlight() {
  return (
    <section className="home-membership-section" id="membership-offer">
      <div className="container home-membership-inner">
        {/* Left Side: Story & App Teaser */}
        <div>
          <span className="eyebrow">Limited Seats Only</span>
          <h2 style={{ fontFamily: "var(--heading)", textTransform: "uppercase", fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)", lineHeight: 0.95, margin: "0 0 1.2rem" }}>
            155 Seats Total.<br />
            <span style={{ color: "var(--green)" }}>First 50 Train 100% Free.</span>
          </h2>

          <div className="seats-pill-row">
            <span className="pill-item total">
              <Users size={14} aria-hidden="true" />
              155 Total Seats
            </span>
            <span className="pill-item male">
              110 Male Seats
            </span>
            <span className="pill-item female">
              45 Female Seats
            </span>
          </div>

          <p style={{ color: "#c0c8c1", fontSize: "1.02rem", lineHeight: 1.65, margin: "0 0 1.8rem", maxWidth: "560px" }}>
            Gym me rash se bachne ke liye sirf 155 seats hain (110 Male, 45 Female) taakay machines free milain.
            Pehle 50 members ko <strong>100% Free Personal Training</strong> (Save Rs. 10,000) aur <strong>Zero Admission Fee</strong> (Save Rs. 1,000)!
          </p>

          {/* Mobile App Teaser Callout */}
          <div className="app-teaser-box">
            <Image
              src="/media/ri-fitness-app.jpg"
              alt="RI Fitness Mobile App"
              width={52}
              height={52}
              className="app-teaser-img"
            />
            <div className="app-teaser-text">
              <strong>Free Fitness Mobile App Included</strong>
              <small>
                Daily workout plans dekhain aur sets/weights record karain — har active member ke liye 100% Free!
              </small>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/membership" className="button">
              View Membership & Fees <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={whatsappEarlyBirdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Claim on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Launch Offer Callout Box */}
        <div className="home-offer-callout">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
            <span className="early-bird-ribbon" style={{ fontSize: "0.82rem", padding: "0.35rem 0.8rem" }}>
              <Flame size={15} aria-hidden="true" />
              First 50 Members Offer
            </span>
            <span style={{ color: "var(--yellow)", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Save Rs. 11,000
            </span>
          </div>

          <h3>
            Early Bird <span>Founding Member</span>
          </h3>

          <p style={{ color: "var(--muted)", fontSize: "0.88rem", margin: "0 0 1.2rem" }}>
            Sirf regular monthly fee pay karain. Personal coaching aur admission fee bilkul free!
          </p>

          <div className="home-pricing-tag">
            <strong>Rs. 3,500</strong>
            <span>/ month</span>
            <span className="strike">Rs. 14,500 total value</span>
          </div>

          <ul className="home-perks-mini">
            <li>
              <Zap size={16} aria-hidden="true" />
              <span><strong>100% Free Personal Training</strong> (Save Rs. 10,000)</span>
            </li>
            <li>
              <ShieldCheck size={16} aria-hidden="true" />
              <span><strong>Zero Admission Fee</strong> (Save Rs. 1,000)</span>
            </li>
            <li>
              <Smartphone size={16} aria-hidden="true" />
              <span><strong>Free Fitness Mobile App</strong> (Workout routines)</span>
            </li>
            <li>
              <Sparkles size={16} aria-hidden="true" />
              <span>Direct guidance from Coach Nauman Ismail</span>
            </li>
          </ul>

          <a
            href={whatsappEarlyBirdUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Claim Spot (First 50 Only)
          </a>
        </div>
      </div>
    </section>
  );
}
