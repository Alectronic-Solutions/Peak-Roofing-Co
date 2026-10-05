'use client'

import { useId, useState } from 'react'
import { Plus } from 'lucide-react'

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
  const idPrefix = `faq${useId().replace(/:/g, '')}`

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
        {items.map((item, i) => {
          const isOpen = open === i
          const panelId = `${idPrefix}-panel-${i}`
          const buttonId = `${idPrefix}-button-${i}`
          return (
            <div
              key={i}
              className={`rounded-2xl border transition-colors duration-300 ${
                isOpen ? 'border-gold-400/30 bg-white/[0.06]' : 'border-white/[0.08] bg-white/[0.04]'
              }`}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left transition-colors hover:bg-white/[0.03] sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-sm font-semibold leading-snug text-white sm:text-base">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? 'rotate-45 border-gold-400 bg-gold-500 text-forest-950' : 'border-white/15 text-gold-400'
                    }`}
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className={`overflow-hidden ${isOpen ? '' : 'invisible'}`}>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:px-6 sm:text-base">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
