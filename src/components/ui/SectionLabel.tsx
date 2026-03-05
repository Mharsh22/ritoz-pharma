interface SectionLabelProps {
  number?: string
  children: React.ReactNode
}

export default function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
      <span className="section-label">
        {number && <span className="opacity-50 mr-1">{number} —</span>}
        {children}
      </span>
    </div>
  )
}
