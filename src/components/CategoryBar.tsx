const categories = [
  // { name: "Accounts", icon: "https://i.ibb.co/hF3s9qkR/pngfind-com-fortnite-battle-royale-logo-3102410.png" },
  { name: "Spoofer", icon: "https://i.imgur.com/zoAdDMK.png", slug: "spoofer" },
  { name: "Fortnite", icon: "https://i.ibb.co/C3ZXY8N8/Fortnite-Icon.png", slug: "fortnite-products" },
  // { name: "COD", icon: "https://cdn3.emoji.gg/emojis/7863-callofdutymobile.png" },
  { name: "Rust", icon: "https://cdn3.emoji.gg/emojis/1355-rust.png", slug: "rust" },
  // { name: "R6", icon: "https://i.ibb.co/4nwn0TZw/rainbow-6-siege-icon-0.png" },
  // { name: "Battlefield", icon: "https://i.ibb.co/dsGL4pxz/battlefield-6-icon-by-hatemtiger-dkm68bl-375w-2x.png" },
  // { name: "Apex", icon: "https://i.ibb.co/ZpSSdfnX/apex-legends-1.jpg" },
  // { name: "PUBG", icon: "https://i.ibb.co/zWXxxPXX/PUBG-Squad-Logo-PNG-Download-Image.png" },
];

const CategoryBar = () => {
  const getLinkPath = (slug: string) => {
    if (slug === "rust") return "/rust-internal";
    if (slug === "fortnite-products") return "/fortnite-products";
    if (slug === "spoofer") return "/spoofer";
    return `/product/${slug}`;
  };

  return (
    <section className="py-8 border-y border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {categories.map((category) => (
            <a
              key={category.name}
              href={getLinkPath(category.slug)}
              className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-lg p-2 group-hover:bg-primary/20 transition-colors duration-300">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
