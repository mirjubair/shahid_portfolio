"use client";
import { useEffect } from "react";

/*
 ParticleBackground - elliptical "stardust" orbits
 Props:
   - count (number) default 140
   - hue (number) default 210
   - speed (number) global speed multiplier default 1.2 (increase for faster motion)
*/
export default function ParticleBackground({ count = 140, hue = 210, speed = 0.6 }) {
  useEffect(() => {
    const root = document.getElementById("particle-root");
    if (!root) return;
    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    root.appendChild(canvas);
    const ctx = canvas.getContext("2d", { alpha: true });

    let width = 0, height = 0, dpr = Math.max(1, window.devicePixelRatio || 1);
    let raf = null;
    let particles = [];

    const rand = (min, max) => Math.random() * (max - min) + min;

    function resize() {
      const rect = root.getBoundingClientRect();
      width = Math.max(300, Math.floor(rect.width));
      height = Math.max(300, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < count; i++) {
        const depth = Math.pow(Math.random(), 2) * 2.2 + 0.3; // 0.3 .. ~2.5
        const rx = rand(width * 0.08, width * 0.6) * (0.6 + Math.random() * 0.8); // ellipse radius x
        const ry = rx * rand(0.35, 0.85); // ellipse radius y (elliptical shape)
        const cx = rand(width * 0.15, width * 0.85); // ellipse center x
        const cy = rand(height * 0.15, height * 0.85); // ellipse center y
        const baseAngle = rand(0, Math.PI * 2);
        // speed scaled by depth (farther -> slower) but global speed multiplier applied
        const angularSpeed = (rand(0.0006, 0.0020) * (1 / depth)) * speed;
        particles.push({
          cx, cy, rx, ry, depth,
          angle: baseAngle,
          angularSpeed,
          size: rand(0.6, 2.6) * depth,
          hue: (hue + rand(-50, 50)) | 0,
          alpha: rand(0.12, 0.9),
          phase: rand(0, Math.PI * 2),
          wobble: rand(0.2, 1.8)
        });
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, width, height);

      // subtle slow space tint / vignette (very light)
      // ctx.fillStyle = "rgba(0,0,0,0.02)";
      // ctx.fillRect(0,0,width,height);

      for (let p of particles) {
        // advance angle (elliptical orbit)
        p.angle += p.angularSpeed * 60; // multiply so motion is visible (frame-rate corrected is simple here)
        // small wobble along radius to feel organic
        const wob = Math.sin((t * 0.0006 + p.phase) * p.wobble) * (p.wobble * 0.6);

        // elliptical coordinates with wobble
        const x = p.cx + (p.rx + wob) * Math.cos(p.angle);
        const y = p.cy + (p.ry + wob * 0.6) * Math.sin(p.angle);

        // slight depth parallax shift from center
        const parallax = (p.depth - 1.2) * 6;
        const px = x + parallax * Math.cos(p.phase + t * 0.00002);
        const py = y + parallax * Math.sin(p.phase + t * 0.00002);

        // radial gradient for glow
        const s = p.size;
        const grd = ctx.createRadialGradient(px, py, 0, px, py, s * 8);
        const colCenter = `hsla(${p.hue}deg, 78%, 64%, ${Math.min(1, p.alpha)})`;
        grd.addColorStop(0, colCenter);
        grd.addColorStop(0.5, `hsla(${p.hue}deg, 72%, 56%, ${Math.min(0.18, p.alpha * 0.45)})`);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(px, py, s * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop(t) {
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    // init
    resize();
    initParticles();
    raf = requestAnimationFrame(loop);

    let resizeTimer = null;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        initParticles();
      }, 120);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (root.contains(canvas)) root.removeChild(canvas);
      particles = [];
    };
  }, [count, hue, speed]);

  return null;
}
