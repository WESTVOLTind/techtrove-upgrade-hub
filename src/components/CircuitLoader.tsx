import { Laptop, Smartphone, Headphones } from "lucide-react";

const CircuitLoader = () => {
  return (
    <div className="relative flex items-center justify-center py-12">
      {/* Outer ring */}
      <div className="absolute w-48 h-48 rounded-full border border-primary/20 animate-spin-slow" />
      <div className="absolute w-48 h-48 rounded-full border border-primary/10 animate-pulse-ring" />

      {/* Circuit lines */}
      <svg className="absolute w-56 h-56" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(190 100% 50% / 0.1)" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(190 100% 50% / 0.15)" strokeWidth="1" strokeDasharray="8 12" className="animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
        {/* Nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 100 + 80 * Math.cos(rad);
          const y = 100 + 80 * Math.sin(rad);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill="hsl(190 100% 50%)"
              className="animate-circuit-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          );
        })}
      </svg>

      {/* Floating icons */}
      <div className="relative flex items-center gap-6">
        <Laptop className="w-8 h-8 text-primary animate-float" style={{ animationDelay: '0s' }} />
        <Smartphone className="w-10 h-10 text-primary animate-float" style={{ animationDelay: '0.5s' }} />
        <Headphones className="w-8 h-8 text-primary animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default CircuitLoader;
