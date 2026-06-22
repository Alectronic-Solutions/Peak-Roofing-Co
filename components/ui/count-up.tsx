'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  value: string
  duration?: number
  className?: string
}

function parse(value: string) {
  const m = value.match(/^(\D*?)([\d,]+(?:\.\d+)?)(.*)$/)
  if (!m) return null
  const prefix = m[1]
  const numStr = m[2]
  const suffix = m[3]
  const target = parseFloat(numStr.replace(/,/g, ''))
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  const hasComma = numStr.includes(',')
  const format = (n: number) => {
    const fixed = n.toFixed(decimals)
    const withCommas = hasComma
      ? Number(fixed).toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : fixed
    return `${prefix}${withCommas}${suffix}`
  }
  return { target, format }
}

export function CountUp({ value, duration = 1800, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const parsed = parse(value)
  const [display, setDisplay] = useState(parsed ? parsed.format(0) : value)

  useEffect(() => {
    if (!parsed) return
    const node = ref.current
    if (!node) return

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      setDisplay(value)
      return
    }

    setDisplay(parsed.format(0))

    let rafId: number
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(parsed.format(parsed.target * eased))
          if (t < 1) rafId = requestAnimationFrame(tick)
          else setDisplay(value)
        }
        rafId = requestAnimationFrame(tick)
      },
      { threshold: 0.1 }
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
