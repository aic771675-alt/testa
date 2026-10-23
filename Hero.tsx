export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1200px] overflow-hidden bg-[#0a0a0a] grain-overlay">
      <img
        src="https://images.pexels.com/photos/33271832/pexels-photo-33271832.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Кинематографичный портрет с ювелирными украшениями"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-10 lg:px-16 py-10 md:py-14">
        <div className="flex-1 flex items-end">
          <div className="max-w-2xl fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-white/60" />
              <span className="font-sans-lux text-white/70 text-[10px] tracking-[0.4em] font-light uppercase">
                Осень / Зима 2026
              </span>
            </div>
            <h1 className="font-serif-lux text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] tracking-tight text-shadow-lux">
              Искусство
              <br />
              <span className="italic font-extralight">Сияния</span>
            </h1>
            <p className="font-sans-lux text-white/70 text-sm md:text-base font-light mt-8 max-w-md leading-relaxed">
              Созданные вручную шедевры, где свет встречается с формой. Каждое изделие создано, чтобы стать утверждением вечной элегантности.
            </p>
            <div className="flex items-center gap-6 mt-10">
              <a
                href="#new-arrivals"
                className="font-sans-lux text-[#0a0a0a] bg-white px-8 py-4 text-[11px] tracking-[0.3em] font-medium uppercase hover:bg-white/90 transition-all duration-300"
              >
                Открыть
              </a>
              <a
                href="#categories"
                className="font-sans-lux text-white text-[11px] tracking-[0.3em] font-light uppercase border-b border-white/40 pb-1 hover:border-white transition-all duration-300"
              >
                Смотреть коллекцию
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="hidden md:flex items-center gap-8">
            <span className="font-sans-lux text-white/40 text-[10px] tracking-[0.3em] uppercase">Листайте</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
          <div className="text-right">
            <p className="font-serif-lux italic text-white/50 text-lg md:text-xl">
              "Ювелирные украшения — самое преображающее, что вы можете носить."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
