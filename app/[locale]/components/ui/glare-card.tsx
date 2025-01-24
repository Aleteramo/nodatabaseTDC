'use client';

import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const isTouchDevice = useRef(false);
  const animationFrame = useRef<number>();
  
  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice.current) {
      const handleScroll = () => {
        if (refElement.current) {
          const rect = refElement.current.getBoundingClientRect();
          const centerY = window.innerHeight / 2;
          const elementCenterY = rect.top + rect.height / 2;
          const distanceFromCenter = elementCenterY - centerY;
          const maxDistance = window.innerHeight / 2;
          
          // Calcola l'angolo di rotazione basato sulla posizione dello scroll
          // Più la card è lontana dal centro, più ruoterà
          const rotationX = (distanceFromCenter / maxDistance) * 15; // max 15 gradi
          
          // Aggiungi una leggera rotazione Y basata sulla posizione orizzontale
          const rotationY = Math.sin(Date.now() / 2000) * 5; // oscillazione leggera di ±5 gradi
          
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            refElement.current.style.setProperty("--r-x", `${rotationX}deg`);
            refElement.current.style.setProperty("--r-y", `${rotationY}deg`);
            // Riduciamo drasticamente l'opacità del glare
            refElement.current.style.setProperty("--opacity", "0.1");
          }
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Controlla inizialmente la posizione
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "12px",
    "--easing": "cubic-bezier(0.4, 0, 0.2, 1)",
    "--transition": "var(--duration) var(--easing)",
  } as any;

  return (
    <div
      style={containerStyle}
      className={cn(
        "relative isolate transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-full h-full",
        !isTouchDevice.current && "[perspective:600px]"
      )}
      ref={refElement}
      onPointerMove={(event) => {
        if (!isTouchDevice.current) {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotationY = ((x - centerX) / centerX) * 15;
          const rotationX = ((y - centerY) / centerY) * -15;

          event.currentTarget.style.setProperty("--r-x", `${rotationX}deg`);
          event.currentTarget.style.setProperty("--r-y", `${rotationY}deg`);
          event.currentTarget.style.setProperty("--opacity", "0.1");
        }
      }}
      onPointerLeave={() => {
        if (!isTouchDevice.current && refElement.current) {
          refElement.current.style.setProperty("--r-x", "0deg");
          refElement.current.style.setProperty("--r-y", "0deg");
          refElement.current.style.setProperty("--opacity", "0");
        }
      }}
    >
      <div className={cn(
        "h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)]",
        "[transform:rotateY(var(--r-y))_rotateX(var(--r-x))]",
        "rounded-[var(--radius)] border border-gold/30 hover:border-gold/60 overflow-hidden"
      )}>
        <div className="w-full h-full grid [grid-area:1/1]">
          <div className={cn("h-full w-full", className)}>
            {children}
          </div>
        </div>
        <div 
          className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)]"
          style={{
            background: "radial-gradient(circle at var(--m-x) var(--m-y), rgba(255,255,255,0.1) 0%, transparent 50%)"
          }}
        />
      </div>
    </div>
  );
};