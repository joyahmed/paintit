import { rooferLight } from "@/src/assets";
import Image from "next/image";
import React from "react";

const ScrollSnap = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-hidden overflow-y-scroll">
      <div className="flex h-screen w-screen snap-center items-center justify-center bg-amber-200">
        <Image src='/logo/roofer-light.svg' alt="logo" width={200} height={200} />
      </div>
      <div className="flex h-screen w-screen snap-center items-center justify-center bg-teal-200">
        2
      </div>
      <div className="flex h-screen w-screen snap-center items-center justify-center bg-cyan-200">
        3
      </div>
      <div className="flex h-screen w-screen snap-center items-center justify-center bg-fuchsia-200">
        4
      </div>
    </div>
  );
};

export default ScrollSnap;
