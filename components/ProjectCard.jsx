"use client";
import { motion } from "framer-motion";
import Icon3D from "./Icon3D";

/**
 * Props:
 *  - title, href, description
 *  - thumbnail: optional string path (e.g. "/projects/powersky.svg" or "/projects/powersky.jpg")
 */
export default function ProjectCard({ title, href, description, thumbnail }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-4 block tilt"
      whileHover={{ scale: 1.02 }}
      style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
    >
      {/* Thumbnail area */}
      <div style={{ minWidth: 140, height: 96, borderRadius: 10, overflow: "hidden", flexShrink: 0 }}>
        {thumbnail ? (
          // use image if provided
          <img
            src={thumbnail}
            alt={title + " thumbnail"}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        ) : (
          // fallback: 3D icon inside a framed box
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))" }}>
            <div style={{ width: 96, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon3D title={title} />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3 className="text-lg font-semibold" style={{ marginBottom: 6 }}>{title}</h3>
        <p className="text-muted" style={{ marginBottom: 10 }}>{description}</p>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ padding: "0.2rem 0.5rem", borderRadius: 6, background: "rgba(108,92,231,0.08)", color: "var(--accent-1)", fontSize: 12 }}>Brand</span>
          <span className="small text-muted">Social • Web</span>
        </div>
      </div>
    </motion.a>
  );
}
