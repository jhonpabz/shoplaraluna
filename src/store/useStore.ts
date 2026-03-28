import { create } from 'zustand';
import { Product, CartItem } from '../types';
import { products as initialProducts } from '../data/products';

interface StoreState {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  products: initialProducts,
  cart: [],

  addToCart: (product) => {
    const { cart } = get();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      set({
        cart: cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (productId) => {
    set({ cart: get().cart.filter(item => item.id !== productId) });
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }

    set({
      cart: get().cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    });
  },

  clearCart: () => {
    set({ cart: [] });
  },

  getCartTotal: () => {
    return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}));
