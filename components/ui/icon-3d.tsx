import { cn } from '@/lib/utils'

/**
 * Peak's own 3D icon set. Each icon is a stack of extruded layers drawn on a 64×64 grid:
 * an offset "side" stack for depth, a lit gradient face, a rim highlight, and a gloss pass,
 * sitting on a soft ground shadow. Gradients live once in <Icon3DDefs /> (rendered in the root layout).
 */

type Material = 'gold' | 'amber' | 'emerald' | 'cream' | 'slate' | 'sky' | 'red'

type Layer = {
  d: string
  m: Material
  /** Extrusion depth in grid units (0 = flat inlay). */
  depth?: number
  /** Render as a stroke of this width instead of a fill. */
  stroke?: number
  /** Extra SVG transform applied to the shape (not to the extrusion offset). */
  t?: string
}

type IconDef = { layers: Layer[]; shadow?: number }

// Face gradient stops (top → bottom) and the two extrusion tones per material.
const MATERIALS: Record<Material, { face: [string, string, string]; side: string; edge: string }> = {
  gold: { face: ['#FFE9A8', '#FBBF24', '#D97706'], side: '#A1520A', edge: '#7A3B06' },
  amber: { face: ['#FCC46A', '#F59E0B', '#B45309'], side: '#7C3A0A', edge: '#5C2A07' },
  emerald: { face: ['#7CD3AE', '#2E9A70', '#17654A'], side: '#0E4232', edge: '#082C21' },
  cream: { face: ['#FFFFFF', '#F7F0E1', '#DCCCA8'], side: '#A8946A', edge: '#7D6C4A' },
  slate: { face: ['#F4F7FA', '#BFCAD8', '#8393A8'], side: '#4A5768', edge: '#343F4D' },
  sky: { face: ['#E3F4FF', '#86D2FB', '#3399D3'], side: '#165A85', edge: '#0E3F5E' },
  red: { face: ['#FDB0B0', '#EF4444', '#B91C1C'], side: '#7A1414', edge: '#560D0D' },
}

const DX = 0.3 // extrusion leans slightly right so vertical edges show a side face

/* ---------- geometry helpers ---------- */

const rr = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`

const circle = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0Z`

const ellipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${rx * 2} 0a${rx} ${ry} 0 1 0 ${-rx * 2} 0Z`

/** Star / seal outline with `n` points alternating between radius R and r. */
const star = (cx: number, cy: number, R: number, r: number, n: number) => {
  const pts: string[] = []
  for (let i = 0; i < n * 2; i++) {
    const a = (Math.PI * i) / n - Math.PI / 2
    const rad = i % 2 === 0 ? R : r
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)} ${(cy + rad * Math.sin(a)).toFixed(2)}`)
  }
  return `M${pts.join('L')}Z`
}

/* ---------- the set ---------- */

const ICONS = {
  house: {
    layers: [
      { d: rr(40, 12, 7, 15, 1.2), m: 'emerald', depth: 3 },
      { d: 'M15 33L32 18L49 33V53H15Z', m: 'cream', depth: 4 },
      { d: rr(18.5, 37, 7, 7, 1.2), m: 'sky', depth: 1 },
      { d: rr(38.5, 37, 7, 7, 1.2), m: 'sky', depth: 1 },
      { d: rr(28, 39, 8, 14, 1.6), m: 'emerald', depth: 1 },
      { d: 'M5 32L32 8L59 32L53 37.5L32 18.6L11 37.5Z', m: 'gold', depth: 5 },
    ],
    shadow: 22,
  },
  storm: {
    layers: [
      {
        d: 'M17 40C10 40 6 35 7.5 30C9 25 13.5 23.5 17.5 24.5C18.5 16.5 25 11 32.5 11.5C39 12 43.5 16.5 45 22C51.5 21.5 57 26.5 56.5 32.5C56 37.5 51.5 40 47 40Z',
        m: 'cream',
        depth: 4,
      },
      { d: 'M34 28L24 43H31L27.5 55L41.5 37.5H34.5L38.5 28Z', m: 'gold', depth: 4 },
    ],
    shadow: 20,
  },
  drone: {
    layers: [
      { d: rr(19, 14, 2.4, 9, 1.2), m: 'slate', depth: 1 },
      { d: rr(42.6, 14, 2.4, 9, 1.2), m: 'slate', depth: 1 },
      { d: ellipse(20.2, 14.5, 8, 2.2), m: 'slate', depth: 1 },
      { d: ellipse(43.8, 14.5, 8, 2.2), m: 'slate', depth: 1 },
      { d: rr(8, 27, 48, 4.4, 2.2), m: 'slate', depth: 2 },
      { d: rr(11, 20, 3.2, 10, 1.6), m: 'slate', depth: 2 },
      { d: rr(49.8, 20, 3.2, 10, 1.6), m: 'slate', depth: 2 },
      { d: ellipse(12.6, 19.5, 10, 2.8), m: 'gold', depth: 2 },
      { d: ellipse(51.4, 19.5, 10, 2.8), m: 'gold', depth: 2 },
      { d: rr(20, 23, 24, 14, 5.5), m: 'emerald', depth: 4 },
      { d: circle(32, 44, 5.5), m: 'slate', depth: 3 },
      { d: circle(32, 44, 2.4), m: 'sky', depth: 0 },
      { d: circle(32, 29, 1.6), m: 'gold', depth: 0 },
    ],
    shadow: 18,
  },
  shield: {
    layers: [
      { d: 'M32 6L51 12.5V29C51 41.5 43 50 32 55C21 50 13 41.5 13 29V12.5Z', m: 'emerald', depth: 5 },
      { d: 'M22.5 30.5L29.5 37.5L42 24.5', m: 'gold', depth: 3, stroke: 6 },
    ],
    shadow: 16,
  },
  card: {
    layers: [
      { d: rr(16, 11, 40, 27, 5), m: 'gold', depth: 3 },
      { d: rr(8, 22, 42, 28, 5), m: 'emerald', depth: 4 },
      { d: rr(14, 30, 10, 7.5, 2), m: 'gold', depth: 1 },
      { d: rr(14, 42, 7, 2.6, 1.3), m: 'cream', depth: 0 },
      { d: rr(23.5, 42, 7, 2.6, 1.3), m: 'cream', depth: 0 },
      { d: rr(33, 42, 7, 2.6, 1.3), m: 'cream', depth: 0 },
    ],
    shadow: 22,
  },
  building: {
    layers: [
      { d: rr(39, 5, 7, 6, 1), m: 'slate', depth: 2 },
      { d: rr(16, 15, 32, 39, 2), m: 'cream', depth: 4 },
      ...[22, 30, 38].flatMap((y) =>
        [21, 29.5, 38].map((x) => ({ d: rr(x, y, 5, 5, 1), m: 'sky' as Material, depth: 1 }))
      ),
      { d: rr(28, 45.5, 8, 8.5, 1.2), m: 'emerald', depth: 1 },
      { d: rr(13, 9.5, 38, 7, 2.2), m: 'gold', depth: 3 },
    ],
    shadow: 19,
  },
  images: {
    layers: [
      { d: rr(17, 8, 38, 29, 4), m: 'emerald', depth: 3 },
      { d: rr(9, 18, 40, 33, 4), m: 'cream', depth: 4 },
      { d: rr(13, 22, 32, 25, 2), m: 'sky', depth: 0 },
      { d: 'M13 47L24 32.5L31 41L36.5 34.5L45 47Z', m: 'emerald', depth: 1 },
      { d: circle(38, 28.5, 3.3), m: 'gold', depth: 1 },
    ],
    shadow: 21,
  },
  compare: {
    layers: [
      { d: 'M32 14V50H14A4 4 0 0 1 10 46V18A4 4 0 0 1 14 14Z', m: 'slate', depth: 4 },
      { d: 'M32 14H50A4 4 0 0 1 54 18V46A4 4 0 0 1 50 50H32Z', m: 'gold', depth: 4 },
      { d: rr(30.5, 8, 3, 48, 1.5), m: 'cream', depth: 2 },
      { d: circle(32, 32, 7.5), m: 'cream', depth: 4 },
      { d: 'M29.5 29L26.5 32L29.5 35M34.5 29L37.5 32L34.5 35', m: 'emerald', depth: 0, stroke: 1.8 },
    ],
    shadow: 21,
  },
  star: {
    layers: [{ d: star(32, 30, 25, 11.5, 5), m: 'gold', depth: 5 }],
    shadow: 18,
  },
  team: {
    layers: [
      { d: circle(43, 17.5, 7), m: 'emerald', depth: 3 },
      { d: 'M29 45C29 35.5 35 29.5 43 29.5C51 29.5 56 35.5 56 45Z', m: 'emerald', depth: 3 },
      { d: circle(24, 22, 8.5), m: 'gold', depth: 4 },
      { d: 'M8 53C8 42 15 35 24 35C33 35 40 42 40 53Z', m: 'gold', depth: 4 },
    ],
    shadow: 22,
  },
  help: {
    layers: [
      {
        d: 'M14 9H50A6 6 0 0 1 56 15V37A6 6 0 0 1 50 43H30L19 52V43H14A6 6 0 0 1 8 37V15A6 6 0 0 1 14 9Z',
        m: 'emerald',
        depth: 4,
      },
      { d: 'M26 20.5C26 16.8 28.8 14.6 32 14.6C35.4 14.6 38 16.9 38 20C38 24.6 32 25.2 32 29.6', m: 'gold', depth: 2, stroke: 4.6 },
      { d: circle(32, 36.3, 2.7), m: 'gold', depth: 2 },
    ],
    shadow: 20,
  },
  mail: {
    layers: [
      { d: rr(8, 15, 48, 35, 5), m: 'cream', depth: 4 },
      { d: 'M11 19L32 35.5L53 19', m: 'slate', depth: 1, stroke: 3 },
      { d: circle(32, 35.5, 5.2), m: 'gold', depth: 2 },
    ],
    shadow: 22,
  },
  phone: {
    layers: [
      {
        d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
        m: 'gold',
        depth: 5,
        t: 'translate(4 6) scale(2.15)',
      },
      { d: 'M37.5 7.5A18 18 0 0 1 55.5 25.5', m: 'emerald', depth: 2, stroke: 3.6 },
      { d: 'M37 16A9.5 9.5 0 0 1 46.5 25.5', m: 'emerald', depth: 2, stroke: 3.6 },
    ],
    shadow: 19,
  },
  pin: {
    layers: [
      {
        d: 'M32 5C21.5 5 13.5 13 13.5 23.5C13.5 36 32 54 32 54C32 54 50.5 36 50.5 23.5C50.5 13 42.5 5 32 5Z',
        m: 'gold',
        depth: 5,
      },
      { d: circle(32, 23, 7), m: 'emerald', depth: 0 },
    ],
    shadow: 12,
  },
  clock: {
    layers: [
      { d: circle(32, 30, 23), m: 'gold', depth: 4 },
      { d: circle(32, 30, 18.5), m: 'cream', depth: 0 },
      { d: 'M32 30V18.5', m: 'emerald', depth: 1, stroke: 3.6 },
      { d: 'M32 30L40.5 35', m: 'emerald', depth: 1, stroke: 3.6 },
      { d: circle(32, 30, 3), m: 'gold', depth: 1 },
    ],
    shadow: 19,
  },
  medal: {
    layers: [
      { d: 'M23 32L15 54L22 51L26 57L32 37Z', m: 'red', depth: 3 },
      { d: 'M41 32L49 54L42 51L38 57L32 37Z', m: 'red', depth: 3 },
      { d: circle(32, 23, 17), m: 'gold', depth: 5 },
      { d: star(32, 23, 9.5, 4.2, 5), m: 'cream', depth: 2 },
    ],
    shadow: 17,
  },
  seal: {
    layers: [
      { d: star(32, 29, 24, 20.5, 16), m: 'gold', depth: 5 },
      { d: 'M22.5 29.5L29 36L42 23', m: 'emerald', depth: 1, stroke: 5.5 },
    ],
    shadow: 19,
  },
  hardhat: {
    layers: [
      { d: rr(7, 40, 50, 8.5, 4.25), m: 'gold', depth: 4 },
      { d: 'M13 42.5C13 27 21 16 32 16C43 16 51 27 51 42.5Z', m: 'gold', depth: 5 },
      { d: rr(28.5, 13, 7, 30, 3.5), m: 'amber', depth: 2 },
    ],
    shadow: 23,
  },
  doc: {
    layers: [
      { d: 'M15 6H38L50 18V50A3 3 0 0 1 47 53H15A3 3 0 0 1 12 50V9A3 3 0 0 1 15 6Z', m: 'cream', depth: 4 },
      { d: 'M38 6V15A3 3 0 0 0 41 18H50Z', m: 'slate', depth: 0 },
      { d: 'M18.5 24H35M18.5 31H38M18.5 38H28', m: 'slate', depth: 0, stroke: 2.6 },
      { d: circle(43, 43, 10.5), m: 'gold', depth: 4 },
      { d: 'M38.3 43.2L41.8 46.7L47.8 40.2', m: 'emerald', depth: 1, stroke: 3.2 },
    ],
    shadow: 19,
  },
  clipboard: {
    layers: [
      { d: rr(13, 9, 38, 45, 5), m: 'emerald', depth: 4 },
      { d: rr(17.5, 15, 29, 34.5, 2), m: 'cream', depth: 1 },
      ...[24, 32, 40].map((y) => ({ d: `M21.5 ${y}l2.6 2.6l4.6-5`, m: 'emerald' as Material, depth: 0, stroke: 2.4 })),
      { d: 'M32 22.5H42M32 30.5H42M32 38.5H39', m: 'slate', depth: 0, stroke: 2.4 },
      { d: rr(24, 5, 16, 9, 3), m: 'gold', depth: 3 },
    ],
    shadow: 20,
  },
  hammer: {
    layers: [
      { d: 'M15.6 50.2L37.6 20.2L42.4 23.8L20.4 53.8Z', m: 'amber', depth: 3 },
      { d: 'M55.1 23.8L49.2 31.9L24.9 14.2L30.8 6.1Z', m: 'slate', depth: 5 },
      { d: 'M30.8 6.1L24.9 14.2L21 11.4L25.5 4Z', m: 'slate', depth: 4 },
    ],
    shadow: 18,
  },
  magnet: {
    layers: [
      { d: 'M20 14V30A12 12 0 0 0 44 30V14', m: 'red', depth: 4, stroke: 10 },
      { d: rr(15, 8, 10, 8.5, 1.6), m: 'slate', depth: 4 },
      { d: rr(39, 8, 10, 8.5, 1.6), m: 'slate', depth: 4 },
      { d: star(54, 47, 5, 1.6, 4), m: 'gold', depth: 1 },
      { d: star(9.5, 40, 3.6, 1.2, 4), m: 'gold', depth: 1 },
    ],
    shadow: 15,
  },
  check: {
    layers: [
      { d: circle(32, 30, 23), m: 'gold', depth: 4 },
      { d: 'M21.5 30.5L29 38L43 23.5', m: 'emerald', depth: 1, stroke: 6 },
    ],
    shadow: 18,
  },
  heart: {
    layers: [
      {
        d: 'M32 53C32 53 8 39 8 22.5C8 15 13.5 9.5 20.5 9.5C25.5 9.5 29.8 12.5 32 16.5C34.2 12.5 38.5 9.5 43.5 9.5C50.5 9.5 56 15 56 22.5C56 39 32 53 32 53Z',
        m: 'red',
        depth: 5,
      },
    ],
    shadow: 18,
  },
  alert: {
    layers: [
      {
        d: 'M28.5 9C30 6.4 34 6.4 35.5 9L56 46C57.5 48.7 55.6 52 52.5 52H11.5C8.4 52 6.5 48.7 8 46Z',
        m: 'red',
        depth: 5,
      },
      { d: 'M32 21V34', m: 'cream', depth: 1, stroke: 5 },
      { d: circle(32, 42.5, 3), m: 'cream', depth: 1 },
    ],
    shadow: 22,
  },
  coin: {
    layers: [
      { d: circle(32, 27, 22), m: 'gold', depth: 7 },
      { d: circle(32, 27, 17), m: 'amber', depth: 0 },
      {
        d: 'M38 19.5C36.5 17.5 34 16.5 31.5 16.5C28 16.5 25.5 18.5 25.5 21.5C25.5 28 38.5 25 38.5 32C38.5 35 36 37.5 32 37.5C29 37.5 26.5 36 25 34M32 13V41',
        m: 'cream',
        depth: 1,
        stroke: 3.2,
      },
    ],
    shadow: 20,
  },
  calculator: {
    layers: [
      { d: rr(14, 6, 36, 48, 5), m: 'emerald', depth: 4 },
      { d: rr(19, 11, 26, 10, 2), m: 'sky', depth: 0 },
      ...[26, 34.5, 43].flatMap((y, row) =>
        [19, 28.5, 38].map((x, col) => ({
          d: rr(x, y, 7, 6, 1.6),
          m: (row === 2 && col === 2 ? 'gold' : 'cream') as Material,
          depth: 1,
        }))
      ),
    ],
    shadow: 17,
  },
  lock: {
    layers: [
      { d: 'M22 28V20A10 10 0 0 1 42 20V28', m: 'slate', depth: 3, stroke: 6 },
      { d: rr(13, 27, 38, 27, 5), m: 'gold', depth: 5 },
      { d: circle(32, 38, 4), m: 'emerald', depth: 0 },
      { d: rr(30.5, 39, 3, 8, 1.5), m: 'emerald', depth: 0 },
    ],
    shadow: 19,
  },
  quote: {
    layers: [
      { d: 'M10 46V34C10 24 14 17 23 13L26 18.5C21 21 18.5 25 18.5 30H26V46Z', m: 'gold', depth: 4 },
      { d: 'M33 46V34C33 24 37 17 46 13L49 18.5C44 21 41.5 25 41.5 30H49V46Z', m: 'gold', depth: 4 },
    ],
    shadow: 20,
  },
  trophy: {
    layers: [
      { d: 'M19 15H11.5V20C11.5 26.5 15.5 30.5 21.5 30.5', m: 'gold', depth: 3, stroke: 3.6 },
      { d: 'M45 15H52.5V20C52.5 26.5 48.5 30.5 42.5 30.5', m: 'gold', depth: 3, stroke: 3.6 },
      { d: rr(29, 36, 6, 9, 1.2), m: 'amber', depth: 3 },
      { d: 'M18 8H46V21C46 31 40 37.5 32 37.5C24 37.5 18 31 18 21Z', m: 'gold', depth: 5 },
      { d: star(32, 20.5, 6.4, 2.7, 5), m: 'cream', depth: 1 },
      { d: rr(21, 44.5, 22, 8, 2.2), m: 'emerald', depth: 4 },
    ],
    shadow: 17,
  },
} satisfies Record<string, IconDef>

export type IconName = keyof typeof ICONS
export const ICON_NAMES = Object.keys(ICONS) as IconName[]

function LayerShape({ d, m, depth = 4, stroke, t }: Layer) {
  const mat = MATERIALS[m]
  const strokeProps = stroke
    ? { fill: 'none', strokeWidth: stroke, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
    : null
  const offsets = Array.from({ length: depth }, (_, i) => depth - i)

  return (
    <g>
      {offsets.map((k) => {
        const transform = `translate(${(k * DX).toFixed(2)} ${k})${t ? ` ${t}` : ''}`
        const tone = k === depth ? mat.edge : mat.side
        return strokeProps ? (
          <path key={k} d={d} transform={transform} {...strokeProps} stroke={tone} />
        ) : (
          <path key={k} d={d} transform={transform} fill={tone} />
        )
      })}
      {strokeProps ? (
        <path d={d} transform={t} {...strokeProps} stroke={`url(#i3s-${m})`} />
      ) : (
        <>
          <path d={d} transform={t} fill={`url(#i3-${m})`} stroke="url(#i3-rim)" strokeWidth={0.9} />
          {depth > 0 && <path d={d} transform={t} fill="url(#i3-gloss)" />}
        </>
      )}
    </g>
  )
}

interface Icon3DProps {
  name: IconName
  /** Rendered size in px (square). */
  size?: number
  className?: string
  /** Accessible label. Omit for decorative icons (the default). */
  title?: string
}

export function Icon3D({ name, size = 40, className, title }: Icon3DProps) {
  const icon: IconDef = ICONS[name]
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      // Inline size so container rules like shadcn Button's `[&_svg]:size-4` can't shrink it.
      style={{ width: size, height: size }}
      className={cn('icon3d inline-block flex-shrink-0 overflow-visible', className)}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <ellipse cx="32" cy="59.5" rx={icon.shadow ?? 19} ry="3.4" fill="url(#i3-shadow)" />
      {icon.layers.map((layer, i) => (
        <LayerShape key={i} {...layer} />
      ))}
    </svg>
  )
}

/** Shared gradients for every Icon3D on the page. Render once, near the top of <body>. */
export function Icon3DDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute', overflow: 'hidden' }}>
      <defs>
        {(Object.keys(MATERIALS) as Material[]).map((m) => {
          const [top, mid, bottom] = MATERIALS[m].face
          return (
            <g key={m}>
              <linearGradient id={`i3-${m}`} x1="0.15" y1="0" x2="0.45" y2="1">
                <stop offset="0" stopColor={top} />
                <stop offset="0.45" stopColor={mid} />
                <stop offset="1" stopColor={bottom} />
              </linearGradient>
              <linearGradient id={`i3s-${m}`} gradientUnits="userSpaceOnUse" x1="0" y1="6" x2="10" y2="58">
                <stop offset="0" stopColor={top} />
                <stop offset="0.45" stopColor={mid} />
                <stop offset="1" stopColor={bottom} />
              </linearGradient>
            </g>
          )
        })}
        <linearGradient id="i3-gloss" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.38" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="i3-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="1" stopColor="#000" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="i3-shadow">
          <stop offset="0" stopColor="#000" stopOpacity="0.55" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
