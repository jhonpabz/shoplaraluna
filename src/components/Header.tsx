import { ShoppingCart, Cat } from 'lucide-react';
import { useStore } from '../store/useStore';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header = ({ onCartClick }: HeaderProps) => {
  const cart = useStore(state => state.cart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cat className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-gray-900">PurrfectCare</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Products
            </a>
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Why Choose Us
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              About
            </a>
          </div>

          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
