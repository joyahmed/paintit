import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const Map = () => {
  const MyMap = useMemo(
    () =>
      dynamic(() => import("../components/MapComponent"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className="overflow-contain flex min-h-screen w-screen items-center justify-center">
      <div className="w-site flex h-[30rem] items-center justify-center overflow-hidden">
        <MyMap />
      </div>
    </div>
  );
};

export default Map;
