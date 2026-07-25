'use client'

import { useEffect, useRef, useState } from 'react'

const CLIPS = [
  { src: '/videos/hero-1.mp4', poster: '/videos/hero-1-poster.jpg' },
  { src: '/videos/hero-2.mp4', poster: '/videos/hero-2-poster.jpg' },
  { src: '/videos/hero-3.mp4', poster: '/videos/hero-3-poster.jpg' },
]

const CROSSFADE_MS = 1200

export function HeroVideoBackground() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [preloadedIndex, setPreloadedIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const current = videoRefs.current[activeIndex]
    if (current) {
      current.currentTime = 0
      current.play().catch(() => {})
    }
    // Start preloading the next clip once the active one is playing, so it's
    // ready by the time this one ends, without preloading all three upfront.
    setPreloadedIndex((activeIndex + 1) % CLIPS.length)
  }, [activeIndex, reducedMotion])

  useEffect(() => {
    if (reducedMotion || preloadedIndex === activeIndex) return
    // Explicitly kick off the fetch here (after the `preload` attribute has
    // already been re-rendered to "auto"): browsers don't reliably start
    // loading a <video> purely from a preload attribute change.
    videoRefs.current[preloadedIndex]?.load()
  }, [preloadedIndex, activeIndex, reducedMotion])

  if (reducedMotion) {
    return (
      <img
        src={CLIPS[0].poster}
        alt="Expert roofing team working on a residential home"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  return (
    <>
      {CLIPS.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => {
            videoRefs.current[i] = el
          }}
          src={clip.src}
          poster={clip.poster}
          muted
          playsInline
          preload={i === activeIndex || i === preloadedIndex ? 'auto' : 'none'}
          onEnded={() => setActiveIndex((i + 1) % CLIPS.length)}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out"
          style={{
            transitionDuration: `${CROSSFADE_MS}ms`,
            opacity: i === activeIndex ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  )
}
