import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import SectionLabel from '@/components/ui/SectionLabel'

export default function AboutSnippet() {
  const { ref, visible } = useInView()

  return (
    <section className="py-16 bg-white">
      <div ref={ref} className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)' }}
          >
            <SectionLabel>About Us</SectionLabel>
            <h2
              className="font-display font-bold text-slate-900 leading-tight mb-5"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
            >
              About{' '}
              <span className="text-gradient">Ritoz Pharmaceutical</span>
            </h2>
            <p className="text-slate-500 font-body leading-relaxed mb-4">
              Ritoz Pharmaceutical Pvt. Ltd. is a trusted name in the Indian pharmaceutical
              industry, dedicated to providing high-quality, affordable healthcare solutions.
              Based in Changodar, Ahmedabad, Gujarat.
            </p>
            <p className="text-slate-500 font-body leading-relaxed mb-8">
              With our <strong className="text-slate-700">ISO 9001:2015 certified</strong> and{' '}
              <strong className="text-slate-700">WHO-GMP compliant</strong> manufacturing facility,
              we ensure the highest standards in pharmaceutical manufacturing across 300+ product SKUs.
            </p>
            <Link
              to="/about"
              className="btn-primary inline-flex items-center gap-2"
            >
              Read More About Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — visual card */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(24px)',
              transitionDelay: '150ms',
            }}
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #eeeef7 0%, #eeeef7 100%)',
                minHeight: '320px',
              }}
            >
              {/* Background circles */}
              <div
                className="absolute -top-12 -right-12 w-56 h-56 rounded-full opacity-30"
                style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-20"
                style={{ background: 'linear-gradient(135deg, #3d3d9e, #C9A84C)' }}
              />

              {/* Content */}
              <div className="relative z-10 p-10 flex flex-col justify-between h-full min-h-[320px]">
                {/* Big pharma icon */}
                <div className="flex items-center justify-center flex-1">
                  <div
                    className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
                    </svg>
                  </div>
                </div>

                {/* Stat chips */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    { v: '300+', l: 'SKUs' },
                    { v: '10+', l: 'Years' },
                    { v: 'ISO', l: 'Certified' },
                    { v: '28+', l: 'States' },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="px-4 py-2 rounded-xl text-center"
                      style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}
                    >
                      <div className="font-display font-bold text-base text-gradient leading-none">{s.v}</div>
                      <div className="font-mono text-xs text-slate-500 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
