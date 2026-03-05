import { Link } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/data'

export default function Footer() {
  return (
    <footer className="text-white bg-[#1e1e5c]">
      <div className="container-xl py-16">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="bg-white inline-block p-2.5 rounded-xl mb-2">
              <Logo size="md" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-300 max-w-sm font-body">
              Ritoz Pharmaceutical Pvt. Ltd. is a trusted name in the Indian pharmaceutical
              industry, delivering high-quality, affordable medicines from our ISO 9001:2015
              certified manufacturing facility in Changodar, Ahmedabad.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['ISO 9001:2015', 'WHO-GMP', 'CDSCO Licensed'].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold border border-white/20 text-teal-300 bg-white/5"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-5 font-semibold opacity-80">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors font-body font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-5 font-semibold opacity-80">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-body">
              <li>
                <a
                  href="mailto:ritozpharma@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  ritozpharma@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+9173636128"
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  +91 73636128
                </a>
              </li>
              <li className="text-slate-400 text-xs mt-2 leading-relaxed">
                Ritoz Pharmaceutical Pvt. Ltd.<br />
                21, Skyline Infrahub, B/H Intas Pharma,<br />
                Changodar, Ahmedabad – 382210, Gujarat
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} Ritoz Pharmaceutical Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((link) => (
              <Link
                key={link}
                to="#"
                className="text-xs text-slate-400 hover:text-white transition-colors font-mono"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
