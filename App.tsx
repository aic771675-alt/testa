import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductRail from '@/components/ProductRail';
import EditorialBanners from '@/components/EditorialBanners';
import PopularCategories from '@/components/PopularCategories';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';
import { newArrivals, bestSellers } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f5f3f1]">
      <Header />
      <Hero />
      <Marquee />
      <ProductRail
        id="new-arrivals"
        label="Только что поступили"
        title="Новые поступления"
        products={newArrivals}
      />
      <EditorialBanners />
      <PopularCategories />
      <ProductRail
        id="best-sellers"
        label="Самые желанные"
        title="Хиты продаж"
        products={bestSellers}
      />
      <Footer />
    </div>
  );
}

export default App;
