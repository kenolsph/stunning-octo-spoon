export const Ticker = () => {
  const tickerText = "Isaac.Dev";
  const repeats = 12;

  return (
    <div className="bg-secondary/80 backdrop-blur-sm border-t border-border overflow-hidden py-2">
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: repeats }).map((_, i) => (
          <span key={i} className="mx-8 text-sm font-bold tracking-widest text-muted-foreground">
            {tickerText} <span className="mx-4 text-primary">✦</span>
          </span>
        ))}
        {Array.from({ length: repeats }).map((_, i) => (
          <span key={`dup-${i}`} className="mx-8 text-sm font-bold tracking-widest text-muted-foreground">
            {tickerText} <span className="mx-4 text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
