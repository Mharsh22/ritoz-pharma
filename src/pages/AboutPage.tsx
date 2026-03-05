import { Link } from 'react-router-dom'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import CTASection from '@/components/sections/CTASection'
import { useInView } from '@/hooks/useInView'

const THERAPEUTIC_SEGMENTS = [
  { name: 'Antibiotics',                icon: '💊', color: '#2D2D7F' },
  { name: 'Anticold Medications',       icon: '🌡️', color: '#3d3d9e' },
  { name: 'Antiulcer Agents',           icon: '⚕️', color: '#C9A84C' },
  { name: 'Antiallergics',              icon: '🧬', color: '#dc2626' },
  { name: 'Appetite Stimulants',        icon: '💉', color: '#d97706' },
  { name: 'Analgesics',                 icon: '🔬', color: '#059669' },
  { name: 'Injectables',                icon: '💉', color: '#2D2D7F' },
  { name: 'Topical Creams & Ointments', icon: '🧴', color: '#3d3d9e' },
  { name: 'Oral Liquids & Syrups',      icon: '🍶', color: '#C9A84C' },
  { name: 'Nutraceutical Supplements',  icon: '🌿', color: '#059669' },
  { name: 'Derma',                      icon: '🩺', color: '#dc2626' },
  { name: 'BP & Cardiac',               icon: '❤️', color: '#d97706' },
]

const WHY_RITOZ = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'ISO 9001:2015 Certified',
    description: 'Every product manufactured under internationally recognised quality management standards — consistently, batch after batch.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
        <path d="M6 12H4a2 2 0 0 0-2 2v8h4"/><path d="M18 9h2a2 2 0 0 1 2 2v11h-4"/>
        <path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
      </svg>
    ),
    title: '10+ Years of Industry Experience',
    description: 'Over a decade of expertise in pharmaceutical manufacturing, supply chain, and partner support across the Indian market.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 0-2-2v-4m0 0h18"/>
      </svg>
    ),
    title: 'Wide Therapeutic Coverage',
    description: '300+ SKUs spanning antibiotics, cardiac, derma, nutraceuticals, injectables, and more — a comprehensive range under one roof.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Strict Quality Assurance',
    description: 'In-house QC laboratory with qualified pharmacists conducting rigorous testing at every stage of the manufacturing process.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Customer-Centric Approach',
    description: 'Transparent partnership terms, dedicated support, and a genuine commitment to the success of every distributor and franchise partner.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
    title: 'Trusted by Healthcare Professionals',
    description: 'Preferred by thousands of doctors, pharmacists, and healthcare professionals across India for reliable, efficacious formulations.',
  },
]

function StatsBar() {
  const { ref, visible } = useInView(0.1)
  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        { value: '10+',  label: 'Years of Experience',  sub: 'In pharmaceutical manufacturing' },
        { value: '300+', label: 'Product SKUs',          sub: 'Across all therapeutic categories' },
        { value: '12',   label: 'Therapy Segments',      sub: 'Wide coverage portfolio' },
        { value: 'ISO',  label: '9001:2015 Certified',   sub: 'Quality management standard' },
      ].map((s, i) => (
        <div
          key={s.label}
          className="rounded-2xl p-7 border border-slate-100 hover:border-navy-200 hover:shadow-md transition-all text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(45,45,127,0.03), rgba(61,61,158,0.03))',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, box-shadow 0.3s`,
          }}
        >
          <div className="font-display font-bold text-gradient mb-1" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
            {s.value}
          </div>
          <div className="text-sm font-semibold text-slate-700 font-body mb-0.5">{s.label}</div>
          <div className="text-xs text-slate-400 font-body">{s.sub}</div>
        </div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  const intro = useInView()
  const products = useInView()
  const why = useInView()
  const vision = useInView()
  const contact = useInView()

  return (
    <>
      <PageHero
        label="About Us"
        title="Committed to Quality, Driven by Care"
        subtitle="Ritoz Pharmaceutical Pvt. Ltd. — a trusted name in the Indian pharmaceutical industry, delivering high-quality, affordable medicines that improve lives and promote well-being."
      />

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
            <div
              ref={intro.ref}
              className="transition-all duration-700"
              style={{ opacity: intro.visible ? 1 : 0, transform: intro.visible ? 'none' : 'translateY(24px)' }}
            >
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-display font-bold text-slate-900 leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                Access to Effective Healthcare is a Right, Not a Privilege
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed font-body">
                <p>
                  Ritoz Pharmaceutical Pvt. Ltd., based in Ahmedabad, Gujarat, is a trusted name
                  in the pharmaceutical industry. With over a decade of experience in healthcare
                  and an <strong className="text-slate-700">ISO 9001:2015 certification</strong>, we are dedicated to delivering
                  high-quality, affordable medicines that improve lives and promote well-being.
                </p>
                <p>
                  Our unwavering commitment to excellence, innovation, and integrity has made us
                  a preferred choice among healthcare professionals and patients across the country.
                </p>
                <p>
                  At Ritoz, our mission is to provide premium quality pharmaceutical products that
                  meet the evolving needs of the medical community — backed by world-class
                  manufacturing standards, ethical business practices, and a customer-first approach
                  that sets us apart in the industry.
                </p>
              </div>
            </div>

            {/* Certification badges */}
            <div
              className="transition-all duration-700 delay-100"
              style={{ opacity: intro.visible ? 1 : 0, transform: intro.visible ? 'none' : 'translateY(24px)' }}
            >
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { label: 'ISO 9001:2015', sub: 'Quality Management System', icon: '🏆', color: '#2D2D7F' },
                  { label: 'CDSCO Licensed', sub: 'Central Drug Authority', icon: '⚕️', color: '#3d3d9e' },
                  { label: 'GJ-ADR-198800', sub: 'Drug Licence No.', icon: '📋', color: '#C9A84C' },
                  { label: 'GJ-ADR-198801', sub: 'Drug Licence No.', icon: '📋', color: '#d97706' },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl p-6 text-center border border-slate-100 hover:shadow-md transition-shadow"
                    style={{ background: `${c.color}06` }}
                  >
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <div className="font-display font-bold text-base mb-1" style={{ color: c.color }}>{c.label}</div>
                    <div className="text-xs text-slate-500 font-body">{c.sub}</div>
                  </div>
                ))}
              </div>
              {/* GSTIN */}
              <div
                className="rounded-xl px-5 py-4 flex items-center gap-3 border"
                style={{ background: 'rgba(45,45,127,0.04)', borderColor: 'rgba(45,45,127,0.15)' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-4 h-4">
                    <rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">GSTIN</span>
                  <p className="font-mono text-sm font-semibold text-slate-700">24AALCR3050K1ZB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <StatsBar />
        </div>
      </section>

      {/* Therapeutic Segments */}
      <section className="py-20 bg-slate-50">
        <div
          ref={products.ref}
          className="container-xl transition-all duration-700"
          style={{ opacity: products.visible ? 1 : 0, transform: products.visible ? 'none' : 'translateY(24px)' }}
        >
          <div className="text-center mb-12">
            <SectionLabel>Our Product Range</SectionLabel>
            <h2 className="font-display font-bold text-slate-900 leading-tight mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              Extensive Portfolio Across Therapeutic Categories
            </h2>
            <p className="mt-4 text-slate-500 font-body max-w-2xl mx-auto leading-relaxed">
              Each formulation is developed with precision and care to ensure optimal therapeutic
              results — whether it's a critical care injectable or a daily wellness supplement.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {THERAPEUTIC_SEGMENTS.map((seg, i) => (
              <div
                key={seg.name}
                className="bg-white rounded-xl border border-slate-200 px-5 py-5 flex items-center gap-3 hover:border-navy-300 hover:shadow-md transition-all duration-300 cursor-default"
                style={{
                  opacity: products.visible ? 1 : 0,
                  transform: products.visible ? 'none' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 50}ms, transform 0.5s ease ${i * 50}ms, box-shadow 0.3s, border-color 0.3s`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                  style={{ background: `${seg.color}12` }}
                >
                  {seg.icon}
                </div>
                <span className="text-sm font-semibold text-slate-700 font-body leading-snug">{seg.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-slate-400 font-body">
            Every product reflects our commitment to health and quality.
          </p>
        </div>
      </section>

      {/* Why Choose Ritoz */}
      <section className="py-20 bg-white">
        <div
          ref={why.ref}
          className="container-xl transition-all duration-700"
          style={{ opacity: why.visible ? 1 : 0, transform: why.visible ? 'none' : 'translateY(24px)' }}
        >
          <div className="text-center mb-12">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-display font-bold text-slate-900 leading-tight mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              Why Choose <span className="text-gradient">Ritoz?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_RITOZ.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7 hover:border-navy-300 hover:shadow-lg transition-all duration-300 group"
                style={{
                  opacity: why.visible ? 1 : 0,
                  transform: why.visible ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, box-shadow 0.3s, border-color 0.3s`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(45,45,127,0.08), rgba(61,61,158,0.08))',
                    color: '#2D2D7F',
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        className="py-20 overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #f0fdf9 0%, #eff8ff 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div
          ref={vision.ref}
          className="container-xl relative z-10 transition-all duration-700"
          style={{ opacity: vision.visible ? 1 : 0, transform: vision.visible ? 'none' : 'translateY(24px)' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Our Vision</SectionLabel>
            <h2 className="font-display font-bold text-slate-900 leading-tight mt-2 mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              A Globally Recognized Pharmaceutical Company
            </h2>
            <div
              className="rounded-2xl p-10 border"
              style={{
                background: 'rgba(255,255,255,0.8)',
                borderColor: 'rgba(45,45,127,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                className="text-5xl font-display font-bold text-gradient leading-none mb-6"
                style={{ lineHeight: 0.8 }}
              >
                "
              </div>
              <p className="text-xl font-display text-slate-700 leading-relaxed italic">
                To become a globally recognized pharmaceutical company known for quality,
                innovation, and trust — improving lives through reliable and accessible
                healthcare solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div
          ref={contact.ref}
          className="container-xl transition-all duration-700"
          style={{ opacity: contact.visible ? 1 : 0, transform: contact.visible ? 'none' : 'translateY(24px)' }}
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>Find Us</SectionLabel>
              <h2 className="font-display font-bold text-slate-900 leading-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                Ritoz Pharmaceutical Pvt. Ltd.
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    ),
                    label: 'Address',
                    content: '21, Skyline Infrahub, B/H Intas Pharma\nMatoda Patiya, Changodar\nAhmedabad – 382210, Gujarat',
                    href: undefined,
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    ),
                    label: 'Phone',
                    content: '9173636128',
                    href: 'tel:9173636128',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    ),
                    label: 'Email',
                    content: 'ritozpharma@gmail.com',
                    href: 'mailto:ritozpharma@gmail.com',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>
                      </svg>
                    ),
                    label: 'GSTIN',
                    content: '24AALCR3050K1ZB',
                    href: undefined,
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
                        <path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
                      </svg>
                    ),
                    label: 'D.L. Nos.',
                    content: 'GJ-ADR-198800, GJ-ADR-198801',
                    href: undefined,
                  },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: 'linear-gradient(135deg, rgba(45,45,127,0.1), rgba(61,61,158,0.1))',
                        color: '#2D2D7F',
                      }}
                    >
                      {row.icon}
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-0.5">{row.label}</p>
                      {row.href ? (
                        <a href={row.href} className="text-slate-700 hover:text-navy-600 transition-colors font-body text-sm">
                          {row.content}
                        </a>
                      ) : (
                        <p className="text-slate-700 font-body text-sm whitespace-pre-line leading-relaxed">{row.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(45,45,127,0.06), rgba(61,61,158,0.06))',
                border: '1px solid rgba(45,45,127,0.15)',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-7 h-7">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                Partner With Ritoz
              </h3>
              <p className="text-slate-500 font-body text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                Join our growing network of franchise partners and distributors across India.
                Transparent terms, full marketing support, and timely supply — guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get In Touch
                </Link>
                <Link to="/products" className="btn-outline">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
