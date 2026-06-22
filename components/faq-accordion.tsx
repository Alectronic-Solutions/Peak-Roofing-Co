'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  outputSchema?: boolean
  schemaPageName?: string
}

export default function FaqAccordion({ items, outputSchema = false, schemaPageName = 'Page' }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  const schema = outputSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: schemaPageName,
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-white text-sm sm:text-base leading-snug">
                {item.q}
              </span>
              <span className="shrink-0 text-gold-500">
                {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {open === i && (
              <div className="px-6 pb-5">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
