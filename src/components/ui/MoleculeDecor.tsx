interface MoleculeDecorProps {
  className?: string
  opacity?: number
}

export default function MoleculeDecor({ className = '', opacity = 0.15 }: MoleculeDecorProps) {
  const nodes = [
    [200, 200], [310, 140], [310, 260], [90, 140], [90, 260],
    [200, 60], [380, 200], [200, 340], [20, 200],
    [370, 90], [370, 310], [30, 90], [30, 310],
  ]
  const bonds = [
    [200,200,310,140],[200,200,310,260],[200,200,90,140],[200,200,90,260],
    [200,200,200,60],[200,200,380,200],[200,200,200,340],[200,200,20,200],
    [310,140,380,200],[310,260,380,200],[90,140,20,200],[90,260,20,200],
    [200,60,310,140],[200,60,90,140],[200,340,310,260],[200,340,90,260],
    [310,140,370,90],[310,260,370,310],[90,140,30,90],[90,260,30,310],
  ]

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      style={{ opacity }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {bonds.map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="url(#molBond)" strokeWidth="1.5" />
      ))}
      {nodes.map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 0 ? 12 : i < 5 ? 8 : 5}
          fill={i === 0 ? 'url(#molCenter)' : 'rgba(13,148,136,0.15)'}
          stroke="rgba(13,148,136,0.4)" strokeWidth="1" />
      ))}
      <defs>
        <linearGradient id="molBond" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2579eb" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="molCenter">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#2579eb" />
        </radialGradient>
      </defs>
    </svg>
  )
}
