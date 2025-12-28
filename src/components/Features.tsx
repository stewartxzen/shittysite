import { CreditCard, DollarSign, Shield, Scale, Headphones, Zap } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Seamless Payment",
    description: "Ordering from us is a breeze. We accept all major cryptocurrencies, Cash App, and PayPal for your convenience.",
  },
  {
    icon: DollarSign,
    title: "Cheap Prices",
    description: "Our motto is to ensure everyone can access high-quality services at affordable prices.",
  },
  {
    icon: Shield,
    title: "Trusted & Reputable Seller",
    description: "Customers praise our top-tier services and premium support daily.",
  },
  {
    icon: Scale,
    title: "Legal Methods",
    description: "All our services are acquired legally, so you can enjoy peace of mind.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our Discord support team is always available to help — 24/7, every day.",
  },
  {
    icon: Zap,
    title: "Automatic Delivery",
    description: "Receive your products instantly after purchase with our automated delivery system.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <span className="text-primary font-semibold">We have exciting features!</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            <span className="text-gradient">Features</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
