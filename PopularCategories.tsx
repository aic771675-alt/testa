import { categories } from '@/data/products';

export default function PopularCategories() {
  return (
    <section id="categories" className="px-6 md:px-10 lg:px-16 py-20 md:py-28 bg-[#0a0a0a] grain-overlay">
      <div className="text-center mb-12 md:mb-16 fade-up">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-8 h-px bg-white/30" />
          <span className="font-sans-lux text-white/50 text-[10px] tracking-[0.35em] font-medium uppercase">
            Тщательная подборка
          </span>
          <div className="w-8 h-px bg-white/30" />
        </div>
        <h2 className="font-serif-lux text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
          Популярные категории
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {categories.map((cat, index) => (
          <a
            key={cat.id}
            href="#"
            className="relative overflow-hidden aspect-[4/5] group fade-up"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
              <span className="font-sans-lux text-white/50 text-[9px] tracking-[0.3em] uppercase font-light">
                {cat.count}
              </span>
              <h3 className="font-serif-lux text-white text-2xl md:text-3xl lg:text-4xl font-light mt-2 group-hover:translate-x-1 transition-transform duration-500">
                {cat.name}
              </h3>
              <span className="block mt-4 font-sans-lux text-white/0 group-hover:text-white/80 text-[10px] tracking-[0.3em] uppercase transition-all duration-500">
                Купить →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
