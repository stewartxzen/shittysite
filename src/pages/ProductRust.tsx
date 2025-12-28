import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { useEffect } from "react";

const ProductRust = () => {
  useEffect(() => {
    // Load SellHub embed script
    const script = document.createElement('script');
    script.src = 'https://public.sellhub.cx/embeds.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Raw HTML for SellHub buttons
  const sellhubButtonsHtml = `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <button
        data-sellhub-variant="940d2115-5a67-4716-b040-719b33586eee"
        style="width: 100%; background-color: hsl(var(--primary)); color: hsl(var(--primary-foreground)); font-weight: 600; padding: 12px 16px; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s; font-size: 16px;"
      >
        Buy Now - 1 Day ($9.99)
      </button>

      <button
        data-sellhub-cart-variant="940d2115-5a67-4716-b040-719b33586eee"
        style="width: 100%; background-color: hsl(var(--secondary)); color: hsl(var(--secondary-foreground)); font-weight: 600; padding: 12px 16px; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s; font-size: 16px;"
      >
        Add to Cart
      </button>

      <button
        data-sellhub-open-cart-store-url="https://aion.sellhub.cx"
        style="width: 100%; background-color: hsl(var(--muted)); color: hsl(var(--muted-foreground)); font-weight: 600; padding: 12px 16px; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s; font-size: 16px; display: flex; align-items: center; justify-content: center; gap: 8px;"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="21" r="1"/>
          <circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
        View Cart
      </button>
    </div>

    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid hsl(var(--border)); font-size: 12px; color: hsl(var(--muted-foreground));">
      <p><span style="font-weight: 500; color: hsl(var(--foreground));">Variant:</span> 1 Day - $9.99</p>
      <p><span style="font-weight: 500; color: hsl(var(--foreground));">Store:</span> aion.sellhub.cx</p>
    </div>
  `;

  const features = {
    aimbot: [
      "Memory Aim",
      "Silent Aim",
      "Hitbox Selection",
      "Aim Smoothing",
      "Simulated Projectiles",
      "Draw FOV",
      "Auto Fire",
      "Double Tap",
      "Hit Chance Control",
    ],
    targetFilters: [
      "Ignore NPC",
      "Ignore Sleepers",
      "Ignore Team",
      "Ignore Wounded",
      "360° Targeting",
      "Patrol Helicopter Targeting",
      "Can Hit Check",
    ],
    exploits: [
      "Bullet Teleport",
      "TP Hitbox",
      "Glass Hitbox",
      "Faster Bullets",
      "Bullet Pierce",
      "Desync",
      "Patrol Magic",
      "Mounted Magic",
      "Instant Hit",
      "Silent Melee",
    ],
    visuals: [
      "Player Name",
      "Box ESP",
      "Box Types",
      "Weapon ESP",
      "Skeleton ESP",
      "Distance ESP",
      "Steam ID",
      "Team ID",
      "Player Distance",
      "OFF-Screen Indicator",
      "Hotbar ESP",
      "Player Chams",
      "Hand Chams",
      "Draw Team",
      "Draw NPC",
      "Safe Zone ESP",
      "Wounded ESP",
    ],
    worldEsp: [
      "Corpses",
      "Corpse Names",
      "Corpse Distance",
      "Backpacks",
      "Backpack Distance",
      "Dropped Items",
      "Ore ESP",
      "Collectible ESP",
      "Raid ESP",
    ],
    worldTweaks: [
      "Bright Night",
      "Bright Cave",
      "Ambient Changer",
      "Skybox Changer",
    ],
    misc: [
      "Debug Camera",
      "Name Spoofer",
      "Instant Loot",
      "Admin Flags",
      "Fly Hack",
      "Interactive Debug",
      "Spinbot",
      "Speed Hack",
      "Zoom",
      "Aspect Ratio Changer",
      "Anti-Fly Bypass",
      "Loot Through Walls",
      "Omni Sprint",
      "Silent Walk",
      "Teleport",
      "No Fall Damage",
      "Walk on Water",
      "Spider-Man Mode",
      "No Player Collision",
    ],
    weaponMods: [
      "Recoil Changer",
      "Spread Changer",
      "Instant Eoka",
      "Silent Reload",
    ],
  };

  const FeatureSection = ({ title, icon, items, iconClass }: { title: string; icon: string; items: string[]; iconClass: string }) => (
    <div className="mb-8">
      <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-muted-foreground">
            <Check className={`w-4 h-4 ${iconClass}`} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image & Purchase */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border glow-box">
              <img
                src="https://i.ibb.co/svb1FKS8/ryust3.jpg"
                alt="Rust"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-3 left-6">
                <img
                  src="https://i.ibb.co/qF47qxQR/files-rust-logo.png"
                  alt="Rust Logo"
                  className="h-12"
                />
              </div>
            </div>

            {/* Purchase Card with HTML SellHub Buttons */}
            <div className="bg-card rounded-2xl border border-border p-6 glow-box">
              <h2 className="text-xl font-display font-bold text-foreground mb-6">Rust Internal</h2>
              
              {/* Raw HTML SellHub Buttons */}
              <div dangerouslySetInnerHTML={{ __html: sellhubButtonsHtml }} />
            </div>

            {/* Requirements */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
                ⚙️ Requirements
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="text-foreground font-medium">Supports:</span> Windows 10 / 11</p>
                <p><span className="text-foreground font-medium">Builds:</span> 21H2 / 22H2 / 23H2 / 24H2</p>
                <p><span className="text-foreground font-medium">CPU:</span> Intel / AMD</p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-primary font-semibold">🎯 Advanced Combat & Enhancement Suite</span>
            </div>

            <FeatureSection title="Aimbot" icon="🎯" items={features.aimbot} iconClass="text-primary" />
            <FeatureSection title="Target Filters" icon="🎯" items={features.targetFilters} iconClass="text-primary" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Exploits" icon="💥" items={features.exploits} iconClass="text-yellow-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Visuals" icon="👀" items={features.visuals} iconClass="text-blue-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="World ESP" icon="🌍" items={features.worldEsp} iconClass="text-green-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="World Visual Tweaks" icon="🌙" items={features.worldTweaks} iconClass="text-purple-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Misc" icon="🧰" items={features.misc} iconClass="text-orange-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Weapon Mods" icon="🔫" items={features.weaponMods} iconClass="text-red-500" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductRust;