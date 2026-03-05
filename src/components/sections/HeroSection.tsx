import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MoleculeDecor from '@/components/ui/MoleculeDecor'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 80) }, [])

  const words = ['Tablets', 'Injections', 'Syrups', 'Ointments', 'Drops']
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length)
        setFade(true)
      }, 300)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 65% 35%, rgba(45,45,127,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 50% 70% at 15% 75%, rgba(61,61,158,0.05) 0%, transparent 60%)
          `,
        }}
      />
      <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />

      {/* Decorative pill shapes */}
      <div
        className="absolute top-24 right-16 w-64 h-28 rounded-full opacity-5 hidden xl:block"
        style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)', transform: 'rotate(-20deg)' }}
      />
      <div
        className="absolute bottom-32 right-48 w-40 h-16 rounded-full opacity-5 hidden xl:block"
        style={{ background: 'linear-gradient(135deg, #3d3d9e, #C9A84C)', transform: 'rotate(15deg)' }}
      />

      <MoleculeDecor
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] hidden xl:block"
        opacity={0.14}
      />

      <div className="container-xl relative z-10 py-36 w-full">
        {/* Eyebrow badges */}
        <div
          className="flex flex-wrap items-center gap-3 mb-10 transition-all duration-700"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(20px)' }}
        >
          {['ISO 9001:2015 Certified', 'WHO-GMP Compliant', 'Pan-India Distribution'].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border"
              style={{
                background: 'rgba(45,45,127,0.06)',
                borderColor: 'rgba(45,45,127,0.2)',
                color: '#1e1e5c',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#2D2D7F' }}
              />
              {badge}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold leading-[1.05] mb-8 transition-all duration-700"
          style={{
            fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
            color: '#0f172a',
            maxWidth: '780px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(24px)',
            transitionDelay: '100ms',
          }}
        >
          Trusted Pharma
          <br />
          Manufacturing for{' '}
          <span
            className="text-gradient"
            style={{
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.3s ease',
              display: 'inline-block',
              minWidth: '220px',
            }}
          >
            {words[wordIndex]}
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-lg md:text-xl leading-relaxed max-w-2xl mb-12 text-slate-500 font-body transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(24px)',
            transitionDelay: '200ms',
          }}
        >
          Ritoz Pharmaceutical Pvt. Ltd. is a leading Indian pharmaceutical manufacturer
          delivering 300+ high-quality, affordable healthcare products through our
          ISO-certified, WHO-GMP compliant facility to patients across India.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(24px)',
            transitionDelay: '300ms',
          }}
        >
          <Link to="/products" className="btn-primary">
            View Our Products
          </Link>
          <Link to="/contact" className="btn-outline">
            Become a Partner
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-10 border-t border-slate-100 transition-all duration-1000"
          style={{ opacity: mounted ? 1 : 0, transitionDelay: '500ms' }}
        >
          {[
            { value: '300+', label: 'Product SKUs' },
            { value: '10+', label: 'Years Experience' },
            { value: 'ISO', label: '9001:2015 Certified' },
            { value: '28+', label: 'States Served' },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-display font-bold text-gradient mb-1"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
              >
                {s.value}
              </div>
              <div className="text-sm font-semibold text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
