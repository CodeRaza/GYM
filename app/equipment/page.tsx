import type { Metadata } from "next";
import Image from "next/image";
import { Dumbbell, PlayCircle } from "lucide-react";
import { GymGallery } from "@/components/gym-gallery";

export const metadata: Metadata = {
  title: "Equipment",
  description: "Explore RI Fitness Club's strength equipment, free weights, training floor, and gym tour videos.",
};

const videos = [
  {
    title: "RI Fitness Club Tour",
    description: "Take a look around the club, from the main floor to the training environment.",
    source: "/media/gym-tour.mp4",
    poster: "/media/gym-tour.webp",
  },
  {
    title: "Inside the Training Floor",
    description: "See the space, machines, and focused atmosphere that power every workout.",
    source: "/media/gym-hero.mp4",
    poster: "/media/gym-hero.webp",
  },
];

export default function EquipmentPage() {
  return (
    <main id="main-content" className="equipment-page">
      <section className="equipment-hero">
        <Image
          src="/media/equipment-hero-athlete.png"
          alt="3D athlete lifting dumbbells"
          fill
          priority
          sizes="100vw"
          className="equipment-hero-athlete"
        />
        <div className="container equipment-hero-copy">
          <span className="eyebrow">RI Fitness Club</span>
          <h1>Equipment built for<br /><span>serious progress.</span></h1>
          <p>Explore the machines, free weights, training floor, and facilities waiting for you at RI Fitness Club.</p>
        </div>
      </section>

      <section className="section equipment-videos" aria-labelledby="equipment-videos-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">See it in motion</span>
              <h2 id="equipment-videos-title">Tour the<br /><span>training floor.</span></h2>
            </div>
            <p>Watch the club before your visit and get a feel for the equipment, space, and atmosphere.</p>
          </div>

          <div className="equipment-video-grid">
            {videos.map((video) => (
              <article className="equipment-video-card" key={video.source}>
                <video controls playsInline preload="metadata" poster={video.poster}>
                  <source src={video.source} type="video/mp4" />
                  Your browser does not support this video.
                </video>
                <div className="equipment-video-copy">
                  <PlayCircle aria-hidden="true" />
                  <div>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GymGallery />

      <section className="equipment-cta">
        <div className="container">
          <Dumbbell aria-hidden="true" />
          <div>
            <span>Ready to train?</span>
            <h2>See the equipment in person.</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
