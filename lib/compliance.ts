/**
 * Brand-wide compliance, safety, and trust copy.
 * Centralised so every product detail page stays consistent and easy to update.
 */

export const COMPLIANCE = {
  madeIn: 'Crafted in Italy',
  volume: '100 ml / 3.4 fl. oz.',

  /** High-level ingredient framework. Per-product allergens are derived from notes. */
  ingredients:
    'Alcohol Denat., Parfum (Fragrance), Aqua (Water). Full ingredient and allergen declaration is printed on the carton and bottle base in accordance with EU Regulation 1223/2009.',

  /** EU "26 declarable allergens" that may be present in natural fragrance compositions. */
  allergenNote:
    'May contain naturally occurring fragrance allergens including Limonene, Linalool, Citral, Geraniol, Coumarin, Eugenol, and Citronellol.',

  /** Mandatory safety / handling guidance for an alcohol-based fragrance. */
  safety: [
    'Flammable. Keep away from heat, sparks, and open flame.',
    'For external use only. Avoid contact with eyes and broken skin.',
    'Discontinue use if irritation occurs. We recommend a patch test before first use.',
    'Keep out of reach of children. Store in a cool, dry place away from direct sunlight.',
  ],

  /** Authenticity / "this is a genuine, safe product" assurance. */
  authenticity:
    'Every Bolly Perfumes™ fragrance is 100% authentic, responsibly sourced, and sealed with a tamper-evident batch code. We never sell counterfeit, decanted, or refilled product.',

  /** Patch-test / liability disclaimer. */
  disclaimer:
    'Fragrances may contain ingredients that cause sensitivity in some individuals. This product is not intended to diagnose, treat, or prevent any condition. Use as directed.',
} as const

export const TRUST_BADGES: { title: string; desc: string }[] = [
  { title: '100% Authentic', desc: 'Genuine, sealed, batch-coded.' },
  { title: 'Secure Checkout', desc: 'Encrypted payments by Stripe.' },
  { title: 'Cruelty-Free', desc: 'Never tested on animals.' },
  { title: 'Worldwide Shipping', desc: 'Tracked & insured delivery.' },
]

export const SHIPPING = {
  freeThreshold: 250,
  summary:
    'Complimentary tracked shipping on orders over $250. All fragrances are shipped in protective, ground-only packaging in compliance with regulations for alcohol-based products.',
}
