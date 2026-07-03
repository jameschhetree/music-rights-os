"use client";

import { useEffect, useRef } from "react";

interface Bar {
  height: number;
  targetHeight: number;
  speed: number;
  phase: number;
  colorIndex: number;
}

const COLORS = [
  [108, 43, 217],
  [245, 197, 24],
  [59, 130, 246],
  [236, 72, 153],
  [16, 185, 129],
];

export default function WaveformBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let bars: Bar[] = [];
    const BAR_COUNT = 80;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initBars();
    };

    const initBars = () => {
      bars = [];
      for (let i = 0; i < BAR_COUNT; i++) {
        bars.push({
          height: Math.random() * 0.4 + 0.05,
          targetHeight: Math.random() * 0.4 + 0.05,
          speed: Math.random() * 0.03 + 0.01,
          phase: (i / BAR_COUNT) * Math.PI * 2,
          colorIndex: Math.floor(Math.random() * COLORS.length),
        });
      }
    };

    resize();

    let t = 0;
    const draw = () => {
      t += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const barWidth = w / BAR_COUNT;
      const maxBarH = h * 0.45;
      const centerY = h * 0.5;

      bars.forEach((bar, i) => {
        if (Math.random() < 0.04) {
          bar.targetHeight = Math.random() * 0.5 + 0.05;
        }
        bar.height += (bar.targetHeight - bar.height) * bar.speed;

        const wave = Math.sin(t + bar.phase) * 0.15;
        const finalH = Math.max(0.02, bar.height + wave) * maxBarH;

        const x = i * barWidth;
        const color = COLORS[bar.colorIndex];
        const alpha = 0.25 + bar.height * 0.5;

        const grad = ctx.createLinearGradient(0, centerY - finalH, 0, centerY + finalH);
        grad.addColorStop(0, `rgba(${color[0]},${color[1]},${color[2]},0)`);
        grad.addColorStop(0.3, `rgba(${color[0]},${color[1]},${color[2]},${alpha})`);
        grad.addColorStop(0.5, `rgba(${color[0]},${color[1]},${color[2]},${alpha * 1.4})`);
        grad.addColorStop(0.7, `rgba(${color[0]},${color[1]},${color[2]},${alpha})`);
        grad.addColorStop(1, `rgba(${color[0]},${color[1]},${color[2]},0)`);

        ctx.fillStyle = grad;
        const bw = barWidth * 0.55;
        const bx = x + (barWidth - bw) / 2;
        const radius = bw * 0.3;

        ctx.beginPath();
        ctx.moveTo(bx + radius, centerY - finalH);
        ctx.lineTo(bx + bw - radius, centerY - finalH);
        ctx.quadraticCurveTo(bx + bw, centerY - finalH, bx + bw, centerY - finalH + radius);
        ctx.lineTo(bx + bw, centerY + finalH - radius);
        ctx.quadraticCurveTo(bx + bw, centerY + finalH, bx + bw - radius, centerY + finalH);
        ctx.lineTo(bx + radius, centerY + finalH);
        ctx.quadraticCurveTo(bx, centerY + finalH, bx, centerY + finalH - radius);
        ctx.lineTo(bx, centerY - finalH + radius);
        ctx.quadraticCurveTo(bx, centerY - finalH, bx + radius, centerY - finalH);
        ctx.closePath();
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.18 }}
    />
  );
}
