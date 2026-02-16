"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */
interface Star {
  x: number;
  y: number;
  r: number;
  speed: number;
  opacity: number;
}

interface Asteroid {
  x: number;
  y: number;
  r: number;
  speed: number;
  rotation: number;
  rotSpeed: number;
  vertices: number[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  r: number;
  color: string;
}

type GameState = "idle" | "playing" | "over";

/* ──────────────────────────────────────────────
   Constants
   ────────────────────────────────────────────── */
const SHIP_SIZE = 18;
const STAR_COUNT = 120;
const PARTICLE_COLORS = ["#5BBF8A", "#3A9B6B", "#A3DCBE", "#C4A35A", "#E2D1A0"];

/* ──────────────────────────────────────────────
   Helpers
   ────────────────────────────────────────────── */
function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createStar(w: number, h: number): Star {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: rand(0.4, 1.6),
    speed: rand(0.15, 0.6),
    opacity: rand(0.3, 0.9),
  };
}

function createAsteroid(w: number, h: number, speedMul: number): Asteroid {
  const r = rand(14, 38);
  const vCount = Math.floor(rand(6, 10));
  const vertices: number[] = [];
  for (let i = 0; i < vCount; i++) {
    vertices.push(rand(0.7, 1.3));
  }
  return {
    x: w + r,
    y: rand(r, h - r),
    r,
    speed: rand(1.5, 3.5) * speedMul,
    rotation: 0,
    rotSpeed: rand(-0.02, 0.02),
    vertices,
  };
}

function createParticle(x: number, y: number): Particle {
  const angle = rand(0, Math.PI * 2);
  const speed = rand(1, 4);
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 1,
    maxLife: rand(0.4, 1),
    r: rand(1, 3),
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
  };
}

function circlesOverlap(
  x1: number, y1: number, r1: number,
  x2: number, y2: number, r2: number,
) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy) < r1 + r2 - 4;
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const gameStateRef = useRef<GameState>("idle");
  const scoreRef = useRef(0);
  const shipY = useRef(0);
  const keysRef = useRef<Set<string>>(new Set());
  const touchY = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);
  const spawnTimer = useRef(0);
  const animRef = useRef(0);

  /* Sync React state to refs */
  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);

  /* Load high score */
  useEffect(() => {
    try {
      const stored = localStorage.getItem("madar-404-highscore");
      if (stored) setHighScore(parseInt(stored, 10));
    } catch { /* ignore */ }
  }, []);

  /* ── Start game ── */
  const startGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const h = canvas.height;
    shipY.current = h / 2;
    asteroidsRef.current = [];
    particlesRef.current = [];
    scoreRef.current = 0;
    frameRef.current = 0;
    spawnTimer.current = 0;
    setScore(0);
    setGameState("playing");
  }, []);

  /* ── Game loop ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* Resize */
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      /* Re-create stars on resize */
      starsRef.current = Array.from({ length: STAR_COUNT }, () =>
        createStar(canvas.width, canvas.height),
      );
      if (gameStateRef.current === "idle") {
        shipY.current = canvas.height / 2;
      }
    }
    resize();
    window.addEventListener("resize", resize);

    /* Keyboard */
    function onKeyDown(e: KeyboardEvent) {
      keysRef.current.add(e.key);
      if (
        (e.key === " " || e.key === "Enter") &&
        gameStateRef.current !== "playing"
      ) {
        startGame();
      }
    }
    function onKeyUp(e: KeyboardEvent) {
      keysRef.current.delete(e.key);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    /* Touch */
    function onTouchStart(e: TouchEvent) {
      if (gameStateRef.current !== "playing") {
        startGame();
        return;
      }
      touchY.current = e.touches[0].clientY;
    }
    function onTouchMove(e: TouchEvent) {
      e.preventDefault();
      touchY.current = e.touches[0].clientY;
    }
    function onTouchEnd() {
      touchY.current = null;
    }
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    /* ── Draw helpers ── */
    function drawShip(cx: number, cy: number) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(cx, cy);
      /* Thruster glow */
      const grd = ctx.createRadialGradient(-SHIP_SIZE, 0, 2, -SHIP_SIZE, 0, SHIP_SIZE * 0.9);
      grd.addColorStop(0, "rgba(58,155,107,0.6)");
      grd.addColorStop(1, "rgba(58,155,107,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(-SHIP_SIZE, 0, SHIP_SIZE * 0.9, 0, Math.PI * 2);
      ctx.fill();
      /* Body */
      ctx.beginPath();
      ctx.moveTo(SHIP_SIZE, 0);
      ctx.lineTo(-SHIP_SIZE * 0.7, -SHIP_SIZE * 0.7);
      ctx.lineTo(-SHIP_SIZE * 0.4, 0);
      ctx.lineTo(-SHIP_SIZE * 0.7, SHIP_SIZE * 0.7);
      ctx.closePath();
      ctx.fillStyle = "#5BBF8A";
      ctx.fill();
      ctx.strokeStyle = "#A3DCBE";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      /* Cockpit */
      ctx.beginPath();
      ctx.arc(SHIP_SIZE * 0.15, 0, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#D5F0E2";
      ctx.fill();
      ctx.restore();
    }

    function drawAsteroid(a: Asteroid) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.rotate(a.rotation);
      ctx.beginPath();
      const vCount = a.vertices.length;
      for (let i = 0; i <= vCount; i++) {
        const angle = (Math.PI * 2 * (i % vCount)) / vCount;
        const vr = a.r * a.vertices[i % vCount];
        const px = Math.cos(angle) * vr;
        const py = Math.sin(angle) * vr;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = "#1A3328";
      ctx.fill();
      ctx.strokeStyle = "#2A7D5B";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }

    /* ── Main loop ── */
    function loop() {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      const state = gameStateRef.current;

      /* Clear */
      ctx.fillStyle = "#050E09";
      ctx.fillRect(0, 0, W, H);

      /* Stars */
      for (const s of starsRef.current) {
        s.x -= s.speed;
        if (s.x < 0) {
          s.x = W;
          s.y = Math.random() * H;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(163,220,190,${s.opacity})`;
        ctx.fill();
      }

      /* Subtle orbit rings (background decoration) */
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = "#5BBF8A";
      ctx.lineWidth = 1;
      const cx = W * 0.3;
      const cy = H * 0.5;
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, 120 * i, 80 * i, 0.3, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      if (state === "idle") {
        /* Floating ship on idle */
        const floatY = H / 2 + Math.sin(Date.now() / 800) * 15;
        drawShip(W * 0.25, floatY);

        /* Title */
        ctx.textAlign = "center";
        ctx.fillStyle = "#A3DCBE";
        ctx.font = `bold ${Math.min(W * 0.2, 180)}px Inter, system-ui, sans-serif`;
        ctx.fillText("404", W / 2, H * 0.38);

        ctx.fillStyle = "#5BBF8A";
        ctx.font = `600 ${Math.min(W * 0.03, 26)}px Inter, system-ui, sans-serif`;
        ctx.fillText("Lost in orbit", W / 2, H * 0.38 + 40);

        ctx.fillStyle = "#3A9B6B";
        ctx.font = `400 ${Math.min(W * 0.02, 16)}px Inter, system-ui, sans-serif`;
        ctx.fillText(
          "The page you're looking for has drifted into deep space.",
          W / 2,
          H * 0.38 + 72,
        );

        /* Start prompt */
        const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 500);
        ctx.fillStyle = `rgba(91,191,138,${0.5 + pulse * 0.5})`;
        ctx.font = `500 ${Math.min(W * 0.022, 18)}px Inter, system-ui, sans-serif`;
        ctx.fillText(
          "Press SPACE or tap to dodge asteroids",
          W / 2,
          H * 0.62,
        );

        if (highScore > 0) {
          ctx.fillStyle = "#C4A35A";
          ctx.font = `400 ${Math.min(W * 0.017, 14)}px Inter, system-ui, sans-serif`;
          ctx.fillText(`Best score: ${highScore}`, W / 2, H * 0.62 + 30);
        }
      }

      if (state === "playing") {
        frameRef.current++;
        const frame = frameRef.current;
        const speedMul = 1 + frame / 1500; // gradually harder

        /* Ship movement */
        const keys = keysRef.current;
        const moveSpeed = 5;
        if (keys.has("ArrowUp") || keys.has("w") || keys.has("W")) {
          shipY.current -= moveSpeed;
        }
        if (keys.has("ArrowDown") || keys.has("s") || keys.has("S")) {
          shipY.current += moveSpeed;
        }
        /* Touch: move toward finger */
        if (touchY.current !== null) {
          const diff = touchY.current - shipY.current;
          shipY.current += diff * 0.1;
        }
        /* Clamp */
        shipY.current = Math.max(SHIP_SIZE, Math.min(H - SHIP_SIZE, shipY.current));

        /* Spawn asteroids */
        spawnTimer.current--;
        if (spawnTimer.current <= 0) {
          asteroidsRef.current.push(createAsteroid(W, H, speedMul));
          spawnTimer.current = Math.max(15, 50 - frame / 60);
        }

        /* Update & draw asteroids */
        const shipX = W * 0.15;
        let hit = false;
        asteroidsRef.current = asteroidsRef.current.filter((a) => {
          a.x -= a.speed;
          a.rotation += a.rotSpeed;
          if (a.x < -a.r * 2) return false;
          if (circlesOverlap(shipX, shipY.current, SHIP_SIZE * 0.55, a.x, a.y, a.r * 0.75)) {
            hit = true;
          }
          drawAsteroid(a);
          return true;
        });

        /* Thruster particles */
        if (frame % 2 === 0) {
          particlesRef.current.push(createParticle(shipX - SHIP_SIZE, shipY.current));
        }

        /* Draw ship */
        drawShip(shipX, shipY.current);

        /* Score */
        if (frame % 3 === 0) {
          scoreRef.current++;
          setScore(scoreRef.current);
        }

        /* Score display */
        ctx.textAlign = "right";
        ctx.fillStyle = "#A3DCBE";
        ctx.font = `600 ${Math.min(W * 0.025, 22)}px Inter, system-ui, sans-serif`;
        ctx.fillText(`Score: ${scoreRef.current}`, W - 30, 40);

        /* Collision */
        if (hit) {
          /* Explosion particles */
          for (let i = 0; i < 30; i++) {
            particlesRef.current.push(createParticle(shipX, shipY.current));
          }
          /* High score */
          const final = scoreRef.current;
          if (final > highScore) {
            setHighScore(final);
            try {
              localStorage.setItem("madar-404-highscore", String(final));
            } catch { /* ignore */ }
          }
          setGameState("over");
        }
      }

      if (state === "over") {
        /* Show the asteroids still drifting */
        asteroidsRef.current = asteroidsRef.current.filter((a) => {
          a.x -= a.speed * 0.3;
          a.rotation += a.rotSpeed;
          if (a.x < -a.r * 2) return false;
          drawAsteroid(a);
          return true;
        });

        ctx.textAlign = "center";
        ctx.fillStyle = "#A3DCBE";
        ctx.font = `bold ${Math.min(W * 0.12, 100)}px Inter, system-ui, sans-serif`;
        ctx.fillText("404", W / 2, H * 0.34);

        ctx.fillStyle = "#5BBF8A";
        ctx.font = `600 ${Math.min(W * 0.03, 24)}px Inter, system-ui, sans-serif`;
        ctx.fillText("Ship destroyed!", W / 2, H * 0.34 + 40);

        ctx.fillStyle = "#C4A35A";
        ctx.font = `500 ${Math.min(W * 0.025, 20)}px Inter, system-ui, sans-serif`;
        ctx.fillText(`Score: ${scoreRef.current}`, W / 2, H * 0.5);

        if (scoreRef.current >= highScore && scoreRef.current > 0) {
          ctx.fillStyle = "#E2D1A0";
          ctx.font = `400 ${Math.min(W * 0.018, 15)}px Inter, system-ui, sans-serif`;
          ctx.fillText("New high score!", W / 2, H * 0.5 + 28);
        }

        const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 500);
        ctx.fillStyle = `rgba(91,191,138,${0.5 + pulse * 0.5})`;
        ctx.font = `500 ${Math.min(W * 0.02, 16)}px Inter, system-ui, sans-serif`;
        ctx.fillText("Press SPACE or tap to retry", W / 2, H * 0.62);
      }

      /* Particles (all states) */
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1 / (60 * p.maxLife);
        if (p.life <= 0) return false;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx!.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, "0");
        ctx!.fill();
        return true;
      });

      animRef.current = requestAnimationFrame(loop);
    }

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [startGame, highScore]);

  return (
    <html lang="en">
      <head>
        <title>404 — Lost in Orbit | Madar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { overflow: hidden; background: #050E09; font-family: 'Inter', system-ui, sans-serif; }
          canvas { display: block; }
          .home-btn {
            position: fixed;
            bottom: 32px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 32px;
            background: rgba(42, 125, 91, 0.25);
            border: 1px solid rgba(91, 191, 138, 0.3);
            color: #A3DCBE;
            font-family: 'Inter', system-ui, sans-serif;
            font-size: 15px;
            font-weight: 500;
            border-radius: 999px;
            cursor: pointer;
            transition: all 0.25s;
            backdrop-filter: blur(8px);
            text-decoration: none;
            z-index: 10;
          }
          .home-btn:hover {
            background: rgba(42, 125, 91, 0.45);
            border-color: rgba(91, 191, 138, 0.6);
            color: #D5F0E2;
          }
          .score-hud {
            position: fixed;
            top: 20px;
            left: 24px;
            color: #5BBF8A;
            font-family: 'Inter', system-ui, sans-serif;
            font-size: 13px;
            font-weight: 400;
            opacity: 0.6;
            z-index: 10;
            pointer-events: none;
          }
        `}</style>
      </head>
      <body>
        <canvas ref={canvasRef} />
        <div className="score-hud">MADAR</div>
        <a href="/en" className="home-btn">
          Return to orbit
        </a>
      </body>
    </html>
  );
}
