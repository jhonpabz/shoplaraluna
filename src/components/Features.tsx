import { Truck, Award, MessageCircle, Heart } from 'lucide-react';
import { features } from '../data/products';

const iconMap = {
  Truck,
  Award,
  MessageCircle,
  Heart
};

export const Features = () => {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose PurrfectCare?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best products and service for your beloved cats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <div
                key={feature.id}
                className="text-center p-6 rounded-xl hover:bg-emerald-50 transition-colors duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
