"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera, Expand, X, Dumbbell, ShieldCheck, Sparkles } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "machines" | "weights" | "dumbbells" | "facility";
  categoryLabel: string;
  image: string;
  description: string;
  highlight: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "weights-turf",
    title: "Free Weights & Turf Area",
    category: "weights",
    categoryLabel: "Free Weights",
    image: "/media/gym-weights-turf.webp",
    description: "Olympic flat bench press station, bumper plates, and artificial turf training floor for athletic conditioning.",
    highlight: "Olympic Spec & Turf",
  },
  {
    id: "machines-wide",
    title: "Main Strength Machine Floor",
    category: "machines",
    categoryLabel: "Machines",
    image: "/media/gym-machines-wide.webp",
    description: "Multi-station selectorized strength machines by ARFITNESS designed for muscle isolation and hypertrophy.",
    highlight: "ARFITNESS Line",
  },
  {
    id: "dumbbells-rack",
    title: "Dumbbell & Mirror Station",
    category: "dumbbells",
    categoryLabel: "Dumbbells",
    image: "/media/gym-dumbbells.webp",
    description: "Tiered rack with complete dumbbell pairs, full-wall mirrors, and motivational training wall.",
    highlight: "Full Weight Range",
  },
  {
    id: "machines-legpress",
    title: "Heavy Leg Press & Isolation",
    category: "machines",
    categoryLabel: "Machines",
    image: "/media/gym-machines-legpress.webp",
    description: "45-degree angled plate-loaded leg press, seated leg curl, and preacher bench for targeted lower and upper body work.",
    highlight: "Plate-Loaded Power",
  },
  {
    id: "cables-station",
    title: "Cable Crossover & Pulley Towers",
    category: "machines",
    categoryLabel: "Machines",
    image: "/media/gym-cables-strength.webp",
    description: "Dual adjustable pulley stations with high/low cable attachments for continuous resistance and joint-friendly training.",
    highlight: "Dual Cable Pulley",
  },
  {
    id: "plates-equipment",
    title: "Olympic Bumper Plates & Trees",
    category: "weights",
    categoryLabel: "Free Weights",
    image: "/media/gym-plates-equipment.webp",
    description: "Color-coded competition-style bumper plates and plate trees for quick loading and progressive overload.",
    highlight: "Color-Coded Plates",
  },
  {
    id: "training-floor",
    title: "Functional & Stretching Zone",
    category: "weights",
    categoryLabel: "Free Weights",
    image: "/media/gym-training-floor.webp",
    description: "Spacious training area with high ceiling ventilation and ample space for mobility, warmup, and core workouts.",
    highlight: "Clean Open Floor",
  },
  {
    id: "facility-amenities",
    title: "Private Washroom & Facilities",
    category: "facility",
    categoryLabel: "Amenities",
    image: "/media/gym-facility-washroom.webp",
    description: "Hygienic, tiled private washroom and changing area for members before and after training sessions.",
    highlight: "Hygienic & Private",
  },
];

const categories = [
  { key: "all", label: "All Equipment" },
  { key: "machines", label: "Strength Machines" },
  { key: "weights", label: "Free Weights & Turf" },
  { key: "dumbbells", label: "Dumbbell Zone" },
  { key: "facility", label: "Facilities" },
] as const;

export function GymGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Inside RI Fitness</span>
            <h2>
              Real equipment.<br />
              <span>Real training floor.</span>
            </h2>
          </div>
          <p>
            Take a look inside RI Fitness Club in Lahore. Every station, dumbbell, and machine is selected to give you serious progress in a clean, motivating space.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters" role="tablist" aria-label="Filter gym gallery">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={activeTab === cat.key}
              className={`gallery-filter-btn ${activeTab === cat.key ? "is-active" : ""}`}
              onClick={() => setActiveTab(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="gallery-card"
              onClick={() => setActiveModalItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveModalItem(item);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              <div className="gallery-image-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-image"
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-badge">{item.highlight}</span>
                  <span className="gallery-expand-icon" aria-hidden="true">
                    <Expand size={18} />
                  </span>
                </div>
              </div>
              <div className="gallery-card-info">
                <div className="gallery-card-meta">
                  <span className="gallery-card-category">{item.categoryLabel}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>
            <div className="lightbox-image-wrap">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                sizes="(max-width: 1200px) 90vw, 1000px"
                className="lightbox-image"
                priority
              />
            </div>
            <div className="lightbox-info">
              <span className="gallery-badge">{activeModalItem.highlight}</span>
              <h3>{activeModalItem.title}</h3>
              <p>{activeModalItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
