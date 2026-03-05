import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import SectionLabel from '@/components/ui/SectionLabel'
import { PRODUCT_CATEGORIES } from '@/data'

// ─── Search bar ───────────────────────────────────────────────────────────────
function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-slate-400">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by category name, product type, or composition..."
        className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 font-body text-base focus:outline-none focus:border-navy-400 focus:ring-4 focus:ring-navy-50 transition-all shadow-sm"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

// ─── Category card ────────────────────────────────────────────────────────────
function CategoryCard({ cat, index, visible }: { cat: typeof PRODUCT_CATEGORIES[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${index * 60}ms, transform 0.55s ease ${index * 60}ms, box-shadow 0.3s, border-color 0.3s`,
        boxShadow: hovered ? `0 16px 48px ${cat.color}22` : '0 1px 8px rgba(0,0,0,0.04)',
        borderColor: hovered ? `${cat.color}50` : '#e2e8f0',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient bar */}
      <div className="h-1.5 w-full" style={{ background: cat.gradient }} />

      <div className="p-7 flex flex-col flex-1">
        {/* Icon circle */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${cat.color}12` }}
        >
          {cat.icon}
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-xl text-slate-900 mb-2 leading-snug"
        >
          {cat.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed font-body mb-5 flex-1">
          {cat.description}
        </p>

        {/* Form type pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cat.formTypes.slice(0, 3).map((f) => (
            <span
              key={f}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
              style={{ background: `${cat.color}10`, color: cat.color }}
            >
              {f}
            </span>
          ))}
          {cat.formTypes.length > 3 && (
            <span
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
              style={{ background: `${cat.color}08`, color: cat.color }}
            >
              +{cat.formTypes.length - 3} more
            </span>
          )}
        </div>

        {/* SKU count + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <span
              className="font-display font-bold text-lg"
              style={{ color: cat.color }}
            >
              {cat.skuCount}+
            </span>
            <span className="text-xs text-slate-400 font-mono ml-1">SKUs Available</span>
          </div>
          <Link
            to={`/products/${cat.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: cat.gradient, boxShadow: hovered ? `0 6px 20px ${cat.color}40` : 'none' }}
          >
            View Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Quality trust banner (image 3) ──────────────────────────────────────────
function QualityBanner() {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className="rounded-3xl overflow-hidden transition-all duration-700"
      style={{
        background: 'linear-gradient(135deg, #2D2D7F 0%, #3d3d9e 60%, #C9A84C 100%)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
      }}
    >
      <div className="px-10 py-14 text-center">
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
          Quality You Can Trust
        </h2>
        <p className="text-white/75 font-body max-w-2xl mx-auto leading-relaxed mb-10">
          All our products are manufactured under strict quality control measures with ISO 9001:2015
          certification and WHO-GMP compliance, ensuring the highest standards of pharmaceutical manufacturing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { top: 'ISO', bottom: 'Certified' },
            { top: 'WHO-GMP', bottom: 'Compliant' },
            { top: '300+', bottom: 'Product SKUs' },
            { top: 'CDSCO', bottom: 'Licensed' },
          ].map((b) => (
            <div
              key={b.top}
              className="px-7 py-4 rounded-xl text-center min-w-[110px]"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <div className="font-display font-bold text-white text-lg leading-tight">{b.top}</div>
              <div className="text-white/70 text-xs font-mono mt-0.5">{b.bottom}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── "Didn't find" CTA (image 3 bottom) ──────────────────────────────────────
function DidntFindSection() {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className="text-center py-16 transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)' }}
    >
      <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-3">
        Didn't find what you're looking for?
      </h2>
      <p className="text-slate-500 font-body text-lg mb-10 max-w-md mx-auto">
        Let us help you find the right products for your market needs.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="/Ritoz-Catalogue.pdf"
          download
          className="btn-primary inline-flex items-center gap-2"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Catalogue
        </a>
        <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Apply for Opportunity
        </Link>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const { ref: heroRef, visible: heroVisible } = useInView(0.05)
  const { ref: gridRef, visible: gridVisible } = useInView(0.05)

  const filtered = useMemo(() => {
    if (!search.trim()) return PRODUCT_CATEGORIES
    const q = search.toLowerCase()
    return PRODUCT_CATEGORIES.filter((c) =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.therapeuticUses.some((t) => t.toLowerCase().includes(q)) ||
      c.formTypes.some((f) => f.toLowerCase().includes(q)) ||
      c.sampleProducts.some((p) =>
        p.name.toLowerCase().includes(q) || p.composition.toLowerCase().includes(q)
      )
    )
  }, [search])

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #f0fdf9 0%, #eff8ff 60%, #fdf4ff 100%)' }}
      >
        <div className="absolute inset-0 bg-dot opacity-40 pointer-events-none" />
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none hidden xl:block"
          style={{ background: 'radial-gradient(circle, #2D2D7F, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-8 pointer-events-none hidden xl:block"
          style={{ background: 'radial-gradient(circle, #3d3d9e, transparent)', filter: 'blur(60px)' }} />

        <div
          ref={heroRef}
          className="container-xl relative z-10 transition-all duration-700"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(24px)' }}
        >
          <div className="text-center mb-12">
            <SectionLabel>Our Products</SectionLabel>
            <h1
              className="font-display font-bold text-slate-900 leading-tight mt-3 mb-5"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              300+ Pharmaceutical Products
              <br className="hidden md:block" />{' '}
              <span className="text-gradient">Across 10 Categories</span>
            </h1>
            <p className="text-lg text-slate-500 font-body max-w-2xl mx-auto leading-relaxed mb-10">
              Manufactured in our ISO 9001:2015 certified, WHO-GMP compliant facility in
              Changodar, Ahmedabad — delivering quality, consistency, and affordability.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a
                href="/Ritoz-Catalogue.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Our Catalogue
              </a>
              <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Contact for Opportunity
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <SearchBar value={search} onChange={setSearch} />

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { v: '300+', l: 'Total SKUs' },
              { v: '10', l: 'Categories' },
              { v: 'ISO', l: '9001:2015' },
              { v: 'WHO-GMP', l: 'Compliant' },
              { v: 'Pan-India', l: 'Distribution' },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-2">
                <span className="font-display font-bold text-gradient">{s.v}</span>
                <span className="text-sm text-slate-400 font-mono">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container-xl">
          <div
            ref={gridRef}
            className="transition-all duration-700"
            style={{ opacity: gridVisible ? 1 : 0 }}
          >
            {/* Section header */}
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel>Product Categories</SectionLabel>
                <h2 className="font-display font-bold text-slate-900 leading-tight mt-1" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                  {search ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} found` : 'All Product Categories'}
                </h2>
              </div>
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="text-sm font-mono text-navy-600 hover:text-navy-800 transition-colors flex items-center gap-1"
                >
                  Clear search ×
                </button>
              )}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((cat, i) => (
                  <CategoryCard key={cat.slug} cat={cat} index={i} visible={gridVisible} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 text-slate-400">
                <div className="text-5xl mb-4">🔍</div>
                <p className="font-display font-bold text-xl text-slate-600 mb-2">No categories found</p>
                <p className="font-body text-sm">Try searching for a different term or <button onClick={() => setSearch('')} className="text-navy-600 underline">clear the search</button>.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Quality trust banner ─────────────────────────────────────────── */}
      <section className="py-8 bg-white">
        <div className="container-xl">
          <QualityBanner />
        </div>
      </section>

      {/* ── Didn't find section ──────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-xl">
          <DidntFindSection />
        </div>
      </section>
    </>
  )
}
