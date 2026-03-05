import { useState, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import { PRODUCT_CATEGORIES } from '@/data'

type ViewMode = 'grid' | 'list'

// ─── Product card (grid view) ─────────────────────────────────────────────────
function ProductCardGrid({ product, color, gradient, index, visible }: {
  product: typeof PRODUCT_CATEGORIES[0]['sampleProducts'][0]
  color: string
  gradient: string
  index: number
  visible: boolean
}) {
  return (
    <div
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 50}ms, transform 0.5s ease ${index * 50}ms, box-shadow 0.3s`,
        borderTopColor: color,
        borderTopWidth: '2px',
      }}
    >
      {/* Product image placeholder */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color}08, ${color}15)` }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">💊</div>
          <span
            className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
            style={{ background: `${color}20`, color }}
          >
            {product.type}
          </span>
        </div>
        {/* Decorative circle */}
        <div
          className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10"
          style={{ background: gradient }}
        />
      </div>

      <div className="p-5">
        <h3
          className="font-display font-bold text-base text-slate-900 mb-1 leading-snug group-hover:text-navy-700 transition-colors"
          style={{ color: 'inherit' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = '')}
        >
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 font-body leading-relaxed mb-4">{product.composition}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg p-2.5" style={{ background: `${color}06` }}>
            <p className="font-mono text-xs text-slate-400 mb-0.5">Size</p>
            <p className="text-xs font-semibold text-slate-700 font-body">{product.size}</p>
          </div>
          <div className="rounded-lg p-2.5" style={{ background: `${color}06` }}>
            <p className="font-mono text-xs text-slate-400 mb-0.5">Packing</p>
            <p className="text-xs font-semibold text-slate-700 font-body">{product.packing}</p>
          </div>
        </div>
      </div>

      <div
        className="px-5 py-3 flex items-center justify-between border-t text-xs font-mono font-semibold"
        style={{ borderColor: `${color}15`, color, background: `${color}04` }}
      >
        <span>Enquire Now</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

// ─── Product row (list view) ──────────────────────────────────────────────────
function ProductRowList({ product, color, index, visible }: {
  product: typeof PRODUCT_CATEGORIES[0]['sampleProducts'][0]
  color: string
  index: number
  visible: boolean
}) {
  return (
    <div
      className="bg-white rounded-xl border border-slate-200 px-6 py-5 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md hover:border-opacity-50 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(12px)',
        transition: `opacity 0.45s ease ${index * 40}ms, transform 0.45s ease ${index * 40}ms, box-shadow 0.3s`,
        borderLeftColor: color,
        borderLeftWidth: '3px',
      }}
    >
      <div className="md:w-36 shrink-0">
        <span
          className="inline-flex px-2.5 py-1 rounded-lg text-xs font-mono font-semibold"
          style={{ background: `${color}12`, color }}
        >
          {product.type}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="font-display font-bold text-slate-900 text-base mb-0.5">{product.name}</h3>
        <p className="text-sm text-slate-500 font-body">{product.composition}</p>
      </div>
      <div className="flex gap-6 shrink-0">
        <div>
          <p className="font-mono text-xs text-slate-400 mb-0.5">Size</p>
          <p className="text-sm font-semibold text-slate-700 font-body">{product.size}</p>
        </div>
        <div>
          <p className="font-mono text-xs text-slate-400 mb-0.5">Packing</p>
          <p className="text-sm font-semibold text-slate-700 font-body">{product.packing}</p>
        </div>
      </div>
      <Link
        to="/contact"
        className="shrink-0 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
        style={{ background: color }}
      >
        Enquire →
      </Link>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function CategoryDetailPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const cat = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug)

  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const { ref: productsRef, visible: productsVisible } = useInView(0.05)

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return cat?.sampleProducts ?? []
    const q = search.toLowerCase()
    return (cat?.sampleProducts ?? []).filter(
      (p) => p.name.toLowerCase().includes(q) || p.composition.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)
    )
  }, [search, cat])

  if (!cat) return <Navigate to="/products" replace />

  // Other categories for bottom navigation
  const otherCats = PRODUCT_CATEGORIES.filter((c) => c.slug !== cat.slug).slice(0, 4)

  return (
    <>
      {/* ── Category Hero ─────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{ background: cat.gradient }}
      >
        <div className="absolute inset-0 bg-dot opacity-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden xl:block"
          style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.2), transparent)' }} />

        <div className="container-xl relative z-10">
          {/* Back link */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors font-mono text-sm mb-8"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h1
                    className="font-display font-bold text-white leading-tight"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                  >
                    {cat.title}
                  </h1>
                </div>
              </div>
              <p className="text-white/80 font-body text-lg leading-relaxed max-w-2xl mb-6">
                {cat.longDescription}
              </p>
              {/* Therapeutic uses */}
              <div className="flex flex-wrap gap-2">
                {cat.therapeuticUses.map((u) => (
                  <span
                    key={u}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold"
                    style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)' }}
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div
              className="shrink-0 rounded-2xl p-7 min-w-[180px] text-center"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <div className="font-display font-bold text-white text-4xl mb-1">{cat.skuCount}+</div>
              <div className="text-white/70 text-sm font-mono">Products Available</div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
                >
                  Enquire Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search + View toggle ──────────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container-xl py-4 flex flex-col sm:flex-row items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-slate-400">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-body text-slate-800 placeholder-slate-400 focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-50 transition-all bg-white"
            />
          </div>

          {/* Result count */}
          <span className="text-sm text-slate-400 font-mono hidden sm:block">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </span>

          {/* View toggle */}
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 p-1 bg-slate-50">
            {(['grid', 'list'] as ViewMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className="p-2 rounded-lg transition-all"
                style={{
                  background: viewMode === mode ? 'white' : 'transparent',
                  color: viewMode === mode ? cat.color : '#94a3b8',
                  boxShadow: viewMode === mode ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                }}
                aria-label={`${mode} view`}
              >
                {mode === 'grid' ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products grid/list ────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50">
        <div ref={productsRef} className="container-xl">
          {filteredProducts.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredProducts.map((p, i) => (
                  <ProductCardGrid key={p.name} product={p} color={cat.color} gradient={cat.gradient} index={i} visible={productsVisible} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {/* List header */}
                <div className="hidden md:grid grid-cols-12 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-400 bg-white border border-slate-100">
                  <span className="col-span-2">Type</span>
                  <span className="col-span-4">Product Name</span>
                  <span className="col-span-3">Composition</span>
                  <span className="col-span-1">Size</span>
                  <span className="col-span-1">Packing</span>
                  <span className="col-span-1"></span>
                </div>
                {filteredProducts.map((p, i) => (
                  <ProductRowList key={p.name} product={p} color={cat.color} index={i} visible={productsVisible} />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-display font-bold text-xl text-slate-600 mb-2">No products found</p>
              <p className="text-sm text-slate-400 font-body">
                Try a different search or{' '}
                <button onClick={() => setSearch('')} className="underline" style={{ color: cat.color }}>
                  clear the search
                </button>.
              </p>
            </div>
          )}

          {/* Note about full range */}
          <div
            className="mt-10 rounded-2xl p-7 text-center"
            style={{ background: `${cat.color}06`, border: `1px solid ${cat.color}20` }}
          >
            <p className="font-body text-slate-600 text-sm mb-4">
              These are <strong>sample products</strong> from our {cat.title} range.
              We manufacture <strong>{cat.skuCount}+ SKUs</strong> in this category.
              Contact us or download our full catalogue for the complete product list.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="/Ritoz-Catalogue.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: cat.gradient }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Full Catalogue
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:bg-slate-50"
                style={{ borderColor: `${cat.color}40`, color: cat.color }}
              >
                Request Custom Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other categories ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-8">
            Explore Other Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCats.map((c) => (
              <Link
                key={c.slug}
                to={`/products/${c.slug}`}
                className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 hover:shadow-md hover:border-navy-200 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${c.color}12` }}
                >
                  {c.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-800 font-body leading-snug">{c.shortTitle}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: c.color }}>{c.skuCount}+ SKUs</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
