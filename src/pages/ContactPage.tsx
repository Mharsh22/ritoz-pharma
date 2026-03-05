import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'

const INQUIRY_TYPES = [
  'General Enquiry',
  'Franchise Partnership',
  'Distribution Partnership',
  'Product Enquiry',
  'Investor Relations',
  'Media / Press',
  'Healthcare Professional',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', organization: '', state: '', type: '', message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [key]: e.target.value })

  const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-body text-slate-800 placeholder-slate-300 focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-50 transition-all bg-white"

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Talk Business"
        subtitle="Whether you're looking to partner with us, enquire about our products, or discuss franchise opportunities — we're here to help."
      />

      <section className="py-24 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact info sidebar */}
            <div className="space-y-10">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-6">Get In Touch</h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                          <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      ),
                      label: 'Email',
                      value: 'ritozpharma@gmail.com',
                      href: 'mailto:ritozpharma@gmail.com',
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                      label: 'Phone',
                      value: '+91 12345 67890',
                      href: 'tel:+911234567890',
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      label: 'Address',
                      value: 'Ritoz Pharma Pvt. Ltd.\nPharmaceutical Manufacturing Unit\nIndia',
                      href: undefined,
                    },
                  ].map((c) => (
                    <div key={c.label} className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'linear-gradient(135deg, rgba(45,45,127,0.1), rgba(61,61,158,0.1))', color: '#2D2D7F' }}
                      >
                        {c.icon}
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-sm text-slate-700 hover:text-navy-600 transition-colors font-body">
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-600 font-body whitespace-pre-line">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partnership types */}
              <div
                className="rounded-2xl p-7"
                style={{ background: 'linear-gradient(135deg, rgba(45,45,127,0.06), rgba(61,61,158,0.06))', border: '1px solid rgba(45,45,127,0.15)' }}
              >
                <h4 className="font-display font-bold text-slate-900 mb-4">Partnership Opportunities</h4>
                {[
                  'PCD Franchise',
                  'Monopoly Distribution',
                  'Institutional Supply',
                  'Contract Manufacturing',
                ].map((p) => (
                  <div key={p} className="flex items-center gap-2 py-2 text-sm text-slate-600 font-body border-b border-slate-100 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2D2D7F' }} />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="rounded-2xl p-12 text-center border"
                  style={{
                    background: 'linear-gradient(135deg, rgba(45,45,127,0.04), rgba(61,61,158,0.04))',
                    borderColor: 'rgba(45,45,127,0.2)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
                    style={{ background: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-7 h-7">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">Message Received!</h3>
                  <p className="text-slate-500 font-body">
                    Thank you for reaching out. Our team will get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Full Name *</label>
                      <input required type="text" placeholder="Your name" value={form.name} onChange={update('name')} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Email Address *</label>
                      <input required type="email" placeholder="your@email.com" value={form.email} onChange={update('email')} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={update('phone')} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">State / Region</label>
                      <input type="text" placeholder="e.g. Rajasthan" value={form.state} onChange={update('state')} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Organisation / Company</label>
                    <input type="text" placeholder="Hospital, Pharmacy, Distributorship..." value={form.organization} onChange={update('organization')} className={inputClass} />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Enquiry Type *</label>
                    <select required value={form.type} onChange={update('type')} className={inputClass}>
                      <option value="">Select enquiry type</option>
                      {INQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your requirements, product interest, or partnership opportunity..."
                      value={form.message}
                      onChange={update('message')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                    Send Enquiry →
                  </button>
                  <p className="text-xs text-slate-400 text-center font-body">
                    We respond to all enquiries within 1–2 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
