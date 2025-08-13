import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import CommunityPreview from "@/components/CommunityPreview";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "dashboard">("home");

  if (currentView === "dashboard") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CommunityPreview />
      
      {/* Demo Dashboard Access */}
      <section className="py-12 px-6 text-center">
        <button
          onClick={() => setCurrentView("dashboard")}
          className="btn-hero"
        >
          View Dashboard Demo
        </button>
      </section>
    </div>
  );
};

export default Index;
