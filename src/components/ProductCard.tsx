import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  logo: string;
  price: string;
  alt: string;
  slug?: string;
}

const ProductCard = ({ image, logo, price, alt, slug }: ProductCardProps) => {
  const cardContent = (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border card-hover glow-box">
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient shadow overlay - fixed position over image */}
      <div className="absolute aspect-square w-full top-2 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img
            src={logo}
            alt={`${alt} logo`}
            className="h-8 object-contain"
          />
        </div>

        {/* Price */}
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground">Starting From</span>
          <div className="text-2xl font-display font-bold text-primary">{price}</div>
        </div>

        {/* Button */}
        <Button variant="glow" className="w-full">
          View Products
        </Button>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-5">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>
    </div>
  );


  if (slug === "rust") {
    return <a href="/rust-internal">{cardContent}</a>;
  }
  if (slug === "fortnite-products") {
    return <a href="/fortnite-products">{cardContent}</a>;
  }
  if (slug === "spoofer") {
    return <a href="/spoofer">{cardContent}</a>;
  }
  if (alt === "Black Ops 6") {
    return <a href="/callofduty">{cardContent}</a>;
  }
  if (slug) {
    return <Link to={`/product/${slug}`}>{cardContent}</Link>;
  }

  return cardContent;
};

export default ProductCard;