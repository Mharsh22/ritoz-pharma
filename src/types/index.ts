export interface NavItem {
  label: string
  href: string
}

export interface Highlight {
  icon: string
  value: string
  label: string
  description: string
}

export interface Product {
  icon: string
  title: string
  description: string
  examples: string[]
  color: string
}

export interface WhyChoose {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  location: string
  quote: string
  initials: string
}

export interface TeamMember {
  name: string
  title: string
  initials: string
  bio?: string
}

export interface NewsItem {
  date: string
  tag: string
  headline: string
  summary: string
  href?: string
}

export interface Certification {
  name: string
  body: string
  description: string
}
