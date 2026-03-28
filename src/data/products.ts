import { Product, Feature } from '../types';

export const products: Product[] = [
  {
    id: 'rc-urinary-so',
    name: 'Royal Canin Urinary SO for Cats',
    description: 'Complete dietetic feed for cats formulated to dissolve struvite stones and reduce their recurrence. Helps dilute urine and creates an environment unfavorable to crystal formation.',
    price: 49.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg',
    category: 'food',
    features: [
      'Dissolves struvite stones',
      'Reduces crystal recurrence',
      'Urinary health support',
      'Veterinarian recommended'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 342
  },
  {
    id: 'premium-cat-litter',
    name: 'Premium Clumping Cat Litter',
    description: 'Ultra-absorbent, dust-free clumping cat litter made from natural clay. Provides superior odor control for up to 7 days and forms tight, easy-to-scoop clumps.',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg',
    category: 'litter',
    features: [
      '99% dust-free formula',
      'Superior odor control',
      'Easy clumping action',
      'Natural clay ingredients'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 589
  }
];

export const features: Feature[] = [
  {
    id: 'fast-shipping',
    title: 'Fast & Free Shipping',
    description: 'Free shipping on orders over $35. Get your pet supplies delivered right to your door in 2-3 business days.',
    icon: 'Truck'
  },
  {
    id: 'quality-products',
    title: 'Premium Quality',
    description: 'We source only the highest quality products from trusted brands to keep your pets healthy and happy.',
    icon: 'Award'
  },
  {
    id: 'expert-support',
    title: 'Expert Support',
    description: 'Our team of pet care experts is available to help you choose the right products for your furry friends.',
    icon: 'MessageCircle'
  },
  {
    id: 'satisfaction',
    title: '100% Satisfaction',
    description: 'Not satisfied? Return any product within 30 days for a full refund. Your pet\'s happiness is our priority.',
    icon: 'Heart'
  }
];
