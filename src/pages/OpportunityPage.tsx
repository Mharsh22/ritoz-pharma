import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import SectionLabel from '@/components/ui/SectionLabel'
import MoleculeDecor from '@/components/ui/MoleculeDecor'
import { TESTIMONIALS } from '@/data'

// ─── Data ─────────────────────────────────────────────────────────────────────

const WHY_PARTNER = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'Quality Products',
    subtitle: 'ISO Certified Formulations',
    desc: 'All products manufactured under ISO 9001:2015 and WHO-GMP certified conditions. Consistent quality, every batch.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Marketing Support',
    subtitle: 'Complete Promotional Assistance',
    desc: 'Visual aids, product cards, MR bags, samples, and dedicated field support — everything you need to succeed.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
    title: 'Transparent Dealings',
    subtitle: 'Clear Terms & Honest Practices',
    desc: 'No hidden charges, no pressure targets. Honest business practices and clear agreements from day one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Monopoly Rights',
    subtitle: 'Exclusive Territory Coverage',
    desc: 'Get exclusive rights in your district or area. No internal competition — your territory is fully protected.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
        <path d="M12 3v6"/>
      </svg>
    ),
    title: '300+ Products',
    subtitle: 'Massive Ready Portfolio',
    desc: 'A comprehensive range across 10+ therapeutic categories — antibiotics, cardiac, derma, nutraceuticals, and more.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Low Investment',
    subtitle: 'High Return Potential',
    desc: 'Start your own pharma business with minimal capital. Be your own boss with maximum support from day one.',
  },
]

const STEPS = [
  {
    num: '1',
    title: 'Submit Application',
    desc: 'Fill out the opportunity inquiry form below with your details and area of interest.',
    color: '#2D2D7F',
  },
  {
    num: '2',
    title: 'Initial Discussion',
    desc: 'Our team will contact you for a detailed discussion about your goals and territory.',
    color: '#3d3d9e',
  },
  {
    num: '3',
    title: 'Agreement Signing',
    desc: 'Finalize transparent terms and sign the opportunity agreement with clear conditions.',
    color: '#C9A84C',
  },
  {
    num: '4',
    title: 'Start Business',
    desc: 'Begin operations with our complete marketing support, products, and dedicated assistance.',
    color: '#d97706',
  },
]

const INDIAN_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh',
  'Uttarakhand','West Bengal','Delhi','Jammu & Kashmir','Ladakh',
]

// ─── Why Partner card ─────────────────────────────────────────────────────────
function WhyCard({ item, index, visible }: { item: typeof WHY_PARTNER[0]; index: number; visible: boolean }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className="bg-white rounded-2xl border p-8 flex flex-col items-center text-center transition-all duration-300 cursor-default"
      style={{
        borderColor: hov ? 'rgba(45,45,127,0.35)' : '#e2e8f0',
        boxShadow: hov ? '0 12px 40px rgba(45,45,127,0.1)' : '0 1px 6px rgba(0,0,0,0.03)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, box-shadow 0.3s, border-color 0.3s`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Icon circle */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300"
        style={{
          background: hov
            ? 'linear-gradient(135deg, #2D2D7F, #3d3d9e)'
            : 'linear-gradient(135deg, rgba(45,45,127,0.1), rgba(61,61,158,0.1))',
          color: hov ? '#fff' : '#2D2D7F',
        }}
      >
        {item.icon}
      </div>
      <h3 className="font-display font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
      <p className="font-mono text-xs mb-3" style={{ color: '#2D2D7F' }}>{item.subtitle}</p>
      <p className="text-sm text-slate-500 font-body leading-relaxed">{item.desc}</p>
    </div>
  )
}

// ─── Testimonials strip ───────────────────────────────────────────────────────
function TestimonialsStrip() {
  const { ref, visible } = useInView()
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="container-xl">
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)' }}
        >
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-display font-bold text-slate-900 leading-tight mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            What Our Partners Say
          </h2>
        </div>

        {/* Large quote */}
        <div
          className="max-w-3xl mx-auto mb-12 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '150ms' }}
        >
          <div className="text-6xl font-display font-bold text-gradient leading-none mb-4" style={{ lineHeight: 0.8 }}>"</div>
          <blockquote
            className="text-xl md:text-2xl font-display text-slate-700 leading-relaxed italic transition-all duration-500"
            style={{ minHeight: '88px' }}
          >
            {TESTIMONIALS[active].quote}
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' }}
            >
              {TESTIMONIALS[active].initials}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-800 font-body">{TESTIMONIALS[active].name}</div>
              <div className="text-xs font-mono" style={{ color: '#2D2D7F' }}>{TESTIMONIALS[active].role} · {TESTIMONIALS[active].location}</div>
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className="text-left rounded-2xl p-5 border transition-all duration-300 w-full"
              style={{
                background: active === i ? 'linear-gradient(135deg, rgba(45,45,127,0.06), rgba(61,61,158,0.06))' : 'white',
                borderColor: active === i ? 'rgba(45,45,127,0.3)' : '#e2e8f0',
                boxShadow: active === i ? '0 4px 20px rgba(45,45,127,0.1)' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, background 0.3s, border-color 0.3s`,
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
                  <div className="text-xs font-mono mt-0.5" style={{ color: active === i ? '#2D2D7F' : '#94a3b8' }}>{t.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} viewBox="0 0 24 24" fill={active === i ? '#f59e0b' : '#e2e8f0'} className="w-3 h-3">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Dots */}
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

// ─── Main page ────────────────────────────────────────────────────────────────
export default function OpportunityPage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 80) }, [])

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '',
    state: '', experience: '', message: ''
  })

  const why     = useInView(0.05)
  const steps   = useInView(0.05)
  const formSec = useInView(0.05)

  const update = (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-body text-slate-800 placeholder-slate-400 focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-50 transition-all bg-white"

  return (
    <>
      {/* ── Hero — light, matching other pages ─────────────────────── */}
      <section
        className="relative pt-36 pb-24 overflow-hidden bg-white"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 65% 35%, rgba(45,45,127,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 50% 70% at 10% 80%, rgba(61,61,158,0.05) 0%, transparent 60%),
            #fff
          `,
        }}
      >
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        {/* Decorative shapes */}
        <div
          className="absolute top-28 right-20 w-56 h-24 rounded-full opacity-5 hidden xl:block"
          style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)', transform: 'rotate(-18deg)' }}
        />
        <div
          className="absolute bottom-16 right-56 w-36 h-14 rounded-full opacity-5 hidden xl:block"
          style={{ background: 'linear-gradient(135deg, #3d3d9e, #C9A84C)', transform: 'rotate(12deg)' }}
        />
        <MoleculeDecor
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden xl:block"
          opacity={0.13}
        />

        <div className="container-xl relative z-10">
          {/* Badge */}
          <div
            className="flex flex-wrap items-center gap-3 mb-10 transition-all duration-700"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(20px)' }}
          >
            {['PCD Franchise', 'Distribution', 'Contract Manufacturing'].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border"
                style={{ background: 'rgba(45,45,127,0.06)', borderColor: 'rgba(45,45,127,0.2)', color: '#1e1e5c' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#2D2D7F' }} />
                {b}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold leading-[1.05] mb-6 transition-all duration-700"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
              color: '#0f172a',
              maxWidth: '820px',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(24px)',
              transitionDelay: '100ms',
            }}
          >
            Join Hands.{' '}
            <span className="text-gradient">Grow Together.</span>
          </h1>

          {/* Sub tagline */}
          <p
            className="font-display text-xl md:text-2xl text-slate-600 mb-4 transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(20px)',
              transitionDelay: '160ms',
              maxWidth: '600px',
              fontStyle: 'italic',
            }}
          >
            Be your own boss. Earn more. Grow faster with Ritoz.
          </p>

          <p
            className="text-lg leading-relaxed max-w-xl mb-12 text-slate-500 font-body transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(20px)',
              transitionDelay: '200ms',
            }}
          >
            Join our nationwide network of franchise partners and distributors.
            300+ ISO-certified products, monopoly rights in your area, and a team
            fully invested in your growth.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 transition-all duration-700"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(20px)', transitionDelay: '280ms' }}
          >
            <a href="#inquiry-form" className="btn-primary inline-flex items-center gap-2">
              Apply for Opportunity
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:9173636128"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Us Now
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-slate-100 transition-all duration-1000"
            style={{ opacity: mounted ? 1 : 0, transitionDelay: '400ms' }}
          >
            {[
              { value: '300+', label: 'Products to sell' },
              { value: '10+',  label: 'Years established' },
              { value: '28+',  label: 'States served' },
              { value: 'ISO',  label: '9001:2015 certified' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-gradient mb-1" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
                  {s.value}
                </div>
                <div className="text-sm font-semibold text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Partner With Ritoz ────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div
          ref={why.ref}
          className="container-xl transition-all duration-700"
          style={{ opacity: why.visible ? 1 : 0 }}
        >
          <div className="text-center mb-14">
            <SectionLabel>Why Partner</SectionLabel>
            <h2 className="font-display font-bold text-slate-900 leading-tight mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Why Partner With{' '}
              <span className="text-gradient">Ritoz?</span>
            </h2>
            <p className="mt-4 text-slate-500 font-body max-w-xl mx-auto">
              Everything you need to build and grow a successful pharmaceutical business — under one trusted name.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {WHY_PARTNER.map((item, i) => (
              <WhyCard key={item.title} item={item} index={i} visible={why.visible} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps to Get Started ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div
          ref={steps.ref}
          className="container-xl transition-all duration-700"
          style={{ opacity: steps.visible ? 1 : 0, transform: steps.visible ? 'none' : 'translateY(24px)' }}
        >
          <div className="text-center mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-display font-bold text-slate-900 leading-tight mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Steps to Get Started
            </h2>
            <p className="mt-4 text-slate-500 font-body max-w-lg mx-auto">
              From application to your first order — we make it simple, fast, and fully supported.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line — desktop */}
            <div
              className="absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px hidden md:block"
              style={{ background: 'linear-gradient(to right, #2D2D7F, #3d3d9e, #C9A84C, #d97706)', opacity: 0.3 }}
            />

            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="flex flex-col items-center text-center relative"
                style={{
                  opacity: steps.visible ? 1 : 0,
                  transform: steps.visible ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                }}
              >
                {/* Number bubble */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-xl mb-6 relative z-10 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}, ${s.color}bb)`,
                    boxShadow: `0 8px 24px ${s.color}30`,
                  }}
                >
                  {s.num}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <TestimonialsStrip />

      {/* ── Opportunity Inquiry Form ──────────────────────────────────── */}
      <section
        className="py-20"
        id="inquiry-form"
        style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #f0fdf9 50%, #eff8ff 100%)' }}
      >
        <div
          ref={formSec.ref}
          className="container-xl transition-all duration-700"
          style={{ opacity: formSec.visible ? 1 : 0, transform: formSec.visible ? 'none' : 'translateY(24px)' }}
        >
          <div className="text-center mb-12">
            <SectionLabel>Apply Now</SectionLabel>
            <h2 className="font-display font-bold text-slate-900 leading-tight mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Opportunity Inquiry Form
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div
                className="rounded-2xl p-16 text-center border"
                style={{ background: 'white', borderColor: 'rgba(45,45,127,0.2)', boxShadow: '0 8px 40px rgba(45,45,127,0.08)' }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-9 h-9">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">Inquiry Received!</h3>
                <p className="text-slate-500 font-body max-w-sm mx-auto mb-8 leading-relaxed">
                  Thank you for your interest in partnering with Ritoz Pharmaceutical.
                  Our team will reach out within 48 hours.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/products" className="btn-primary text-sm">Browse Products →</Link>
                  <Link to="/contact" className="btn-outline text-sm">Contact Us</Link>
                </div>
              </div>
            ) : (
              <div
                className="rounded-2xl border bg-white p-10 shadow-sm"
                style={{ borderColor: 'rgba(45,45,127,0.12)', boxShadow: '0 4px 32px rgba(45,45,127,0.06)' }}
              >
                <h3 className="font-display font-bold text-xl text-slate-900 text-center mb-2">
                  Ready to Start Your Journey? Let's Connect!
                </h3>
                <p className="text-slate-500 text-sm font-body text-center mb-8">
                  Fill in your details and we'll get back to you within 48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Full Name *</label>
                      <input required type="text" placeholder="Enter your full name" value={form.name} onChange={update('name')} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Email Address *</label>
                      <input required type="email" placeholder="Enter your email" value={form.email} onChange={update('email')} className={inputClass} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Phone Number *</label>
                      <input required type="tel" placeholder="Enter your phone number" value={form.phone} onChange={update('phone')} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">City *</label>
                      <input required type="text" placeholder="Enter your city" value={form.city} onChange={update('city')} className={inputClass} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">State *</label>
                      <select required value={form.state} onChange={update('state')} className={inputClass}>
                        <option value="">Select your state</option>
                        {INDIAN_STATES.map((st) => <option key={st}>{st}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Experience in Pharma</label>
                      <select value={form.experience} onChange={update('experience')} className={inputClass}>
                        <option value="">Select experience</option>
                        <option>Fresher / New to pharma</option>
                        <option>1–3 years</option>
                        <option>3–5 years</option>
                        <option>5–10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your business goals and any questions you have..."
                      value={form.message}
                      onChange={update('message')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    Submit Inquiry →
                  </button>

                  <p className="text-xs text-slate-400 text-center font-body pt-1">
                    We respond within 48 hours. Your information is kept confidential.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
