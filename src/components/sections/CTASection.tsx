import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'

export default function CTASection() {
  const { ref, visible } = useInView()

  return (
    <>
      {/* ── Small CTA banner ─────────────────────────────────────────── */}
      <section
        className="py-16 overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #2D2D7F 0%, #3d3d9e 60%, #C9A84C 100%)' }}
      >
        {/* Subtle dot overlay */}
        <div className="absolute inset-0 bg-dot opacity-10 pointer-events-none" />

        <div
          ref={ref}
          className="container-xl relative z-10 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)' }}
        >
          <h2
            className="font-display font-bold text-white leading-tight mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Join Hands. Grow Together.
          </h2>
          <p className="text-white/75 font-body mb-8 text-lg">
            Be your own boss. Earn more. Grow faster with Ritoz.
          </p>
          <Link
            to="/opportunity"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 transition-all hover:scale-105 shadow-lg"
            style={{ color: '#2D2D7F' }}
          >
            Apply for Opportunity
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Contact info strip ────────────────────────────────────────── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {/* Call Us */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(45,45,127,0.1), rgba(61,61,158,0.1))', color: '#2D2D7F' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-1">Call Us</p>
                <a
                  href="tel:9173636128"
                  className="font-semibold text-slate-800 font-body hover:text-navy-600 transition-colors"
                >
                  +91 9173636128
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(45,45,127,0.1), rgba(61,61,158,0.1))', color: '#2D2D7F' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-1">Email Us</p>
                <a
                  href="mailto:ritozpharma@gmail.com"
                  className="font-semibold text-slate-800 font-body hover:text-navy-600 transition-colors"
                >
                  ritozpharma@gmail.com
                </a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(45,45,127,0.1), rgba(61,61,158,0.1))', color: '#2D2D7F' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-1">Visit Us</p>
                <p className="font-semibold text-slate-800 font-body">Gujarat, Ahmedabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
