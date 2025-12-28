import Hero from "@/components/Hero";
import CategoryBar from "@/components/CategoryBar";
import Products from "@/components/Products";
import Comparison from "@/components/Comparison";
import Trusted from "@/components/Trusted";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <CategoryBar />
      <Products />
      <Comparison />
      <Trusted />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
