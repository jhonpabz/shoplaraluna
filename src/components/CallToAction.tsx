import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Give Your Cat the Best?
        </h2>
        <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied pet owners who trust LaraLuna Pet Shop for
          their feline's needs. Get 15% off your first order!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg flex items-center justify-center">
            Shop Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
            Contact Us
          </button>
        </div>
        <p className="text-emerald-100 mt-6 text-sm">
          Free shipping on orders over $35 • 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
};
