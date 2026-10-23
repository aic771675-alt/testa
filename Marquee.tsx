export default function Marquee() {
  return (
    <div className="bg-[#0a0a0a] py-5 overflow-hidden border-y border-white/10">
      <div className="marquee-track">
        {[...Array(2)].map((_, set) => (
          <div key={set} className="flex items-center">
            {['ИЗГОТОВЛЕНО ИЗ ЗОЛОТА', 'ЭТИЧНАЯ ДОБЫЧА', 'ПОЖИЗНЕННАЯ ГАРАНТИЯ', 'БЕСПЛАТНАЯ ДОСТАВКА ПО ВСЕМУ МИРУ', 'СДЕЛАНО ВРУЧНУЮ В ИТАЛИИ', 'СЕРТИФИЦИРОВАННЫЕ БРИЛЛИАНТЫ'].map((text, i) => (
              <span key={`${set}-${i}`} className="font-sans-lux text-white/40 text-[11px] tracking-[0.35em] uppercase font-light px-8 flex items-center gap-8">
                {text}
                <span className="text-white/20 text-[6px]">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
