"use client";

import { useRef } from "react";
import VariableProximity from "@/components/VariableProximity";

const DropText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef as React.RefObject<HTMLDivElement>} style={{ position: "relative" }}>
      <VariableProximity
        label={"Hover me! And then star React Bits on GitHub, or else..."}
        className={"variable-proximity-demo"}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef as React.RefObject<HTMLElement>}
        radius={100}
        falloff="linear"
      />
    </div>
  );
};

export default DropText;
