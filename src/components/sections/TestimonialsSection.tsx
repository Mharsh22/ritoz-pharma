import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import SectionLabel from '@/components/ui/SectionLabel'
import { TESTIMONIALS } from '@/data'

export default function TestimonialsSection() {
  const { ref, visible } = useInView()
  const [active, setActive] = useState(0)

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(45,45,127,0.04) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="container-xl relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)' }}
        >
          <SectionLabel number="05">Testimonials</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 leading-tight mt-2"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
          >
            Trusted by Doctors,
            <br className="hidden md:block" /> Partners &amp; Pharmacists
          </h2>
        </div>

        {/* Large featured quote */}
        <div
          className="max-w-3xl mx-auto mb-12 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '150ms' }}
        >
          <div
            className="text-6xl font-display font-bold text-gradient leading-none mb-4"
            style={{ lineHeight: 0.8 }}
          >
            "
          </div>

          <blockquote className="text-xl md:text-2xl font-display text-slate-700 leading-relaxed italic" style={{ minHeight: '96px' }}>
            {TESTIMONIALS[active].quote}
          </blockquote>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold text-white shrink-0"
              style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' }}
            >
              {TESTIMONIALS[active].initials}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-800 font-body">{TESTIMONIALS[active].name}</div>
              <div className="text-xs font-mono" style={{ color: '#2D2D7F' }}>
                {TESTIMONIALS[active].role} · {TESTIMONIALS[active].location}
              </div>
            </div>
          </div>
        </div>

        {/* Clickable cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className="text-left rounded-2xl p-5 border w-full"
              style={{
                background: active === i
                  ? 'linear-gradient(135deg, rgba(45,45,127,0.06), rgba(61,61,158,0.06))'
                  : 'white',
                borderColor: active === i ? 'rgba(45,45,127,0.3)' : '#e2e8f0',
                boxShadow: active === i ? '0 4px 20px rgba(45,45,127,0.1)' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, background 0.3s, border-color 0.3s, box-shadow 0.3s`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold text-white shrink-0"
                  style={{ background: active === i ? 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' : '#cbd5e1' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 font-body leading-tight">{t.name}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: active === i ? '#2D2D7F' : '#94a3b8' }}>
                    {t.role}
                  </div>
                </div>
              </div>

              <div className="flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} viewBox="0 0 24 24" fill={active === i ? '#f59e0b' : '#e2e8f0'} className="w-3 h-3">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? '24px' : '8px',
                height: '8px',
                background: active === i ? 'linear-gradient(90deg, #2D2D7F, #3d3d9e)' : '#e2e8f0',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
