export const Ticker = () => {
  const tickerText = "ISAAC ADEBISI";
  const repeats = 12;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary overflow-hidden py-2">
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: repeats }).map((_, i) => (
          <span key={i} className="mx-8 text-sm font-bold tracking-widest text-primary-foreground">
            {tickerText} <span className="mx-4 opacity-50">•</span>
          </span>
        ))}
        {Array.from({ length: repeats }).map((_, i) => (
          <span key={`dup-${i}`} className="mx-8 text-sm font-bold tracking-widest text-primary-foreground">
            {tickerText} <span className="mx-4 opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};
