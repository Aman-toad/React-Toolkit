import React from "react";
import StarField from "../components/StarBackground";
import Navigation from "../components/Navbar";

export default function Home() {

  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="min-h-screen">
        <Navigation />
      </div>
    </div>
  )
}