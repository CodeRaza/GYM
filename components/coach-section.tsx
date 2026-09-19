"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Expand,
  GraduationCap,
  Medal,
  Trophy,
  X,
} from "lucide-react";

export function CoachSection() {
  const [activeVisual, setActiveVisual] = useState<"portrait" | "poster">("portrait");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const swipeStartX = useRef<number | null>(null);

  const changeVisual = (direction: "next" | "previous") => {
    setActiveVisual((currentVisual) => {
      if (direction === "next") {
        return currentVisual === "portrait" ? "poster" : "portrait";
      }

      return currentVisual === "portrait" ? "poster" : "portrait";
    });
  };

  const handleSwipeEnd = (pointerX: number) => {
    if (swipeStartX.current === null) {
      return;
    }

    const swipeDistance = pointerX - swipeStartX.current;
    swipeStartX.current = null;

    if (Math.abs(swipeDistance) < 48) {
      return;
    }

    changeVisual(swipeDistance < 0 ? "next" : "previous");
  };

  return (
    <section className="section coach-section" id="coach">
      <div className="container coach-grid">
        {/* Coach Visuals */}
        <div className="coach-visuals-container">
          <div className="coach-carousel-heading">
            <span>Coach profile & credentials</span>
            <span aria-live="polite">{activeVisual === "portrait" ? "1 of 2" : "2 of 2"}</span>
          </div>

          <div
            className="coach-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Coach photos and credentials"
            onPointerDown={(event) => {
              swipeStartX.current = event.clientX;
            }}
            onPointerUp={(event) => handleSwipeEnd(event.clientX)}
            onPointerCancel={() => {
              swipeStartX.current = null;
            }}
          >
            <button
              type="button"
              className="coach-carousel-arrow coach-carousel-arrow-previous"
              onClick={() => changeVisual("previous")}
              aria-label="Show previous coach image"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="coach-carousel-arrow coach-carousel-arrow-next"
              onClick={() => changeVisual("next")}
              aria-label="Show next coach image"
            >
              <ChevronRight aria-hidden="true" />
            </button>

            <div className="coach-carousel-viewport">
              <div className={`coach-carousel-track ${activeVisual === "poster" ? "is-poster-active" : ""}`}>
                <div className="coach-carousel-slide" aria-hidden={activeVisual !== "portrait"}>
                  <div className="coach-photo-inner">
                    <Image
                      src="/media/coach-nauman.webp"
                      alt="Coach Nauman Ismail - Head Trainer & Owner at RI Fitness Club"
                      fill
                      priority
                      sizes="(max-width: 820px) 100vw, 45vw"
                      className="coach-img-portrait"
                    />
                    <div className="coach-overlay-badge">
                      <span>Founder & Head Coach</span>
                    </div>
                    <button
                      type="button"
                      className="coach-expand-btn"
                      aria-label="Expand portrait"
                      onClick={() => setLightboxOpen(true)}
                    >
                      <Expand size={18} />
                    </button>
                  </div>
                </div>

                <div className="coach-carousel-slide" aria-hidden={activeVisual !== "poster"}>
                  <div className="coach-photo-inner">
                    <Image
                      src="/media/coach-poster.webp"
                      alt="Official Nauman Ismail Credentials Poster - President LDAA, Gold Medalist, MSc Mathematics, Certified Trainer"
                      fill
                      priority
                      sizes="(max-width: 820px) 100vw, 45vw"
                      className="coach-img-poster"
                    />
                    <div className="coach-overlay-badge">
                      <span>Official Certificate</span>
                    </div>
                    <button
                      type="button"
                      className="coach-expand-btn"
                      aria-label="Expand credentials poster"
                      onClick={() => setLightboxOpen(true)}
                    >
                      <Expand size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="coach-carousel-dots" aria-label="Choose coach image">
            <button
              type="button"
              className={`coach-carousel-dot ${activeVisual === "portrait" ? "is-active" : ""}`}
              onClick={() => setActiveVisual("portrait")}
              aria-label="Show coach portrait"
              aria-current={activeVisual === "portrait"}
            />
            <button
              type="button"
              className={`coach-carousel-dot ${activeVisual === "poster" ? "is-active" : ""}`}
              onClick={() => setActiveVisual("poster")}
              aria-label="Show credentials poster"
              aria-current={activeVisual === "poster"}
            />
          </div>
        </div>

        {/* Coach Copy */}
        <div className="coach-copy">
          <span className="eyebrow">Meet your coach & founder</span>
          <h2>
            Guidance backed by<br />
            <span>real experience.</span>
          </h2>
          <p className="coach-name">Nauman Ismail</p>
          <p>
            Training is more than just lifting weights—it is learning proper technique, staying disciplined, and building sustainable health. Coach Nauman Ismail brings years of athletic leadership, academic analytical foundation, and certified fitness coaching directly to every member on the floor.
          </p>

          <div className="credentials-grid">
            <div className="cred-card">
              <span className="cred-icon"><BadgeCheck aria-hidden="true" /></span>
              <div>
                <strong>Certified Gym Fitness Trainer</strong>
                <small>Professional training & programming</small>
              </div>
            </div>

            <div className="cred-card">
              <span className="cred-icon"><Trophy aria-hidden="true" /></span>
              <div>
                <strong>President (L.D.A.A)</strong>
                <small>Lahore District Amateur Athletics</small>
              </div>
            </div>

            <div className="cred-card">
              <span className="cred-icon"><Medal aria-hidden="true" /></span>
              <div>
                <strong>Gold Medalist</strong>
                <small>Recognized athletic champion</small>
              </div>
            </div>

            <div className="cred-card">
              <span className="cred-icon"><GraduationCap aria-hidden="true" /></span>
              <div>
                <strong>M.Sc. Mathematics</strong>
                <small>Structured, analytical approach to training</small>
              </div>
            </div>
          </div>

          <div className="coach-actions">
            <Link className="button" href="/contact#contact-form">
              Train with Coach Nauman <ArrowRight size={19} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="text-link green-link"
              onClick={() => {
                setActiveVisual("poster");
                setLightboxOpen(true);
              }}
            >
              View Official Certification Poster <Expand size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox for Coach visual */}
      {lightboxOpen && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Coach photo preview"
        >
          <div className="lightbox-content coach-lightbox" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close preview"
            >
              <X size={24} />
            </button>
            <div className="lightbox-image-wrap">
              <Image
                src={activeVisual === "portrait" ? "/media/coach-nauman.webp" : "/media/coach-poster.webp"}
                alt={activeVisual === "portrait" ? "Coach Nauman Ismail" : "Nauman Ismail Credentials"}
                fill
                sizes="(max-width: 1200px) 90vw, 850px"
                className="lightbox-image"
                priority
              />
            </div>
            <div className="lightbox-info">
              <span className="gallery-badge">
                {activeVisual === "portrait" ? "Nauman Ismail · Head Coach" : "Official Recognition & Credentials"}
              </span>
              <h3>
                {activeVisual === "portrait"
                  ? "Nauman Ismail — Founder & Certified Coach"
                  : "Certified Gym Fitness Trainer · President (L.D.A.A) · Gold Medalist"}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
