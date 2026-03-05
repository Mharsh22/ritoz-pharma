import { useInView } from '@/hooks/useInView'
import SectionLabel from '@/components/ui/SectionLabel'

const AWARDS = [
  {
    badge: 'ISO 9001:2015 Certified Company',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    badge: 'WHO-GMP Certified Facilities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    badge: 'Trusted by Healthcare Professionals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  }
]

export default function AwardsCertifications() {
  const { ref, visible } = useInView()

  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #f0fdf9 60%, #eff8ff 100%)' }}
    >
      <div ref={ref} className="container-xl">
        {/* Header */}
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)' }}
        >
          <SectionLabel>Recognition</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 leading-tight mt-2"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            Awards &amp; Certifications
          </h2>
          <p className="mt-3 text-slate-500 font-body max-w-lg mx-auto text-sm leading-relaxed">
            Our certifications reflect our daily commitment to quality, safety, and regulatory compliance.
          </p>
        </div>

        {/* Badge pills row */}
        <div
          className="flex flex-wrap justify-center gap-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '150ms' }}
        >
          {AWARDS.map((a, i) => (
            <div
              key={a.badge}
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl border bg-white hover:shadow-md transition-all duration-300 cursor-default"
              style={{
                borderColor: 'rgba(45,45,127,0.2)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, box-shadow 0.3s, border-color 0.3s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(45,45,127,0.5)'
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45,45,127,0.04), rgba(61,61,158,0.04))'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(45,45,127,0.2)'
                e.currentTarget.style.background = 'white'
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(45,45,127,0.1), rgba(61,61,158,0.1))',
                  color: '#2D2D7F',
                }}
              >
                {a.icon}
              </div>
              <span className="font-semibold text-sm text-slate-700 font-body whitespace-nowrap">
                {a.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
