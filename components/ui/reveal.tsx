'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger delay in milliseconds before this element animates in. */
  delay?: number
  /** Element to render as. Defaults to a div. */
  as?: ElementType
  className?: string
  /** Any extra attributes (href, onSubmit, role, aria-*, …) are forwarded to the rendered element. */
  [key: string]: unknown
}

/**
 * Scroll-reveal wrapper. Adds the `.reveal` class (initial hidden state defined
 * in globals.css) and toggles `.is-visible` the first time the element enters the
 * viewport, then stops observing. Reduced-motion is handled in CSS.
 */
export function Reveal({ children, delay = 0, as, className = '', ...rest }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}
