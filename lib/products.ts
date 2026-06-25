export type FragranceNotes = {
  top: string[]
  heart: string[]
  base: string[]
}

export type Product = {
  id: string
  name: string
  /** English translation / sub-name shown under the main name. */
  subtitle?: string
  tagline: string
  description: string
  price: number
  size: string
  image: string
  swatch: string
  collection: 'men' | 'women'
  /** Tone of the typography printed over the bottle glass. */
  labelTone: 'light' | 'dark'
  /** Concentration shown on the bottle label. */
  concentration: 'EAU DE PARFUM' | 'EXTRAIT DE PARFUM'
  /** True when the product image already has its label rendered in (skip the CSS overlay). */
  hasBakedLabel?: boolean
  /** One-word pillar, e.g. Strength / Influence. */
  pillar?: string
  /** Short fragrance profile, e.g. "Bold. Powerful. Refined." */
  profile?: string
  /** Long-form story paragraphs. */
  story?: string[]
  notes?: FragranceNotes
  /** "For leaders. For builders. For kings." */
  character?: string[]
}

export const products: Product[] = [
  // Men's Collection — Uomini Della Corona (The Men's Heritage Collection)
  {
    id: 're-di-ferro',
    name: 'RE DI FERRO',
    subtitle: 'Iron King',
    tagline: 'Forged By Will. Crowned By Legacy.',
    description:
      'A fragrance of strength, discipline, and quiet authority — dedicated to the self-made ruler who leads through action.',
    price: 320,
    size: '100ml',
    image: '/products/re-di-ferro.png',
    swatch: '#111111',
    collection: 'men',
    labelTone: 'light',
    concentration: 'EXTRAIT DE PARFUM',
    hasBakedLabel: true,
    pillar: 'Strength',
    profile: 'Bold. Powerful. Refined.',
    story: [
      'Long before palaces were built and crowns were worn, there were men who forged empires with nothing but determination.',
      'Re Di Ferro is dedicated to the self-made ruler. The man who leads through action, commands respect without demanding it, and leaves a legacy that outlives him.',
      'A fragrance of strength, discipline, and quiet authority.',
    ],
    notes: {
      top: ['Sicilian Bergamot', 'Black Pepper', 'Cardamom'],
      heart: ['Tobacco Leaf', 'Lavender', 'Clary Sage'],
      base: ['Leather', 'Vetiver', 'Sandalwood', 'Amber'],
    },
    character: ['For leaders.', 'For builders.', 'For kings.'],
  },
  {
    id: 'duca-nero',
    name: 'DUCA NERO',
    subtitle: 'Black Duke',
    tagline: 'Power Hidden In Elegance.',
    description:
      'The art of quiet dominance — sophisticated, intelligent, and endlessly intriguing. For the noble strategist whose influence outreaches any crown.',
    price: 320,
    size: '100ml',
    image: '/products/duca-nero.png',
    swatch: '#3a0d16',
    collection: 'men',
    labelTone: 'light',
    concentration: 'EAU DE PARFUM',
    hasBakedLabel: true,
    pillar: 'Influence',
    profile: 'Dark. Elegant. Mysterious.',
    story: [
      'Not every ruler sits upon a throne. Some shape history from behind closed doors.',
      'Duca Nero pays tribute to the noble strategist whose influence extends further than any crown. Sophisticated, intelligent, and endlessly intriguing, this fragrance embodies the art of quiet dominance.',
    ],
    notes: {
      top: ['Blood Orange', 'Pink Pepper', 'Juniper Berry'],
      heart: ['Orris Root', 'Tobacco Flower', 'Cedarwood'],
      base: ['Oud', 'Oakmoss', 'Patchouli', 'Musk'],
    },
    character: ['For visionaries.', 'For strategists.', 'For gentlemen of influence.'],
  },
  {
    id: 'portofino-imperiale',
    name: 'PORTOFINO IMPERIALE',
    subtitle: 'Imperial Portofino',
    tagline: 'The Luxury Of Freedom.',
    description:
      'Effortless sophistication captured in a bottle — tailored linen, private yachts, and endless summer evenings along the Italian Riviera.',
    price: 320,
    size: '100ml',
    image: '/products/portofino-imperiale.png',
    swatch: '#0c3a2b',
    collection: 'men',
    labelTone: 'light',
    concentration: 'EAU DE PARFUM',
    hasBakedLabel: true,
    pillar: 'Wealth',
    profile: 'Fresh. Luxurious. Radiant.',
    story: [
      'Along the Italian Riviera, where emerald waters meet golden sunsets, luxury is not displayed — it is lived.',
      'Portofino Imperiale captures the spirit of effortless sophistication. Tailored linen, private yachts, and endless summer evenings become a fragrance of pure refinement.',
    ],
    notes: {
      top: ['Amalfi Lemon', 'Bergamot', 'Grapefruit'],
      heart: ['Neroli', 'Marine Accord', 'Rosemary'],
      base: ['Ambergris Accord', 'White Musk', 'Cedarwood'],
    },
    character: ['For explorers.', 'For tastemakers.', 'For those who live beautifully.'],
  },
  {
    id: 'il-sovrano',
    name: 'IL SOVRANO',
    subtitle: 'The Sovereign',
    tagline: 'Above Kings. Beyond Time.',
    description:
      'The crown jewel of the collection. Rich, unforgettable, and majestic — it leaves an impression long after the wearer has departed.',
    price: 360,
    size: '100ml',
    image: '/products/il-sovrano.png',
    swatch: '#0b1a44',
    collection: 'men',
    labelTone: 'light',
    concentration: 'EXTRAIT DE PARFUM',
    hasBakedLabel: true,
    pillar: 'Power',
    profile: 'Regal. Opulent. Legendary.',
    story: [
      'There are rulers. There are emperors. And then there is The Sovereign.',
      'Created as the crown jewel of the collection, Il Sovrano embodies ultimate prestige, authority, and legacy. Rich, unforgettable, and majestic, it leaves an impression long after the wearer has departed.',
    ],
    notes: {
      top: ['Saffron', 'Bergamot', 'Cognac Accord'],
      heart: ['Turkish Rose', 'Tobacco Absolute', 'Myrrh'],
      base: ['Aged Oud', 'Ambergris', 'Vanilla Absolute', 'Sandalwood'],
    },
    character: ['For icons.', 'For legends.', 'For men who create their own destiny.'],
  },
  // Women's Collection — La Dinastia d'Oro (The Women's Heritage Collection)
  {
    id: 'veleno-doro',
    name: "VELENO D'ORO",
    subtitle: 'The Golden Poison',
    tagline: 'One Touch. A Lifetime Of Obsession.',
    description:
      'Seductive, addictive, dangerous — a scent so intoxicating that those who encounter it spend their lives searching for it again.',
    price: 360,
    size: '100ml',
    image: '/products/veleno-doro.png',
    swatch: '#1a1205',
    collection: 'women',
    labelTone: 'light',
    concentration: 'EXTRAIT DE PARFUM',
    hasBakedLabel: true,
    pillar: 'Seduction',
    profile: 'Seductive. Addictive. Dangerous.',
    story: [
      'Legends speak of a Venetian duchess whose fragrance captivated kings, noblemen, and aristocrats throughout Europe.',
      'It was not merely beautiful. It was unforgettable. A scent so intoxicating that those who encountered it spent their lives searching for it again.',
      "They called it Veleno D'Oro — The Golden Poison.",
    ],
    notes: {
      top: ['Calabrian Bergamot', 'Saffron', 'Pink Pepper'],
      heart: ['Bulgarian Rose', 'Jasmine Sambac', 'Incense'],
      base: ['Aged Oud', 'Ambergris', 'Vanilla Absolute', 'White Musk'],
    },
    character: ['For women who are impossible to forget.'],
  },
  {
    id: 'palazzo-delle-ombre',
    name: 'PALAZZO DELLE OMBRE',
    subtitle: 'Palace Of Shadows',
    tagline: 'Every Secret Has A Scent.',
    description:
      'Elegant, mysterious, sophisticated — the mystery of hidden beauty and timeless intrigue captured in a fragrance.',
    price: 340,
    size: '100ml',
    image: '/products/palazzo-delle-ombre.png',
    swatch: '#2a1140',
    collection: 'women',
    labelTone: 'light',
    concentration: 'EAU DE PARFUM',
    hasBakedLabel: true,
    pillar: 'Mystery',
    profile: 'Elegant. Mysterious. Sophisticated.',
    story: [
      'Hidden within a forgotten Venetian palace were whispered romances, forbidden affairs, and secrets that shaped generations.',
      'Long after the voices disappeared, the scent remained.',
      'Palazzo Delle Ombre captures the mystery of hidden beauty and timeless intrigue.',
    ],
    notes: {
      top: ['Blood Orange', 'Bergamot', 'Blackcurrant'],
      heart: ['Iris', 'Tobacco Flower', 'Violet'],
      base: ['Sandalwood', 'Black Amber', 'Patchouli', 'Cashmere Wood'],
    },
    character: ['For women who reveal only what they choose.'],
  },
  {
    id: 'imperatore-nero',
    name: 'IMPERATORE NERO',
    subtitle: 'Black Emperor',
    tagline: 'The Power Behind Every Throne.',
    description:
      'Rich, powerful, magnetic — dedicated to the women whose confidence, intelligence, and beauty quietly changed the course of history.',
    price: 360,
    size: '100ml',
    image: '/products/imperatore-nero.png',
    swatch: '#1a1205',
    collection: 'women',
    labelTone: 'light',
    concentration: 'EXTRAIT DE PARFUM',
    hasBakedLabel: true,
    pillar: 'Desire',
    profile: 'Rich. Powerful. Magnetic.',
    story: [
      'History remembers emperors. It rarely remembers the women who inspired them.',
      'Imperatore Nero is dedicated to those women — the ones whose confidence, intelligence, and beauty quietly changed the course of history.',
    ],
    notes: {
      top: ['Cardamom', 'Mandarin', 'Cognac Accord'],
      heart: ['Turkish Rose', 'Tobacco Absolute', 'Saffron'],
      base: ['Oud', 'Tonka Bean', 'Amber', 'Vanilla'],
    },
    character: ['For women who naturally command attention.'],
  },
  {
    id: 'notte-eterna',
    name: 'NOTTE ETERNA',
    subtitle: 'Eternal Night',
    tagline: 'A Night That Never Ends.',
    description:
      'Romantic, elegant, enchanting — created to preserve the feeling of a perfect night forever.',
    price: 340,
    size: '100ml',
    image: '/products/notte-eterna.png',
    swatch: '#0b1233',
    collection: 'women',
    labelTone: 'light',
    concentration: 'EAU DE PARFUM',
    hasBakedLabel: true,
    pillar: 'Eternity',
    profile: 'Romantic. Elegant. Enchanting.',
    story: [
      'Inspired by a legendary evening in Florence where music, passion, and beauty seemed to suspend time itself.',
      'A fragrance created to preserve the feeling of a perfect night forever.',
    ],
    notes: {
      top: ['Black Cherry', 'Plum', 'Bergamot'],
      heart: ['Damask Rose', 'Violet', 'Peony'],
      base: ['Vanilla Absolute', 'Oud', 'Amber', 'Cashmere Wood'],
    },
    character: ['For women who leave memories behind long after they leave the room.'],
  },
]

export const mensProducts = products.filter((p) => p.collection === 'men')
export const womensProducts = products.filter((p) => p.collection === 'women')

export function getProductById(id: string) {
  return products.find((p) => p.id === id)
}
