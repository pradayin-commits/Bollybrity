export type LegalSection = { heading: string; body: string[] }
export type LegalDoc = {
  slug: string
  title: string
  intro: string
  sections: LegalSection[]
}

/**
 * Placeholder policy content. Review with a legal professional before going live.
 */
export const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    intro:
      'Bolly Perfumes™ respects your privacy. This policy explains what information we collect, how we use it, and the choices you have.',
    sections: [
      {
        heading: 'Information We Collect',
        body: [
          'We collect information you provide directly, such as your name, email, shipping address, and order details when you make a purchase or join the VIP Club.',
          'We also collect limited technical data (such as device and usage information) to operate and improve the site.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        body: [
          'To process and ship your orders, provide customer support, and send order updates.',
          'To share launches, offers, and brand news when you have opted in. You can unsubscribe at any time.',
        ],
      },
      {
        heading: 'Payments',
        body: [
          'Payments are processed securely by Stripe. We do not store your full card details on our servers.',
        ],
      },
      {
        heading: 'Your Rights',
        body: [
          'You may request access to, correction of, or deletion of your personal data by contacting us. We retain data only as long as necessary to fulfil orders and meet legal obligations.',
        ],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Terms of Service',
    intro:
      'These terms govern your use of the Bolly Perfumes™ website and the purchase of our products.',
    sections: [
      {
        heading: 'Orders & Pricing',
        body: [
          'All orders are subject to acceptance and availability. Prices are listed in USD and may change without notice.',
          'We reserve the right to refuse or cancel any order, including in cases of suspected fraud or pricing errors.',
        ],
      },
      {
        heading: 'Intellectual Property',
        body: [
          'The Bolly Perfumes™ name, the BB emblem, product names, imagery, and all site content are trademarks and property of Bolly Perfumes and may not be used without written permission.',
        ],
      },
      {
        heading: 'Product Use',
        body: [
          'Our fragrances are alcohol-based and for external use only. By purchasing, you agree to follow the safety guidance provided with each product.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        body: [
          'To the fullest extent permitted by law, Bolly Perfumes is not liable for indirect or incidental damages arising from use of our products or site.',
        ],
      },
    ],
  },
  shipping: {
    slug: 'shipping',
    title: 'Shipping Policy',
    intro:
      'We ship our fragrances with care, using carriers approved for alcohol-based products.',
    sections: [
      {
        heading: 'Processing & Delivery',
        body: [
          'Orders are processed within 1–2 business days. Estimated delivery is 3–7 business days depending on destination.',
          'You will receive a tracking number once your order ships.',
        ],
      },
      {
        heading: 'Shipping Costs',
        body: [
          'Complimentary tracked shipping is available on orders over $250. A flat rate applies to orders below the threshold and is shown at checkout.',
        ],
      },
      {
        heading: 'Regulatory Note',
        body: [
          'Because fragrances are classified as flammable goods, they ship via ground transport only and cannot be expedited by air. Some remote regions may be unavailable.',
        ],
      },
    ],
  },
  returns: {
    slug: 'returns',
    title: 'Returns & Refunds',
    intro:
      'Your satisfaction matters. For hygiene and safety reasons, fragrance returns are subject to the conditions below.',
    sections: [
      {
        heading: 'Eligibility',
        body: [
          'Unopened products with intact seals may be returned within 14 days of delivery for a refund or exchange.',
          'For safety and hygiene reasons, opened or used fragrances cannot be returned unless the item is faulty.',
        ],
      },
      {
        heading: 'Damaged or Faulty Items',
        body: [
          'If your order arrives damaged or defective, contact us within 48 hours of delivery with photos and we will arrange a replacement or refund.',
        ],
      },
      {
        heading: 'How to Start a Return',
        body: [
          'Email our team with your order number to receive return instructions. Refunds are issued to the original payment method once the item is received and inspected.',
        ],
      },
    ],
  },
}

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', slug: 'privacy' },
  { label: 'Terms of Service', slug: 'terms' },
  { label: 'Shipping Policy', slug: 'shipping' },
  { label: 'Returns & Refunds', slug: 'returns' },
]
