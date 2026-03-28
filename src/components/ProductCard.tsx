import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useStore(state => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Save ${(product.originalPrice - product.price).toFixed(2)}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
            {product.category === 'food' ? 'Cat Food' : 'Cat Litter'}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviewCount})</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>

        <ul className="space-y-1 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-emerald-600 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-5 h-5" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};
