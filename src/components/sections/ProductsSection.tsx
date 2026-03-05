import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import SectionLabel from '@/components/ui/SectionLabel'
import { PRODUCTS } from '@/data'

const PRODUCT_ICONS: Record<string, JSX.Element> = {
  Pill: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  ),
  Syringe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="m18 2 4 4" /><path d="m17 7 3-3" /><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" /><path d="m5 19-3 3" /><path d="m14 4 6 6" />
    </svg>
  ),
  FlaskConical: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M14 2v6l3.36 5.23A2 2 0 0 1 15.7 16H8.3a2 2 0 0 1-1.66-2.77L10 8V2" />
      <path d="M8.5 2h7" /><path d="M7 16h10" />
    </svg>
  ),
  Droplets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  ),
  Pipette: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
    </svg>
  ),
  TestTube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
      <path d="M8.5 2h7" /><path d="M14.5 16h-5" />
    </svg>
  ),
}

export default function ProductsSection() {
  const { ref, visible } = useInView()

  // Only show first 4 products
  const featured = PRODUCTS.slice(0, 4)

  return (
    <section className="relative py-20 bg-white" id="products">
      <div ref={ref} className="container-xl">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)' }}
        >
          <div className="max-w-xl">
            <SectionLabel number="02">Our Products</SectionLabel>
            <h2
              className="font-display font-bold text-slate-900 leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
            >
              Pharmaceutical Manufacturing
              <br className="hidden md:block" /> Range
            </h2>
            <p className="mt-3 text-slate-500 font-body leading-relaxed text-sm">
              300+ SKUs across all major categories — manufactured under ISO 9001:2015
              and WHO-GMP certified conditions.
            </p>
          </div>
        </div>

        {/* 4 product cards — 2x2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <div
              key={product.title}
              className="group relative bg-white rounded-2xl border border-slate-200 p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(28px)',
                transitionDelay: `${i * 80}ms`,
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, box-shadow 0.3s, border-color 0.3s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.boxShadow = `0 12px 40px ${product.color}20`
                el.style.borderColor = `${product.color}50`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.boxShadow = 'none'
                el.style.borderColor = '#e2e8f0'
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${product.color}, ${product.color}80)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${product.color}15, ${product.color}08)`,
                  color: product.color,
                }}
              >
                {PRODUCT_ICONS[product.icon]}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-snug">
                {product.title}
              </h3>

              {/* Short desc */}
              <p className="text-xs text-slate-500 leading-relaxed font-body mb-5 line-clamp-3">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {product.examples.slice(0, 2).map((ex) => (
                  <span
                    key={ex}
                    className="px-2 py-1 rounded-lg text-xs font-mono font-medium"
                    style={{ background: `${product.color}10`, color: product.color }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Explore all button */}
        <div
          className="flex justify-center mt-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '400ms' }}
        >
          <Link
            to="/products"
            className="btn-outline inline-flex items-center gap-2"
          >
            Explore All Product Categories
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
