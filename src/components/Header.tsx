import { ShoppingCart } from "lucide-react";
import { useStore } from "../store/useStore";
import llLogo from "../assets/ll_logo.png";

interface HeaderProps {
  onCartClick: () => void;
}

export const Header = ({ onCartClick }: HeaderProps) => {
  const cart = useStore((state) => state.cart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={llLogo} alt="LaraLuna logo" className="object-contain w-20 h-10" />
            <span className="text-2xl font-bold text-gray-900">
              LaraLuna Pet Shop
            </span>
          </div>

          <div className="items-center hidden space-x-8 md:flex">
            <a
              href="#products"
              className="font-medium text-gray-700 transition-colors hover:text-emerald-600"
            >
              Products
            </a>
            <a
              href="#features"
              className="font-medium text-gray-700 transition-colors hover:text-emerald-600"
            >
              Why Choose Us
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 transition-colors hover:text-emerald-600"
            >
              About
            </a>
          </div>

          <button
            onClick={onCartClick}
            className="relative p-2 transition-colors rounded-full hover:bg-gray-100"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full -top-1 -right-1 bg-emerald-600">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
