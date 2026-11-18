"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/hero-construction.mp4";
const POSTER_SRC = "/images/hero-poster.jpg";
const POSTER_ALT = "Aerial view of a residential construction site";

export function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      const reduce = media.matches;
      setMotionAllowed(!reduce);
      if (reduce) {
        setUserPaused(true);
        videoRef.current?.pause();
      }
    };
    media.addEventListener("change", sync);
    const timer = window.setTimeout(sync, 0);
    return () => {
      media.removeEventListener("change", sync);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.35),
      { threshold: [0, 0.35, 0.7] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !motionAllowed) return;

    if (inView && !userPaused) {
      void video.play().catch(() => undefined);
      return;
    }

    if (!inView && !userPaused) {
      video.pause();
    }
  }, [inView, motionAllowed, userPaused]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!motionAllowed) {
      setMotionAllowed(true);
      setUserPaused(false);
      return;
    }
    if (!video) return;
    if (video.paused) {
      setUserPaused(false);
      void video.play().catch(() => undefined);
      return;
    }
    setUserPaused(true);
    video.pause();
    setPlaying(false);
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div ref={containerRef} className="relative aspect-[4/3.3] w-full overflow-hidden bg-primary lg:aspect-[4/4.25]">
      <Image
        src={POSTER_SRC}
        alt={POSTER_ALT}
        fill
        priority
        sizes="(min-width: 1024px) 46vw, 100vw"
        className="object-cover"
      />
      {motionAllowed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={POSTER_SRC}
          muted={muted}
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent p-5 sm:p-6">
        <p className="text-[0.625rem] font-semibold tracking-[0.16em] text-accent-soft uppercase">What we finance</p>
        <p className="mt-2 font-display text-lg leading-snug text-on-primary sm:text-xl">
          Ground-up construction · Land · Bridge · Multifamily · Repositioning
        </p>
        <p className="mt-2 text-[0.625rem] leading-snug text-on-primary/70">
          Licensed footage · Rafael Martinez, Pexels. Not a company project.
        </p>
      </div>

      <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlayback}
          className="inline-flex min-h-11 items-center gap-2 border border-on-primary/30 bg-primary/80 px-3 text-xs font-semibold text-on-primary backdrop-blur hover:bg-primary"
          aria-pressed={playing}
        >
          {playing ? "Pause" : "Play"}
          <span className="sr-only"> background video</span>
        </button>
        {motionAllowed ? (
          <button
            type="button"
            onClick={toggleMute}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-on-primary/30 bg-primary/80 px-3 text-xs font-semibold text-on-primary backdrop-blur hover:bg-primary"
            aria-pressed={!muted}
          >
            {muted ? "Unmute" : "Mute"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
