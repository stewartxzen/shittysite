import { Button } from "@/components/ui/button";

const Trusted = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-primary font-semibold">Trusted by Thousands</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            We Are Proud to Have Sold{" "}
            <span className="text-gradient glow-text">2k+</span> Products
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Growing stronger every day - consistently increasing sales while delivering premium quality, full transparency, and lightning-fast service to a global community of satisfied customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="hero" size="xl" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              Shop Now
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              asChild
            >
              <a
                href="https://discord.gg/Bgam5Ps6Gf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
