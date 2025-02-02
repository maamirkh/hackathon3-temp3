// Components

import Header from "./components/Header";
// import Hero from './components/hero';
// import Shoes from "./components/Shoes";
// import Featured from "./components/featured";
// import Gear from "./components/GearUp";
// import Essential from "./components/Essential";
import Footer from "./components/Footer";

import Cards from "./components/Header";

import Images from "./pics/gearup/Images.png";
import Hero from "./components/Hero";
import Shoes from "./components/Shoes";
import Featured from "./components/Featured";
import GearUp from "./components/GearUp";
import Flight from "./components/Flight";
import Category from "./components/Catergories";
import Essential from "./components/Essentials";

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
