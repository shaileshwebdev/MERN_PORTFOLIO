import React from "react";
import Home from "@/pages/Home";
import ParticlesComponent from "./Particles";

const Layout = () => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Main Content */}

      <ParticlesComponent
        id="tsparticles"
        className="fixed inset-0 -z-10 pointer-events-none"
      />

      <main className="p-4 z-10">
        <Home />
      </main>
    </div>
  );
};

export default Layout;
