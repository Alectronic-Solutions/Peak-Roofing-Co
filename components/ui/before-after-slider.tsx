'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

const MIN_POS = 5
const MAX_POS = 95
const STEP = 5

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  ariaLabel: string
  initialPosition?: number
  className?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  ariaLabel,
  initialPosition = 50,
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const clamp = useCallback((pos: number) => Math.max(MIN_POS, Math.min(MAX_POS, pos)), [])

  const updateSlider = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setSliderPos(clamp(((clientX - rect.left) / rect.width) * 100))
    },
    [clamp]
  )

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    const onMove = (ev: MouseEvent) => updateSlider(ev.clientX)
    const onUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => updateSlider(ev.touches[0].clientX)
    const onEnd = () => {
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next: number | null = null
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = sliderPos - STEP
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = sliderPos + STEP
    else if (e.key === 'Home') next = MIN_POS
    else if (e.key === 'End') next = MAX_POS
    if (next === null) return
    e.preventDefault()
    setSliderPos(clamp(next))
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
      style={{ cursor: isDragging ? 'ew-resize' : 'col-resize' }}
    >
      {/* After image (full) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before image (clipped by parent div width) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <div className="absolute inset-0" style={{ width: `${(100 * 100) / sliderPos}%` }}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover pointer-events-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Slider handle: keyboard + screen-reader accessible */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={MIN_POS}
        aria-valuemax={MAX_POS}
        aria-valuetext={`${Math.round(sliderPos)}% before`}
        className="absolute top-0 bottom-0 z-20 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 rounded-full"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)', touchAction: 'none' }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onKeyDown={onKeyDown}
      >
        <div className="w-0.5 h-full bg-white/60 absolute" />
        <div className="relative w-9 h-9 bg-white rounded-full shadow-[0_2px_16px_rgba(0,0,0,0.6)] flex items-center justify-center border border-white/20 z-10">
          <svg viewBox="0 0 20 20" className="w-4 h-4 fill-slate-800" aria-hidden="true">
            <path
              d="M7 4l-4 6 4 6M13 4l4 6-4 6"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
