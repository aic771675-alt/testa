export default function EditorialBanners() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 md:py-28 bg-[#f5f3f1]">
      <div className="grid md:grid-cols-2 gap-5 md:gap-7">
        {/* Left — white dress, earring */}
        <div className="relative overflow-hidden h-[600px] md:h-[750px] grain-overlay group fade-up">
          <img
            src="https://images.pexels.com/photos/3771099/pexels-photo-3771099.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Модель в белом платье с эффектной серьгой"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
            <span className="font-sans-lux text-white/70 text-[10px] tracking-[0.35em] uppercase font-light">
              Белая коллекция
            </span>
            <h3 className="font-serif-lux text-white text-4xl md:text-5xl lg:text-6xl font-light mt-3 leading-tight">
              Светлая
              <span className="block italic font-extralight">Грация</span>
            </h3>
            <a
              href="#"
              className="inline-block font-sans-lux text-white text-[11px] tracking-[0.3em] uppercase mt-6 border-b border-white/50 pb-1 hover:border-white transition-colors"
            >
              Смотреть лукбук
            </a>
          </div>
        </div>

        {/* Right — black suit, ring */}
        <div className="relative overflow-hidden h-[600px] md:h-[750px] grain-overlay group fade-up" style={{ transitionDelay: '120ms' }}>
          <img
            src="https://images.pexels.com/photos/25665198/pexels-photo-25665198.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Модель в чёрном костюме с кольцом в руке"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
            <span className="font-sans-lux text-white/70 text-[10px] tracking-[0.35em] uppercase font-light">
              Тёмная коллекция
            </span>
            <h3 className="font-serif-lux text-white text-4xl md:text-5xl lg:text-6xl font-light mt-3 leading-tight">
              Полночная
              <span className="block italic font-extralight">Прелесть</span>
            </h3>
            <a
              href="#"
              className="inline-block font-sans-lux text-white text-[11px] tracking-[0.3em] uppercase mt-6 border-b border-white/50 pb-1 hover:border-white transition-colors"
            >
              Смотреть лукбук
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
