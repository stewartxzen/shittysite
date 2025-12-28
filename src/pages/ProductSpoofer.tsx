import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductSpoofer = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("1day");

  const plans = [
    { id: "1day", label: "1 Day", price: 9.99 },
    { id: "7day", label: "7 Days", price: 29.99 },
    { id: "30day", label: "30 Days", price: 59.99 },
  ];

  const selectedPrice = plans.find(p => p.id === selectedPlan)?.price || 9.99;

  const features = {
    hwid: [
      "HWID Spoofer",
      "MAC Address Spoofer",
      "Disk Serial Spoofer",
      "GPU ID Spoofer",
      "CPU ID Spoofer",
      "RAM Serial Spoofer",
      "Motherboard Serial Spoofer",
      "System UUID Spoofer",
    ],
    advanced: [
      "GPU Driver Spoofer",
      "BIOS Spoofer",
      "Windows Installation ID Spoofer",
      "Product ID Spoofer",
      "Windows Version Spoofer",
      "Locale Spoofer",
      "Timezone Spoofer",
    ],
    detection: [
      "Anti-Cheat Detection Bypass",
      "BattlEye Detection Bypass",
      "EAC Detection Bypass",
      "Xigncode3 Detection Bypass",
      "Vitality Detection Bypass",
      "Ricochet Detection Bypass",
    ],
    virtualization: [
      "Virtual Machine Detection Removal",
      "Sandbox Detection Removal",
      "Hypervisor Detection Removal",
      "Debugger Detection Removal",
      "DLL Injection Detection Removal",
    ],
    network: [
      "IP Address Spoofer",
      "VPN Detection Bypass",
      "Proxy Support",
      "DNS Spoofing",
      "Network Adapter Spoofer",
    ],
    advanced_features: [
      "Registry Cleaner",
      "Event Log Cleaner",
      "Temp File Cleaner",
      "Browser Cache Cleaner",
      "Driver Cleaner",
      "Game Config Cleaner",
    ],
    misc: [
      "Batch HWID Spoof",
      "One-Click Spoof",
      "Auto Update",
      "Multi-Language Support",
      "24/7 Support",
      "Lifetime License Option",
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
                src="https://i.ibb.co/G4cPf1YF/woofer1.png"
                alt="Spoofer"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <img
                  src="https://i.ibb.co/FkkzHmtJ/files-spoofer-logo.png"
                  alt="Spoofer Logo"
                  className="h-12"
                />
              </div>
            </div>

            {/* Purchase Card */}
            <div className="bg-card rounded-2xl border border-border p-6 glow-box">
              <h2 className="text-xl font-display font-bold text-foreground mb-6">Select Plan</h2>
              
              {/* Plan Selection */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card hover:border-primary/50 text-muted-foreground"
                    }`}
                  >
                    <div className="font-semibold">{plan.label}</div>
                    <div className="text-lg font-bold">${plan.price}</div>
                  </button>
                ))}
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-muted-foreground">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6 py-4 border-t border-b border-border">
                <span className="text-muted-foreground">Total</span>
                <span className="text-2xl font-display font-bold text-primary">
                  ${(selectedPrice * quantity).toFixed(2)}
                </span>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <Button variant="glow" className="w-full text-lg py-6">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="heroOutline" className="w-full text-lg py-6">
                  Buy Now
                </Button>
              </div>

              {/* Stock Status */}
              <div className="mt-4 flex items-center justify-center gap-2 text-green-500">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">In Stock</span>
              </div>
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
              <span className="text-primary font-semibold">🛡️ Complete HWID & Anti-Cheat Spoofer</span>
            </div>

            <FeatureSection title="HWID Spoofing" icon="🔧" items={features.hwid} iconClass="text-primary" />
            <FeatureSection title="Advanced Spoofers" icon="⚙️" items={features.advanced} iconClass="text-primary" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Anti-Cheat Detection" icon="🚫" items={features.detection} iconClass="text-yellow-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Virtualization Bypass" icon="💻" items={features.virtualization} iconClass="text-blue-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Network Features" icon="🌐" items={features.network} iconClass="text-green-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Advanced Features" icon="🎯" items={features.advanced_features} iconClass="text-purple-500" />
            
            <div className="border-t border-border my-6" />
            
            <FeatureSection title="Misc" icon="🧰" items={features.misc} iconClass="text-orange-500" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductSpoofer;
