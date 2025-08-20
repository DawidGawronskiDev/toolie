import React, { useRef, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

const STAR_COUNT = 120;
const LIGHT_STAR_COLOR = "rgba(0,0,0,0.5)";
const DARK_STAR_COLOR = "rgba(255,255,255,0.5)";
const STAR_SIZE = [0.5, 1.2];
const STAR_SPEED = [0.02, 0.08];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Star {
  x: number;
  y: number;
  r: number;
  speed: number;
}

const StarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: randomBetween(STAR_SIZE[0], STAR_SIZE[1]),
      speed: randomBetween(STAR_SPEED[0], STAR_SPEED[1]),
    }));

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const starColor = theme === "dark" ? DARK_STAR_COLOR : LIGHT_STAR_COLOR;
      for (const star of stars.current) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = starColor;
        ctx.shadowColor = starColor;
        ctx.shadowBlur = 6;
        ctx.fill();
        // Move star
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default StarsBackground;
