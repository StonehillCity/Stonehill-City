import { useEffect, useRef } from "react";

export default function Particles() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;

      // Clear existing particles
      particlesRef.current.innerHTML = '';

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 8 + 4) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();

    // Recreate particles periodically
    const interval = setInterval(createParticles, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={particlesRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
