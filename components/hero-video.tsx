"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) videoRef.current?.pause();
    };
    handleMotionPreference(reduceMotion);
    reduceMotion.addEventListener("change", handleMotionPreference);
    return () => reduceMotion.removeEventListener("change", handleMotionPreference);
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="video-shell">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/gym-hero.webp"
        aria-label="Inside RI Fitness Club"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/media/gym-hero.mp4" type="video/mp4" />
      </video>
      <div className="video-shade" />
      <div className="video-caption">
        <span className="live-dot" />
        <div><strong>Inside RI Fitness</strong><small>A space built for focused training</small></div>
      </div>
      <button className="video-toggle" type="button" onClick={togglePlayback} aria-label={playing ? "Pause gym video" : "Play gym video"}>
        {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
      </button>
    </div>
  );
}
