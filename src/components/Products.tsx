import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://i.ibb.co/mrC7Z2yR/fn1.png",
    logo: "https://i.ibb.co/cSBTVJGk/files-fortnite-logo.png",
    price: "$4.99",
    alt: "Fortnite",
    slug: "fortnite-products"
  },
  {
    image: "https://i.ibb.co/G4cPf1YF/woofer1.png",
    logo: "https://i.ibb.co/FkkzHmtJ/files-spoofer-logo.png",
    price: "$3.99",
    alt: "Spoofer",
    slug: "spoofer"
  },
  {
    image: "https://i.ibb.co/TDC9WVvt/ryust7.png",
    logo: "https://i.ibb.co/qF47qxQR/files-rust-logo.png",
    price: "$8.99",
    alt: "Rust",
    slug: "rust"
  },
  //
  // {
  //   image: "https://i.ibb.co/rNqdr6Z/cod1.png",
  //   logo: "https://i.ibb.co/5WwfK3fk/files-bo6-logo-e817b583-d527-489e-9dbc-23dc20b84fa4.png",
  //   price: "$5.99",
  //   alt: "Black Ops 6"
  // },
  // {
  //   image: "https://i.ibb.co/60HHDsvm/Untitled-design-4.png",
  //   logo: "https://i.ibb.co/tT2sJmLn/Accounts-1.png",
  //   price: "$0.50",
  //   alt: "Accounts"
  // },
  // {
  //   image: "https://i.ibb.co/W40nhtKJ/Untitled-design-8.png",
  //   logo: "https://i.ibb.co/DH19M95B/files-battlefield6-logo.png",
  //   price: "$5.99",
  //   alt: "Battlefield"
  // },
  // {
  //   image: "https://i.ibb.co/JRBCHQRT/Untitled-design-10.png",
  //   logo: "https://i.ibb.co/5hzYmgJQ/files-apex-logo.png",
  //   price: "$5.99",
  //   alt: "Apex Legends"
  // },
  // {
  //   image: "https://i.ibb.co/Jj0XKygn/Untitled-design-14.png",
  //   logo: "https://i.ibb.co/YBfHxZqg/pngimg-com-pubg-PNG29.png",
  //   price: "$5.99",
  //   alt: "PUBG"
  // },
  // {
  //   image: "https://i.ibb.co/tpnj32zR/Untitled-design-11.png",
  //   logo: "https://i.ibb.co/tMZCzZWs/files-r6s-logo.png",
  //   price: "$5.99",
  //   alt: "Rainbow Six Siege"
  // },
];

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <span className="text-primary font-semibold font-display">Aion</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our premium selection of gaming enhancements and tools
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.alt}
              className={isVisible ? "animate-fade-in" : "opacity-0"}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
