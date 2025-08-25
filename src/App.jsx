import React from "react";
import Navbar from "./components/Navbar";
import LowHead from "./components/LowHead";
import G1Pic from "./components/G1Pic";
import G2Pic from "./components/G2Pic";
import G3Pic from "./components/G3Pic";
import G4Pic from "./components/G4Pic";
import G5Pic from "./components/G5Pic";
import G6Pic from "./components/G6Pic";

function App() {
  return (
    <div className="relative h-screen w-full overflow-x-hidden bg-zinc-200 cursor-default font-poppins px-6">
      {/* Amber rotated rectangle */}
      <div className="fixed top-[-400px] right-[400px] rotate-[60deg] h-[2500px] w-[700px] bg-amber-100"></div>

      {/* Blur overlay */}
      <div className="absolute top-0 left-0 h-full w-full backdrop-blur-[90px] z-10"></div>

      {/* Example content so you can see layers */}
      {/* <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-5xl font-bold text-white">Hello Tailwind</h1>
      </div> */}

      <Navbar />
      <LowHead />

      <div className="grid grid-cols-4 grid-rows-2 gap-1 relative z-10 max-h-[calc(100%-364px)] h-full">

        <G1Pic/>

        <G2Pic/>

        <G3Pic/>

        <G4Pic/>

        <G5Pic/>

        <G6Pic/>

    </div>


    </div>
  );
}

export default App;
