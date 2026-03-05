import MoleculeDecor from '@/components/ui/MoleculeDecor'
import SectionLabel from '@/components/ui/SectionLabel'

interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function PageHero({ label, title, subtitle, children }: PageHeroProps) {
  return (
    <section
      className="relative pt-36 pb-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdf9 60%, #eff8ff 100%)',
      }}
    >
      <div className="absolute inset-0 bg-dot opacity-50 pointer-events-none" />
      <MoleculeDecor
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] hidden xl:block"
        opacity={0.12}
      />
      <div className="container-xl relative z-10">
        <SectionLabel>{label}</SectionLabel>
        <h1
          className="font-display font-bold text-slate-900 leading-tight mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-body">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
