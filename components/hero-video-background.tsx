'use client'

import { Pause, Play } from 'lucide-react'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { asset } from '@/lib/company'

const CLIPS = [
  { name: 'hero-1', caption: 'New decking & underlayment' },
  { name: 'hero-2', caption: 'Ice & water shield in a valley' },
  { name: 'hero-3', caption: 'Drone view, mid-install' },
]

/** Phones and portrait tablets get the 540×720 portrait crops (about half the bytes). */
const PORTRAIT_QUERY = '(max-width: 1023px) and (orientation: portrait)'
const CROSSFADE_S = 1.2

const srcFor = (name: string, portrait: boolean) => asset(`/videos/${name}${portrait ? '-mobile' : ''}.mp4`)

type Props = {
  className?: string
  /** Overlays rendered between the media and the playback controls. */
  children?: ReactNode
}

/**
 * Crossfading muted background video for the hero.
 *
 * The <picture> poster is server-rendered so it's the LCP element and the fallback
 * whenever video can't autoplay (reduced motion, Save-Data, iOS Low Power Mode).
 * The <video> elements mount client-side only: React doesn't serialize `muted` into
 * SSR markup, and iOS Safari refuses to autoplay a video that isn't muted at load.
 */
export function HeroVideoBackground({ className = '', children }: Props) {
  const [enabled, setEnabled] = useState(false)
  const [portrait, setPortrait] = useState(false)
  const [active, setActive] = useState(0)
  const [requested, setRequested] = useState<boolean[]>(() => CLIPS.map((_, i) => i === 0))
  const [started, setStarted] = useState(false)
  const [userPaused, setUserPaused] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])
  const barRefs = useRef<Array<HTMLSpanElement | null>>([])
  const activeRef = useRef(0)
  const switchingRef = useRef(false)
  const visibleRef = useRef(true)
  const userPausedRef = useRef(false)

  activeRef.current = active
  userPausedRef.current = userPaused

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    setPortrait(window.matchMedia(PORTRAIT_QUERY).matches)
    setEnabled(!reduced && !saveData)
  }, [])

  const playActive = useCallback(() => {
    const video = videoRefs.current[activeRef.current]
    if (!video || userPausedRef.current || !visibleRef.current || document.hidden) return
    video.play().catch(() => {
      // Autoplay refused (e.g. Low Power Mode). The poster stays visible.
    })
  }, [])

  const pauseAll = useCallback(() => {
    videoRefs.current.forEach((v) => v?.pause())
  }, [])

  // Pause when the hero scrolls out of view or the tab is hidden; saves battery and data.
  useEffect(() => {
    if (!enabled) return
    const root = rootRef.current
    if (!root) return
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
      if (entry.isIntersecting) playActive()
      else pauseAll()
    })
    observer.observe(root)
    const onVisibility = () => (document.hidden ? pauseAll() : playActive())
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [enabled, playActive, pauseAll])

  // Drive the progress bars from the playing clip without re-rendering every frame.
  useEffect(() => {
    if (!enabled) return
    let raf = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visibleRef.current) return
      const video = videoRefs.current[activeRef.current]
      barRefs.current.forEach((bar, i) => {
        if (!bar) return
        const p =
          i === activeRef.current && video && video.duration
            ? video.currentTime / video.duration
            : i < activeRef.current
              ? 1
              : 0
        bar.style.transform = `scaleX(${p})`
      })
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [enabled])

  const goTo = useCallback((next: number) => {
    const video = videoRefs.current[next]
    if (!video) return
    switchingRef.current = true
    video.currentTime = 0
    setActive(next)
    activeRef.current = next
    playActive()
    window.setTimeout(() => {
      switchingRef.current = false
    }, CROSSFADE_S * 1000)
  }, [playActive])

  const handleTimeUpdate = (i: number) => {
    const video = videoRefs.current[i]
    if (!video || i !== activeRef.current || switchingRef.current || !video.duration) return
    const next = (i + 1) % CLIPS.length
    // Begin fetching the next clip once this one is underway.
    if (!requested[next] && video.currentTime > 1) {
      setRequested((prev) => prev.map((r, idx) => r || idx === next))
    }
    // Start the crossfade slightly before the end so there's never a dead frame.
    const nextVideo = videoRefs.current[next]
    if (video.duration - video.currentTime <= CROSSFADE_S && nextVideo && nextVideo.readyState >= 3) {
      goTo(next)
    }
  }

  const handleEnded = (i: number) => {
    if (i !== activeRef.current) return
    const next = (i + 1) % CLIPS.length
    const nextVideo = videoRefs.current[next]
    if (nextVideo && nextVideo.readyState >= 2) goTo(next)
    else {
      // Next clip still buffering on a slow connection: loop the current one rather than stall.
      const video = videoRefs.current[i]
      if (video) {
        video.currentTime = 0
        playActive()
      }
    }
  }

  const togglePlayback = () => {
    const video = videoRefs.current[activeRef.current]
    if (!video) return
    if (userPaused) {
      userPausedRef.current = false
      setUserPaused(false)
      playActive()
    } else {
      video.pause()
      setUserPaused(true)
    }
  }

  const posterFor = (name: string) => (
    <picture>
      <source media={PORTRAIT_QUERY} srcSet={asset(`/videos/${name}-mobile-poster.jpg`)} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(`/videos/${name}-poster.jpg`)}
        alt=""
        // React 18 doesn't know the camelCase prop yet, so pass the raw attribute.
        {...{ fetchpriority: 'high' }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </picture>
  )

  return (
    <div ref={rootRef} className={className}>
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {posterFor(CLIPS[0].name)}

        {enabled &&
          CLIPS.map((clip, i) => (
            <video
              key={clip.name}
              ref={(el) => {
                videoRefs.current[i] = el
                if (el) {
                  el.muted = true
                  el.defaultMuted = true
                  el.disablePictureInPicture = true
                  el.disableRemotePlayback = true
                }
              }}
              src={requested[i] ? srcFor(clip.name, portrait) : undefined}
              muted
              playsInline
              autoPlay={i === 0}
              preload={requested[i] ? 'auto' : 'none'}
              onPlaying={() => i === 0 && setStarted(true)}
              onCanPlay={() => i === activeRef.current && playActive()}
              onTimeUpdate={() => handleTimeUpdate(i)}
              onEnded={() => handleEnded(i)}
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity ease-in-out"
              style={{
                transitionDuration: `${CROSSFADE_S}s`,
                opacity: i === active && (started || i !== 0) ? 1 : 0,
              }}
            />
          ))}
      </div>

      {children}

      {enabled && (
        <div className="absolute right-4 top-[80px] z-20 flex items-center gap-3 sm:right-6 lg:bottom-8 lg:right-10 lg:top-auto">
          <p className="hidden text-xs font-medium text-white/70 xl:block" aria-live="off">
            {CLIPS[active].caption}
          </p>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {CLIPS.map((clip, i) => (
              <span key={clip.name} className="h-[3px] w-6 overflow-hidden rounded-full bg-white/25 lg:w-8">
                <span
                  ref={(el) => {
                    barRefs.current[i] = el
                  }}
                  className="block h-full w-full origin-left scale-x-0 rounded-full bg-gold-400"
                />
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={togglePlayback}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-forest-950/50 text-white backdrop-blur-sm transition hover:bg-forest-950/80"
            aria-label={userPaused ? 'Play background video' : 'Pause background video'}
          >
            {userPaused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
          </button>
        </div>
      )}
    </div>
  )
}
