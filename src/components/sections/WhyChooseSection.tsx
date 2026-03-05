import { useInView } from '@/hooks/useInView'
import SectionLabel from '@/components/ui/SectionLabel'

const WHY_THREE = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'ISO 9001:2015 & WHO-GMP Certified',
    description: 'Every product manufactured under internationally recognised quality standards. Consistent potency, purity, and safety — guaranteed in every batch.',
    color: '#2D2D7F',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Transparent Partner Model',
    description: 'Clear partnership terms, no hidden charges, and full promotional support — visual aids, MR bags, and a dedicated team invested in your growth.',
    color: '#3d3d9e',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
      </svg>
    ),
    title: 'Pan-India Distribution',
    description: 'Reliable, on-time delivery across all 28 states. Our robust logistics network ensures your business stays stocked and patients stay served.',
    color: '#C9A84C',
  },
]

export default function WhyChooseSection() {
  const { ref, visible } = useInView()

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #f0fdf9 50%, #eff8ff 100%)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div ref={ref} className="container-xl relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)' }}
        >
          <SectionLabel number="03">Why Choose Us</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 leading-tight mt-2"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
          >
            Why Choose{' '}
            <span className="text-gradient">Ritoz Pharma</span>
          </h2>
          <p className="mt-3 text-slate-500 font-body max-w-lg mx-auto text-sm leading-relaxed">
            Manufacturing excellence, regulatory rigour, and unmatched partner support — all under one roof.
          </p>
        </div>

        {/* Exactly 3 equal cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {WHY_THREE.map((item, i) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(24px)',
                transitionDelay: `${i * 100}ms`,
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, box-shadow 0.3s`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${item.color}40` }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0' }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <h3 className="font-display font-bold text-slate-900 text-xl mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-body">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="h-0.5 rounded-full mt-6 mx-auto w-0 group-hover:w-12 transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}60)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
