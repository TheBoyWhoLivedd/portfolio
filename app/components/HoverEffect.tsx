"use client";
import { useEffect, useState } from "react";

export default function HoverEffect() {
  const [coordinates, setCoordinates] = useState({ x: "0px", y: "0px" });
  useEffect(() => {
    const updateCoordinates = (e: MouseEvent) => {
      setCoordinates({ x: `${e.pageX}px`, y: `${e.pageY}px` });
    };

    document.addEventListener("mousemove", updateCoordinates);
    return () => document.removeEventListener("mousemove", updateCoordinates);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${coordinates.x} ${coordinates.y}, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
