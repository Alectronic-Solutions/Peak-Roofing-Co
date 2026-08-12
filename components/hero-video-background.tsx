'use client'

import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const CLIPS = [
  { src: '/videos/hero-1.mp4', poster: '/videos/hero-1-poster.jpg' },
  { src: '/videos/hero-2.mp4', poster: '/videos/hero-2-poster.jpg' },
  { src: '/videos/hero-3.mp4', poster: '/videos/hero-3-poster.jpg' },
]

const CROSSFADE_MS = 1200
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Peak-Roofing-Co' : ''
const assetUrl = (path: string) => `${BASE_PATH}${path}`

export function HeroVideoBackground() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [preloadedIndex, setPreloadedIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
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
      if (!isPaused) current.play().catch(() => {})
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
        src={assetUrl(CLIPS[0].poster)}
        alt="Expert roofing team working on a residential home"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  const togglePlayback = () => {
    const current = videoRefs.current[activeIndex]
    if (!current) return
    if (isPaused) current.play().catch(() => {})
    else current.pause()
    setIsPaused((paused) => !paused)
  }

  return (
    <div className="absolute inset-0">
      {CLIPS.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => {
            videoRefs.current[i] = el
          }}
          src={assetUrl(clip.src)}
          poster={assetUrl(clip.poster)}
          muted
          playsInline
          autoPlay={i === 0}
          preload={i === activeIndex || i === preloadedIndex ? 'auto' : 'none'}
          onCanPlay={() => {
            if (i === activeIndex && !isPaused) videoRefs.current[i]?.play().catch(() => {})
          }}
          onEnded={() => {
            if (!isPaused && i === activeIndex) setActiveIndex((i + 1) % CLIPS.length)
          }}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out"
          style={{
            transitionDuration: `${CROSSFADE_MS}ms`,
            opacity: i === activeIndex ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}
      <button
        type="button"
        onClick={togglePlayback}
        className="absolute bottom-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-forest-950/40 text-white backdrop-blur-sm transition hover:bg-forest-950/70 focus-visible:outline-none"
        aria-label={isPaused ? 'Play background video' : 'Pause background video'}
      >
        {isPaused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
      </button>
    </div>
  )
}
