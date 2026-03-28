import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Premium Care for Your
              <span className="text-emerald-600"> Feline Friends</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our curated selection of veterinarian-recommended cat food and premium litter solutions.
              Your cat's health and comfort are our top priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="group bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all hover:shadow-lg flex items-center justify-center"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-gray-600">Happy Cats</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.8/5</p>
                <p className="text-gray-600">Customer Rating</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5K+</p>
                <p className="text-gray-600">Reviews</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg"
                alt="Beautiful cat"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-sm text-gray-600 mb-1">Trusted by veterinarians</p>
              <p className="text-2xl font-bold text-emerald-600">Since 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
