import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  const collections = ['Кольца', 'Колье', 'Серьги', 'Браслеты'];
  const discover = ['Новинки', 'Хиты продаж', 'Лукбук', 'Гид по подаркам'];
  const support = ['Связаться с нами', 'Доставка', 'Возврат', 'Уход за украшениями'];

  return (
    <footer className="bg-[#0a0a0a] text-white grain-overlay">
      {/* Newsletter CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="fade-up">
            <h3 className="font-serif-lux text-3xl md:text-5xl font-light leading-tight">
              Вступайте в
              <span className="italic"> закрытый круг</span>
            </h3>
            <p className="font-sans-lux text-white/50 text-sm font-light mt-4 max-w-sm">
              Приватные предпросмотры, ранний доступ к новым коллекциям и приглашения на эксклюзивные мероприятия.
            </p>
          </div>
          <div className="flex gap-3 fade-up" style={{ transitionDelay: '100ms' }}>
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-transparent border-b border-white/20 px-1 py-3 font-sans-lux text-sm font-light text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-colors"
            />
            <button className="bg-white text-[#0a0a0a] px-6 py-3 font-sans-lux text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-white/90 transition-all duration-300 flex items-center gap-2">
              Подписаться
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif-lux text-white tracking-[0.3em] text-2xl font-light">
              EXCELLENT
              <span className="block text-[0.6em] tracking-[0.5em] text-white/40 mt-1">
                JEWELLERY
              </span>
            </span>
            <p className="font-sans-lux text-white/40 text-sm font-light mt-5 max-w-xs leading-relaxed">
              Кольца, браслеты и серьги ручной работы, созданные в Италии с 1987 года. Где мастерство встречается с вечностью.
            </p>
            <div className="flex items-center gap-5 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="Социальная сеть"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans-lux text-white/90 text-[11px] tracking-[0.25em] uppercase font-medium mb-5">
              Коллекции
            </h4>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans-lux text-white/50 hover:text-white text-sm font-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans-lux text-white/90 text-[11px] tracking-[0.25em] uppercase font-medium mb-5">
              Открыть
            </h4>
            <ul className="space-y-3">
              {discover.map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans-lux text-white/50 hover:text-white text-sm font-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans-lux text-white/90 text-[11px] tracking-[0.25em] uppercase font-medium mb-5">
              Контакты
            </h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans-lux text-white/50 hover:text-white text-sm font-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-10 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans-lux text-white/30 text-[11px] tracking-[0.15em] font-light">
            © 2026 EXCELLENT JEWELLERY. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans-lux text-white/30 hover:text-white/60 text-[11px] tracking-[0.15em] font-light transition-colors">
              КОНФИДЕНЦИАЛЬНОСТЬ
            </a>
            <a href="#" className="font-sans-lux text-white/30 hover:text-white/60 text-[11px] tracking-[0.15em] font-light transition-colors">
              УСЛОВИЯ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
