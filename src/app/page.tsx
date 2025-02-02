// Components

import Hero from "./components/Hero";
import Shoes from "./components/Shoes";
import Featured from "./components/Featured";
import GearUp from "./components/GearUp";
import Flight from "./components/Flight";
import Category from "./components/Catergories";
import Essential from "./components/Essentials";

// Responsive Project

export default function Home() {
  return (
    <div className="w-full h-auto sm:max-w-[1440px] font-medium">
      <Hero />

      <Shoes />

      <Featured />

      <GearUp />

      <Flight />

      <Essential />

      <Category />
    </div>
  );
}
