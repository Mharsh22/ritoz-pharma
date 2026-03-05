import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: 'white',
        borderBottom: scrolled ? '1px solid rgba(45,45,127,0.1)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav className="container-xl py-4 flex items-center justify-between">
        <Link to="/" aria-label="Ritoz Pharma Home">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium font-mono tracking-wide transition-all duration-200 relative group"
              style={{ color: isActive(item.href) ? '#2D2D7F' : '#475569' }}
            >
              {item.label}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-300 rounded"
                style={{
                  width: isActive(item.href) ? '100%' : '0%',
                  background: 'linear-gradient(90deg, #2D2D7F, #3d3d9e)',
                }}
              />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/opportunity" className="btn-primary text-sm">
            Partner With Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className="block h-0.5 bg-slate-700 transition-all duration-300 rounded origin-center"
              style={{ transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
            />
            <span
              className="block h-0.5 bg-slate-700 transition-all duration-200 rounded"
              style={{ opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)' }}
            />
            <span
              className="block h-0.5 bg-slate-700 transition-all duration-300 rounded origin-center"
              style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? '400px' : '0',
          background: 'rgba(255,255,255,0.98)',
        }}
      >
        <div className="container-xl pb-6 flex flex-col gap-1 border-t border-slate-100">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-3 py-3 rounded-lg font-mono text-sm font-medium transition-colors hover:bg-navy-50"
              style={{ color: isActive(item.href) ? '#2D2D7F' : '#475569' }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/opportunity" className="btn-primary mt-3 justify-center text-sm">
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  )
}
