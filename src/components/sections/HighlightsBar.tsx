import { useInView } from '@/hooks/useInView'
import { HIGHLIGHTS } from '@/data'

// Simple icon components matching the screenshot style
const ICONS: Record<string, JSX.Element> = {
  Globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Building2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v8h4" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11h-4" />
      <path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />
    </svg>
  ),
  BadgeCheck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  PackageOpen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"/>
      <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.4 1.92"/>
      <line x1="12" y1="22" x2="12" y2="11.5"/>
      <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"/>
    </svg>
  ),
}

export default function HighlightsBar() {
  const { ref, visible } = useInView(0.1)

  return (
    <section className="relative py-8 bg-slate-50 border-y border-slate-100">
      <div ref={ref} className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={item.label}
              className="group relative bg-white rounded-2xl p-7 border border-slate-100 hover:border-teal-200 transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, box-shadow 0.3s, border-color 0.3s`,
                boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
              }}
            >
              {/* Gradient accent top bar */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #0d9488, #2579eb)' }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,148,136,0.08), rgba(37,121,235,0.08))',
                  color: '#0d9488',
                }}
              >
                {ICONS[item.icon] ?? <span className="text-2xl">●</span>}
              </div>

              {/* Value */}
              <div
                className="font-display font-bold mb-0.5"
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  color: '#0f172a',
                  lineHeight: 1.2,
                }}
              >
                {item.value}{' '}
                <span className="text-gradient">{item.label}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 font-body mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
