import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductRust from "./pages/ProductRust";
import ProductFortnite from "./pages/ProductFortnite";
import ProductSpoofer from "./pages/ProductSpoofer";
import GameRust from "./pages/GameRust";
import GameFortnite from "./pages/GameFortnite";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/rust" element={<ProductRust />} />
          <Route path="/product/fortnite" element={<ProductFortnite />} />
          <Route path="/product/spoofer" element={<ProductSpoofer />} />
          <Route path="/rust-products" element={<GameRust />} />
          <Route path="/fortnite-products" element={<GameFortnite />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
