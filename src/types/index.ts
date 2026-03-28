export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'litter' | 'food';
  features: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
}
