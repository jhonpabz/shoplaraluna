import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onCartClick={() => setShowCart(true)} />
      <main>
        {showCart ? (
          <Cart onBack={() => setShowCart(false)} />
        ) : (
          <>
            <Hero />
            <Products />
            <Features />
            <CallToAction />
          </>
        )}
      </main>
      {!showCart && <Footer />}
    </div>
  );
}

export default App;
