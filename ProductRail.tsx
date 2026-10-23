import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Product } from '@/data/products';

type Props = {
  id: string;
  label: string;
  title: string;
  products: Product[];
};

export default function ProductRail({ id, label, title, products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.4;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id={id} className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-[#f5f3f1]">
      <div className="flex items-end justify-between mb-10 md:mb-14 fade-up">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-[#0a0a0a]/40" />
            <span className="font-sans-lux text-[#0a0a0a]/50 text-[10px] tracking-[0.35em] font-medium uppercase">
              {label}
            </span>
          </div>
          <h2 className="font-serif-lux text-[#0a0a0a] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            {title}
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 border border-[#0a0a0a]/20 hover:bg-[#0a0a0a] hover:text-white text-[#0a0a0a] flex items-center justify-center transition-all duration-300"
            aria-label="Прокрутить влево"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 border border-[#0a0a0a]/20 hover:bg-[#0a0a0a] hover:text-white text-[#0a0a0a] flex items-center justify-center transition-all duration-300"
            aria-label="Прокрутить вправо"
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 md:gap-7 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2 -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16"
      >
        {products.map((product, index) => (
          <article
            key={product.id}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start fade-up group"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="img-zoom relative bg-white overflow-hidden aspect-square mb-5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 font-sans-lux text-[9px] tracking-[0.25em] font-medium uppercase bg-[#0a0a0a] text-white px-3 py-1.5 z-10">
                  {product.tag}
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <button className="font-sans-lux text-white text-[10px] tracking-[0.25em] uppercase border-b border-white/60 pb-1">
                  Быстрый просмотр
                </button>
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif-lux text-[#0a0a0a] text-xl md:text-2xl font-light">
                {product.name}
              </h3>
              <span className="font-sans-lux text-[#0a0a0a]/60 text-sm font-light">
                {product.price}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
