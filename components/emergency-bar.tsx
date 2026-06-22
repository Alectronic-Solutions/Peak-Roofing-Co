'use client'

import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'

export default function EmergencyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('emergencyBarDismissed')
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('emergencyBarDismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-red-600 text-white">
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        <a
          href="tel:+15555550100"
          className="flex items-center gap-2 font-bold text-sm flex-1"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <Phone className="w-4 h-4 shrink-0" />
          Storm damage? Call NOW: (555) 555-0100
        </a>
        <button
          onClick={dismiss}
          aria-label="Dismiss emergency bar"
          className="shrink-0 p-1 hover:bg-red-700 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
