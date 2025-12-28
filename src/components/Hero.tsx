import { Button } from "@/components/ui/button";
import { Star, Users, Package } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(target);
  const hasAnimated = useRef(false);
  const targetRef = useRef(target);

  useEffect(() => {
    if (hasAnimated.current) return;

    hasAnimated.current = true;
    setCount(0);
    
    const duration = 2000;
    const steps = 60;
    const increment = targetRef.current / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetRef.current) {
        setCount(targetRef.current);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Provider badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
            <span className="text-primary font-semibold">#1</span>
            <span className="text-muted-foreground">Provider since 2024</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-4 animate-slide-up">
            <span className="text-foreground glow-text-white">Dominate The NOOBS</span>
            <br />
            <span className="text-foreground glow-text-white">With </span>
            <span className="text-gradient glow-text">Aion</span>
          </h1>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-bold text-foreground">5.0</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="text-muted-foreground">
            <span className="font-bold text-foreground">200+</span> Happy Customers
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="text-muted-foreground">
            <span className="font-bold text-foreground">99.9%</span> Uptime
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Welcome to <span className="text-foreground font-semibold">Aion</span> — An all-in-one modding solution engineered for{" "}
          <span className="text-primary">performance</span>,{" "}
          <span className="text-primary">dependability</span>, and{" "}
          <span className="text-primary">top-tier support</span>.
        </p>

        {/* Features list */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span><span className="text-foreground font-medium">Instant delivery</span> in 30 seconds or less</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span><span className="text-foreground font-medium">100% safe & legal</span> methods</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span><span className="text-foreground font-medium">24/7 customer support</span></span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="xl" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Gaming Now
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://discord.gg/Bgam5Ps6Gf" target="_blank" rel="noopener noreferrer">
              Join Our Discord
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
              <AnimatedCounter target={241} />
            </div>
            <div className="text-muted-foreground">Customers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
              <AnimatedCounter target={2351} />
            </div>
            <div className="text-muted-foreground">Products Sold</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
              <AnimatedCounter target={5} />
            </div>
            <div className="text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
