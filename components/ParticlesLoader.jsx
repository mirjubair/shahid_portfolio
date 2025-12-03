"use client";
import dynamic from "next/dynamic";
import React from "react";

/**
 * Client wrapper that lazy-loads the actual ParticleBackground (client-only).
 * Keeps page/server components clean and avoids SSR parse issues.
 */
const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });

export default function ParticlesLoader(props) {
  // pass props through (count, hue)
  return <ParticleBackground {...props} />;
}
