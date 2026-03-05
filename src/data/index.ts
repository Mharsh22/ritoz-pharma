import type {
  NavItem, Highlight, Product, WhyChoose,
  Testimonial, TeamMember, NewsItem, Certification
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Opportunity', href: '/opportunity' },
  { label: 'Contact', href: '/contact' },
]

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: 'Globe',
    value: 'Pan-India',
    label: 'Presence',
    description: 'Nationwide distribution network',
  },
  {
    icon: 'Building2',
    value: '10+',
    label: 'Years in Healthcare',
    description: 'Decade of trusted service',
  },
  {
    icon: 'BadgeCheck',
    value: 'ISO Certified',
    label: 'WHO-GMP Compliant',
    description: 'Quality assured manufacturing',
  },
  {
    icon: 'PackageOpen',
    value: '300+',
    label: 'Product SKUs',
    description: 'Comprehensive product range',
  },
]

export const PRODUCTS: Product[] = [
  {
    icon: 'Pill',
    title: 'Tablets & Capsules',
    description:
      'Wide range of oral solid dosage forms including film-coated, sugar-coated, extended-release tablets and hard gelatin capsules manufactured under strict GMP conditions.',
    examples: ['Film-Coated Tablets', 'Sugar-Coated Tablets', 'Hard Gelatin Capsules', 'Extended Release', 'Chewable Tablets'],
    color: '#2D2D7F',
  },
  {
    icon: 'Syringe',
    title: 'Injections',
    description:
      'Sterile injectable formulations including small volume parenterals, lyophilized injectables, and large volume infusions with rigorous sterility assurance protocols.',
    examples: ['Small Volume Parenterals', 'Lyophilized Injectables', 'Large Volume Infusions', 'Ampoules & Vials', 'Pre-filled Syringes'],
    color: '#1e1e5c',
  },
  {
    icon: 'FlaskConical',
    title: 'Liquids & Syrups',
    description:
      'Oral liquid preparations including suspensions, emulsions, elixirs, and solutions formulated for both paediatric and adult therapeutic applications.',
    examples: ['Oral Suspensions', 'Emulsions', 'Elixirs', 'Tonic Syrups', 'Antacid Liquids'],
    color: '#C9A84C',
  },
  {
    icon: 'Droplets',
    title: 'Drops & Dry Syrups',
    description:
      'Eye drops, ear drops, nasal drops, and dry syrup powder formulations for reconstitution — widely used in paediatric care for precise dosing.',
    examples: ['Eye Drops', 'Ear Drops', 'Nasal Drops', 'Paediatric Dry Syrups', 'Oral Drops'],
    color: '#2D2D7F',
  },
  {
    icon: 'Pipette',
    title: 'Ointments & Creams',
    description:
      'Topical preparations including creams, ointments, gels, and lotions for dermatological, ophthalmic, and musculoskeletal applications.',
    examples: ['Dermatological Creams', 'Ophthalmic Ointments', 'Medicated Gels', 'Antifungal Creams', 'Anti-inflammatory Gels'],
    color: '#a8883a',
  },
  {
    icon: 'TestTube',
    title: 'Solutions',
    description:
      'Antiseptic solutions, oral rinses, gargle formulations, and specialised pharmaceutical solutions spanning multiple therapeutic categories.',
    examples: ['Antiseptic Solutions', 'Oral Rinses', 'Gargle Preparations', 'Disinfectant Solutions', 'IV Solutions'],
    color: '#1e1e5c',
  },
]

export const WHY_CHOOSE: WhyChoose[] = [
  {
    icon: 'Award',
    title: 'ISO 9001:2015 & WHO-GMP Certified',
    description:
      'Every product manufactured in our facility is produced under internationally recognised quality standards, ensuring safety, efficacy, and consistency in every batch.',
  },
  {
    icon: 'Users',
    title: 'Transparent Partner Model',
    description:
      'Clear, straightforward partnership terms with comprehensive promotional support, visual aids, and dedicated field assistance for all franchise and distribution partners.',
  },
  {
    icon: 'Truck',
    title: 'Pan-India Distribution',
    description:
      'Our robust logistics network ensures reliable, on-time delivery across all states and union territories — keeping your business stocked and patients served.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Strict Regulatory Compliance',
    description:
      'Fully compliant with CDSCO guidelines, state drug authority requirements, and international quality benchmarks across all product categories.',
  },
  {
    icon: 'Microscope',
    title: 'In-House QC Laboratory',
    description:
      'State-of-the-art quality control laboratory with modern analytical instruments and qualified pharmacists conducting rigorous batch-by-batch testing.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Dedicated Partner Support',
    description:
      'Committed marketing inputs, promotional materials, MR support, and responsive customer service for every partner in our distribution network.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dr. Ramesh Sharma',
    role: 'General Physician',
    location: 'Jaipur, Rajasthan',
    quote:
      'Ritooz Pharma products consistently deliver results. The quality and efficacy of their formulations have made them my preferred choice for prescribing to my patients.',
    initials: 'RS',
  },
  {
    name: 'Priya Mehta',
    role: 'Franchise Partner',
    location: 'Mumbai, Maharashtra',
    quote:
      'Partnering with Ritoz has been a game-changer for my business. Their transparent model, timely supply, and exceptional marketing support are truly unmatched in the industry.',
    initials: 'PM',
  },
  {
    name: 'Suresh Patel',
    role: 'Hospital Pharmacist',
    location: 'Ahmedabad, Gujarat',
    quote:
      'We have been sourcing from Ritoz for over 6 years. Their adherence to WHO-GMP standards gives us complete confidence in every batch we receive and dispense.',
    initials: 'SP',
  },
  {
    name: 'Dr. Anjali Singh',
    role: 'Paediatrician',
    location: 'Delhi NCR',
    quote:
      'Their dry syrups and drops range for paediatric patients is outstanding — excellent palatability, accurate dosing, and consistently good therapeutic outcomes.',
    initials: 'AS',
  },
]

export const TEAM: TeamMember[] = [
  {
    name: 'Managing Director',
    title: 'Leadership & Strategy',
    initials: 'MD',
    bio: 'Over 20 years of experience in the Indian pharmaceutical industry, leading Ritoz Pharma from a regional supplier to a pan-India manufacturing brand.',
  },
  {
    name: 'Head of Manufacturing',
    title: 'Production & Quality',
    initials: 'HM',
    bio: 'Qualified pharmacist with deep expertise in GMP-compliant manufacturing, process validation, and large-scale pharmaceutical production.',
  },
  {
    name: 'Head of Quality Control',
    title: 'QC & Regulatory Affairs',
    initials: 'QC',
    bio: 'Specialist in analytical chemistry and pharmaceutical quality systems, overseeing ISO 9001:2015 compliance and CDSCO regulatory submissions.',
  },
  {
    name: 'Head of Sales & Marketing',
    title: 'Business Development',
    initials: 'SM',
    bio: 'Pan-India pharma sales leader with expertise in franchise model development, distribution network expansion, and partner relations.',
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'ISO 9001:2015',
    body: 'Bureau Veritas',
    description: 'Quality Management System certification covering all manufacturing and distribution processes.',
  },
  {
    name: 'WHO-GMP',
    body: 'World Health Organization',
    description: 'Good Manufacturing Practice compliance ensuring global pharmaceutical quality standards.',
  },
  {
    name: 'CDSCO Licensed',
    body: 'Central Drugs Standard Control Organisation',
    description: 'Manufacturing and marketing licences issued by India\'s national regulatory authority.',
  },
  {
    name: 'State Drug Authority',
    body: 'State Licensing Authority',
    description: 'All state-level drug manufacturing and distribution licences maintained and renewed.',
  },
]

export const NEWS: NewsItem[] = [
  {
    date: 'January 2026',
    tag: 'Expansion',
    headline: 'Ritoz Pharma Expands Distribution to 5 New States',
    summary:
      'Our distribution network now covers all major Indian states, with new partnerships established in the Northeast and Southern regions to serve more patients.',
  },
  {
    date: 'November 2025',
    tag: 'Quality',
    headline: 'ISO 9001:2015 Recertification Successfully Completed',
    summary:
      'Ritoz Pharma successfully passed its ISO 9001:2015 surveillance audit with zero non-conformities, reaffirming our commitment to quality.',
  },
  {
    date: 'September 2025',
    tag: 'Products',
    headline: '25 New Product SKUs Added to Our Pharmaceutical Range',
    summary:
      'We have launched 25 new formulations across our tablets, injectables, and topical categories, expanding our portfolio to over 300 product SKUs.',
  },
]

// ─── Product Categories (for Products page) ───────────────────────────────────

export interface ProductCategory {
  slug: string
  title: string
  shortTitle: string
  icon: string
  color: string
  gradient: string
  skuCount: number
  description: string
  longDescription: string
  therapeuticUses: string[]
  formTypes: string[]
  sampleProducts: SampleProduct[]
}

export interface SampleProduct {
  name: string
  composition: string
  type: string
  size: string
  packing: string
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'tablets-capsules',
    title: 'Tablets & Capsules',
    shortTitle: 'Tablets & Capsules',
    icon: '💊',
    color: '#2D2D7F',
    gradient: 'linear-gradient(135deg, #2D2D7F, #3d3d9e)',
    skuCount: 67,
    description: 'Comprehensive range of solid dosage forms including antibiotics, analgesics, antacids, and specialty formulations.',
    longDescription: 'Our tablets and capsules range covers a broad spectrum of therapeutic categories manufactured under strict GMP conditions. Each formulation undergoes rigorous quality control to ensure consistent potency, dissolution, and bioavailability.',
    therapeuticUses: ['Antibiotics', 'Analgesics', 'Antacids', 'Antihistamines', 'Antidiabetics', 'Cardiovascular', 'Vitamins & Minerals'],
    formTypes: ['Film-Coated Tablets', 'Sugar-Coated Tablets', 'Hard Gelatin Capsules', 'Dispersible Tablets', 'Chewable Tablets', 'Extended Release'],
    sampleProducts: [
      { name: 'RITZ-AMOX 500', composition: 'Amoxicillin 500mg', type: 'Tablet', size: '10x10', packing: '10x10 Alu-Alu' },
      { name: 'RITZ-AZITH 500', composition: 'Azithromycin 500mg', type: 'Tablet', size: '1x6', packing: 'Blister Pack' },
      { name: 'RITZ-CEFX 200', composition: 'Cefixime 200mg Dispersible', type: 'Tablet', size: '10x10', packing: '10x10 Alu-Alu' },
      { name: 'RITZ-PAN 40', composition: 'Pantoprazole 40mg', type: 'Tablet', size: '10x10', packing: 'Strip Pack' },
      { name: 'RITZ-DICLO', composition: 'Diclofenac 50mg + Paracetamol 325mg', type: 'Tablet', size: '10x10', packing: '10x10 Alu-Alu' },
      { name: 'RITZ-METRO 400', composition: 'Metronidazole 400mg', type: 'Tablet', size: '10x10', packing: 'Strip Pack' },
      { name: 'RITZ-B-COMPLEX', composition: 'Vitamin B Complex with Zinc', type: 'Capsule', size: '10x10', packing: 'Blister Pack' },
      { name: 'RITZ-OMEP 20', composition: 'Omeprazole 20mg', type: 'Capsule', size: '10x10', packing: 'Alu-Alu Strip' },
    ],
  },
  {
    slug: 'nutraceuticals',
    title: 'Nutraceutical Supplements',
    shortTitle: 'Nutraceuticals',
    icon: '🌿',
    color: '#1e1e5c',
    gradient: 'linear-gradient(135deg, #1e1e5c, #2D2D7F)',
    skuCount: 26,
    description: 'Wide range of vitamins, minerals, and dietary supplements designed to promote overall health and wellness.',
    longDescription: 'Our nutraceutical range bridges the gap between nutrition and medicine. Each supplement is formulated with premium-grade ingredients to support immunity, bone health, energy metabolism, and overall well-being.',
    therapeuticUses: ['Immunity Boosters', 'Bone & Joint Health', 'Energy & Vitality', 'Antioxidants', 'Pre/Postnatal Care', 'Paediatric Nutrition'],
    formTypes: ['Soft Gelatin Capsules', 'Effervescent Tablets', 'Chewable Tablets', 'Powder Sachets', 'Syrup'],
    sampleProducts: [
      { name: 'RITZ-MULTI', composition: 'Multivitamin + Multimineral', type: 'Tablet', size: '10x10', packing: 'Blister Pack' },
      { name: 'RITZ-OMEGA', composition: 'Omega-3 Fatty Acids 1000mg', type: 'Softgel', size: '10x10', packing: 'Strip Pack' },
      { name: 'RITZ-ZINC+', composition: 'Zinc 20mg + Vitamin C 500mg', type: 'Tablet', size: '10x15', packing: 'Blister Pack' },
      { name: 'RITZ-CALCI-D3', composition: 'Calcium 500mg + Vitamin D3 250 IU', type: 'Tablet', size: '10x10', packing: 'Alu Strip' },
    ],
  },
  {
    slug: 'liquids-drops-dry-syrups',
    title: 'Liquids, Drops & Dry Syrups',
    shortTitle: 'Liquids & Drops',
    icon: '🧴',
    color: '#1e1e5c',
    gradient: 'linear-gradient(135deg, #2D2D7F, #C9A84C)',
    skuCount: 49,
    description: 'Oral liquid medicines including syrups, suspensions, and eye/ear drops for various therapeutic uses.',
    longDescription: 'Our liquid range covers oral syrups, suspensions, dry syrups for reconstitution, and ophthalmic/otic preparations. Specially formulated for paediatric palatability and accurate dosing with every administration.',
    therapeuticUses: ['Paediatric Antibiotics', 'Antacids & Digestives', 'Cough & Cold', 'Iron Deficiency', 'Eye & Ear Infections', 'Appetite Stimulation'],
    formTypes: ['Oral Syrups', 'Oral Suspensions', 'Dry Syrups (Reconstitutable)', 'Eye Drops', 'Ear Drops', 'Nasal Drops'],
    sampleProducts: [
      { name: 'RITZ-CEFX DS', composition: 'Cefixime 50mg/5ml Dry Syrup', type: 'Dry Syrup', size: '30ml', packing: 'Bottle' },
      { name: 'RITZ-AMOX DS', composition: 'Amoxicillin 125mg/5ml Dry Syrup', type: 'Dry Syrup', size: '60ml', packing: 'Bottle' },
      { name: 'RITZ-ANTACID', composition: 'Aluminium Hydroxide + Magnesium Hydroxide', type: 'Suspension', size: '170ml', packing: 'Bottle' },
      { name: 'RITZ-IRON SYP', composition: 'Ferrous Ascorbate + Folic Acid Syrup', type: 'Syrup', size: '200ml', packing: 'Bottle' },
    ],
  },
  {
    slug: 'injectables',
    title: 'Injectables',
    shortTitle: 'Injectables',
    icon: '💉',
    color: '#2D2D7F',
    gradient: 'linear-gradient(135deg, #2D2D7F, #a8883a)',
    skuCount: 18,
    description: 'Sterile injectable formulations for hospital and clinical use, manufactured in aseptic conditions.',
    longDescription: 'Our injectable range is manufactured in a dedicated sterile facility with HVAC-controlled clean rooms and comprehensive environmental monitoring. Each batch undergoes sterility testing, particulate matter analysis, and endotoxin testing before release.',
    therapeuticUses: ['Critical Care', 'Post-Surgical', 'Pain Management', 'Antibiotic Therapy', 'Vitamin Deficiency', 'Anti-emetics'],
    formTypes: ['Ampoules', 'Vials (Liquid)', 'Lyophilized Vials', 'Large Volume Parenterals', 'Pre-filled Syringes'],
    sampleProducts: [
      { name: 'RITZ-CEFTRI 1G', composition: 'Ceftriaxone 1g Injection', type: 'Vial', size: '1 Vial', packing: 'Single Vial Box' },
      { name: 'RITZ-ONDANS', composition: 'Ondansetron 2mg/ml Injection', type: 'Ampoule', size: '2ml', packing: '5 Ampoules' },
      { name: 'RITZ-DICLOINJ', composition: 'Diclofenac 75mg/3ml Injection', type: 'Ampoule', size: '3ml', packing: '5 Ampoules' },
      { name: 'RITZ-VIT B12', composition: 'Methylcobalamin 1500mcg Injection', type: 'Ampoule', size: '1ml', packing: '5 Ampoules' },
    ],
  },
  {
    slug: 'topical-creams-ointments',
    title: 'Topical Creams & Ointments',
    shortTitle: 'Topicals',
    icon: '🧴',
    color: '#a8883a',
    gradient: 'linear-gradient(135deg, #a8883a, #C9A84C)',
    skuCount: 22,
    description: 'Dermatological and ophthalmic topical preparations for skin infections, inflammation, and wound care.',
    longDescription: 'Our topical range includes creams, ointments, gels, and lotions for a wide variety of dermatological conditions. Formulated with carefully selected active ingredients for optimal skin penetration and therapeutic efficacy.',
    therapeuticUses: ['Skin Infections', 'Fungal Infections', 'Inflammation', 'Wound Healing', 'Acne & Dermatitis', 'Ophthalmic Use'],
    formTypes: ['Creams', 'Ointments', 'Medicated Gels', 'Lotions', 'Eye Ointments', 'Dusting Powder'],
    sampleProducts: [
      { name: 'RITZ-CLOTRI', composition: 'Clotrimazole 1% Cream', type: 'Cream', size: '15g', packing: 'Tube' },
      { name: 'RITZ-BETO-N', composition: 'Betamethasone + Neomycin Cream', type: 'Cream', size: '15g', packing: 'Tube' },
      { name: 'RITZ-DICLOGEL', composition: 'Diclofenac Diethylamine 1.16% Gel', type: 'Gel', size: '30g', packing: 'Tube' },
      { name: 'RITZ-MUPIROCIN', composition: 'Mupirocin 2% Ointment', type: 'Ointment', size: '5g', packing: 'Tube' },
    ],
  },
  {
    slug: 'antibiotic-anticold',
    title: 'Antibiotics & Anticold',
    shortTitle: 'Antibiotics',
    icon: '🔬',
    color: '#C9A84C',
    gradient: 'linear-gradient(135deg, #C9A84C, #2D2D7F)',
    skuCount: 35,
    description: 'Targeted antibiotic and respiratory formulations for bacterial infections and cold-related conditions.',
    longDescription: 'A dedicated range of antibiotics and anticold medications covering broad-spectrum and narrow-spectrum antibiotics alongside decongestants, antihistamines, and combination cold formulas for adults and children.',
    therapeuticUses: ['Respiratory Infections', 'UTI', 'Skin & Soft Tissue', 'ENT Infections', 'Common Cold & Flu', 'Sinusitis'],
    formTypes: ['Tablets', 'Capsules', 'Dry Syrups', 'Injectables', 'Nasal Sprays', 'Lozenges'],
    sampleProducts: [
      { name: 'RITZ-CLARI 250', composition: 'Clarithromycin 250mg', type: 'Tablet', size: '10x10', packing: 'Alu-Alu' },
      { name: 'RITZ-LEVO 500', composition: 'Levofloxacin 500mg', type: 'Tablet', size: '10x10', packing: 'Strip Pack' },
      { name: 'RITZ-COLDOFF', composition: 'Paracetamol + Phenylephrine + CPM', type: 'Tablet', size: '10x10', packing: 'Blister Pack' },
      { name: 'RITZ-CETRIZ', composition: 'Cetirizine 10mg + Pseudoephedrine 60mg', type: 'Tablet', size: '10x10', packing: 'Strip Pack' },
    ],
  },
  {
    slug: 'antiulcer-antiallergic',
    title: 'Antiulcer & Antiallergics',
    shortTitle: 'Antiulcer',
    icon: '⚕️',
    color: '#2D2D7F',
    gradient: 'linear-gradient(135deg, #2D2D7F, #1e1e5c)',
    skuCount: 28,
    description: 'Gastrointestinal and allergy management formulations for peptic ulcers, GERD, and allergic conditions.',
    longDescription: 'Our antiulcer and antiallergic range provides complete solutions for GI disorders and allergic conditions. From proton pump inhibitors to H2 blockers and comprehensive antihistamine formulations for seasonal and chronic allergies.',
    therapeuticUses: ['Peptic Ulcer', 'GERD & Acid Reflux', 'H. Pylori Eradication', 'Seasonal Allergies', 'Urticaria', 'Rhinitis'],
    formTypes: ['Tablets', 'Capsules', 'Oral Suspensions', 'Injections', 'Syrups'],
    sampleProducts: [
      { name: 'RITZ-PAN-DSR', composition: 'Pantoprazole 40mg + Domperidone 30mg SR', type: 'Capsule', size: '10x10', packing: 'Alu-Alu' },
      { name: 'RITZ-RABEPRO', composition: 'Rabeprazole 20mg + Levosulpiride 75mg', type: 'Capsule', size: '10x10', packing: 'Alu-Alu' },
      { name: 'RITZ-LEVOCET', composition: 'Levocetirizine 5mg', type: 'Tablet', size: '10x10', packing: 'Strip Pack' },
      { name: 'RITZ-MONTELEV', composition: 'Montelukast 10mg + Levocetirizine 5mg', type: 'Tablet', size: '10x10', packing: 'Alu-Alu' },
    ],
  },
  {
    slug: 'analgesics-appetite',
    title: 'Analgesics & Appetite Stimulants',
    shortTitle: 'Analgesics',
    icon: '💆',
    color: '#C9A84C',
    gradient: 'linear-gradient(135deg, #1e1e5c, #C9A84C)',
    skuCount: 24,
    description: 'Pain management and appetite stimulant formulations for acute and chronic conditions.',
    longDescription: 'Our analgesic and appetite stimulant range covers NSAIDs, opioid combinations, muscle relaxants, and cyproheptadine-based appetite stimulants for paediatric and adult nutritional support.',
    therapeuticUses: ['Acute Pain', 'Chronic Pain', 'Musculoskeletal', 'Post-Surgical Pain', 'Paediatric Appetite', 'Nutritional Support'],
    formTypes: ['Tablets', 'Capsules', 'Injections', 'Gels', 'Syrups', 'Drops'],
    sampleProducts: [
      { name: 'RITZ-ACECLO-P', composition: 'Aceclofenac 100mg + Paracetamol 325mg', type: 'Tablet', size: '10x10', packing: 'Alu-Alu' },
      { name: 'RITZ-TRAMP', composition: 'Tramadol 50mg + Paracetamol 325mg', type: 'Tablet', size: '10x10', packing: 'Alu-Alu' },
      { name: 'RITZ-CYPROHEP', composition: 'Cyproheptadine 2mg + Tricholine Citrate Syrup', type: 'Syrup', size: '200ml', packing: 'Bottle' },
      { name: 'RITZ-APTIMAX', composition: 'Cyproheptadine 2mg/5ml Syrup', type: 'Syrup', size: '200ml', packing: 'Bottle' },
    ],
  },
  {
    slug: 'derma',
    title: 'Derma Range',
    shortTitle: 'Derma',
    icon: '🩺',
    color: '#C9A84C',
    gradient: 'linear-gradient(135deg, #2D2D7F, #C9A84C)',
    skuCount: 19,
    description: 'Specialized dermatological formulations for skin conditions, pigmentation, and anti-ageing care.',
    longDescription: 'Our dedicated derma range covers prescription and OTC dermatology products addressing fungal infections, pigmentation, acne, psoriasis, and general skin care — formulated for both efficacy and patient acceptability.',
    therapeuticUses: ['Fungal Infections', 'Pigmentation', 'Acne', 'Psoriasis', 'Eczema', 'Wound Care'],
    formTypes: ['Creams', 'Lotions', 'Face Wash', 'Gels', 'Serums', 'Ointments'],
    sampleProducts: [
      { name: 'RITZ-TERBINAF', composition: 'Terbinafine 1% Cream', type: 'Cream', size: '10g', packing: 'Tube' },
      { name: 'RITZ-KOJIC', composition: 'Kojic Acid + Arbutin Cream', type: 'Cream', size: '15g', packing: 'Tube' },
      { name: 'RITZ-ADAPALOG', composition: 'Adapalene 0.1% + Clindamycin 1% Gel', type: 'Gel', size: '15g', packing: 'Tube' },
      { name: 'RITZ-SALIBETA', composition: 'Salicylic Acid 3% + Betamethasone 0.05%', type: 'Lotion', size: '30ml', packing: 'Bottle' },
    ],
  },
  {
    slug: 'bp-cardiac',
    title: 'BP & Cardiac',
    shortTitle: 'BP & Cardiac',
    icon: '❤️',
    color: '#2D2D7F',
    gradient: 'linear-gradient(135deg, #2D2D7F, #1e1e5c)',
    skuCount: 21,
    description: 'Cardiovascular formulations for hypertension, cardiac conditions, and lipid management.',
    longDescription: 'Our BP & Cardiac range offers a comprehensive portfolio of antihypertensives, statins, and cardiac support medications. All formulations meet stringent stability and bioequivalence standards critical for cardiovascular therapeutics.',
    therapeuticUses: ['Hypertension', 'Heart Failure', 'Dyslipidaemia', 'Arrhythmia', 'Angina', 'Diabetic Cardioprotection'],
    formTypes: ['Tablets', 'Capsules', 'Extended Release Tablets', 'Injections'],
    sampleProducts: [
      { name: 'RITZ-AMLOD 5', composition: 'Amlodipine 5mg', type: 'Tablet', size: '10x10', packing: 'Strip Pack' },
      { name: 'RITZ-TELMI 40', composition: 'Telmisartan 40mg', type: 'Tablet', size: '10x10', packing: 'Alu Strip' },
      { name: 'RITZ-ATORVA 10', composition: 'Atorvastatin 10mg', type: 'Tablet', size: '10x10', packing: 'Strip Pack' },
      { name: 'RITZ-METOPRO', composition: 'Metoprolol Succinate 25mg ER', type: 'Tablet', size: '10x10', packing: 'Alu-Alu' },
    ],
  },
]
