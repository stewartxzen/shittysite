import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Footer from "@/components/Footer";

const fortniteProducts = [
  {
    id: "Internal",
    name: "Fortnite Public",
    image: "https://i.ibb.co/qYgc22tw/image.png",
    description: "Best Fortnite Public Cheat On the Market",
    startingPrice: "$4.99",
    features: ["Silent Aim", "ESP", "Aimbot", "Exploits"],
    status: "available" as const,
    slug: "fortnite-internal",
  },
  {
    id: "Private",
    name: "Fortnite Private",
    image: "https://i.ibb.co/chhg4ykF/image.png",
    description: "Best Fortnite Private Cheat On the Market",
    startingPrice: "$8.99",
    features: ["Rage Mode", "Full ESP", "Building Assist", "Speed Hack"],
    status: "available" as const,
    slug: "fortnite-private",
  },
  {
    id: "Coming Soon!",
    name: "Coming Soon!",
    image: "https://i.ibb.co/jdCjVd2/download-3.jpg",
    description: "Entry-level Fortnite Tools",
    startingPrice: "$4.99",
    features: ["Basic ESP", "Simple Aimbot", "No Recoil"],
    status: "coming-soon" as const,
    slug: "lite",
  },
];

const GameFortnite = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://i.ibb.co/cSBTVJGk/files-fortnite-logo.png"
              alt="Fortnite Logo"
              className="h-16"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            <span className="text-gradient">Fortnite</span> Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our selection of premium Fortnite enhancements
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
          {fortniteProducts.filter((_, index) => index < 2).map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border glow-box transition-all duration-300 hover:border-primary/50"
            >
              {/* Product Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {product.status === "available" ? (
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-500 text-sm font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-500 text-sm font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-md text-primary text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting From</span>
                    <div className="text-2xl font-display font-bold text-primary">
                      {product.startingPrice}
                    </div>
                  </div>
                  {product.status === "available" ? (
                    <a
                      href={product.slug === "fortnite-internal" ? "/fortnite" : product.slug === "fortnite-private" ? "/fortnite-private" : "#"}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      View
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground rounded-xl font-semibold cursor-not-allowed"
                    >
                      Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GameFortnite;
