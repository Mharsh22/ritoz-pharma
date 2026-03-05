import logoFull from '@/assets/logo-full.jpg'
import logoIcon from '@/assets/logo-icon.jpg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  dark?: boolean
  iconOnly?: boolean
}

const heights = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-14',
}

export default function Logo({ size = 'md', dark = false, iconOnly = false }: LogoProps) {
  if (iconOnly) {
    return (
      <img
        src={logoIcon}
        alt="Ritoz Pharmaceutical"
        className={`${heights[size]} w-auto object-contain`}
        style={{ filter: dark ? 'brightness(0) invert(1)' : 'none' }}
      />
    )
  }

  return (
    <img
      src={logoFull}
      alt="Ritoz Pharmaceutical Pvt. Ltd."
      className={`${heights[size]} w-auto object-contain`}
      style={{ filter: dark ? 'brightness(0) invert(1)' : 'none' }}
    />
  )
}