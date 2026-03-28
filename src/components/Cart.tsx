import { ArrowLeft, Trash2, Plus, Minus, Send } from 'lucide-react';
import { useStore } from '../store/useStore';
import { generateMessengerLink } from '../utils/messenger';

interface CartProps {
  onBack: () => void;
}

export const Cart = ({ onBack }: CartProps) => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useStore();
  const total = getCartTotal();

  const handleSendToMessenger = () => {
    if (cart.length === 0) return;

    const messengerLink = generateMessengerLink(cart);
    window.open(messengerLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Shopping
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-12">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <button
              onClick={onBack}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />

                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <p className="text-2xl font-bold text-emerald-600 mb-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="px-4 py-2 font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-emerald-600">Free</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold text-gray-900">${(total * 0.1).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8 text-xl">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-emerald-600">${(total * 1.1).toFixed(2)}</span>
                </div>

                <button
                  onClick={handleSendToMessenger}
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  <Send className="w-5 h-5" />
                  Send to Messenger
                </button>

                <button
                  onClick={onBack}
                  className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Continue Shopping
                </button>

                <button
                  onClick={clearCart}
                  className="w-full mt-3 text-red-500 hover:bg-red-50 py-2 rounded-lg font-semibold transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
