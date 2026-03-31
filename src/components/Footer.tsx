import { Mail, Phone, MapPin } from "lucide-react";
import llLogo from "../assets/ll_logo.png";

export const Footer = () => {
  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 mb-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <img src={llLogo} alt="LaraLuna logo" className="object-contain w-16 h-10" />
              <span className="text-2xl font-bold text-white md:text-lg">
                LaraLuna Pet Shop
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted source for premium cat supplies. Dedicated to keeping
              your feline friends healthy and happy.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="transition-colors hover:text-emerald-500"
                >
                  Cat Food
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="transition-colors hover:text-emerald-500"
                >
                  Cat Litter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-emerald-500"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-emerald-500"
                >
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-emerald-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-emerald-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-emerald-500"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-emerald-500"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">support@LaraLuna Pet Shop.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">1-800-MEOW-CARE</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  123 Pet Lane, Catville, CA 90210
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center border-t border-gray-800">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LaraLuna Pet Shop. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
