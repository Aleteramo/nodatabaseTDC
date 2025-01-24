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
    "--foil-size": "120%", // Increased foil size for more glare effect
    "--opacity": "0.1", // Increased opacity for more visibility
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  } as any;

  const backgroundStyle = {
    "--step": "5%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
    "--pattern": "var(--foil-svg) center/100% no-repeat",
    "--rainbow":
        "repeating-linear-gradient( 0deg,rgb(255,119,115) calc(var(--step) * 1),rgba(255,237,95,1) calc(var(--step) * 2),rgba(168,255,95,1) calc(var(--step) * 3),rgba(131,255,247,1) calc(var(--step) * 4),rgba(120,148,255,1) calc(var(--step) * 5),rgb(216,117,255) calc(var(--step) * 6),rgb(255,119,115) calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal":
        "repeating-linear-gradient( 128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    "--shade":
        "radial-gradient( farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.2) 12%,rgba(255,255,255,0.25) 20%,rgba(255,255,255,0.35) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "hue, hue, hue, overlay",
  };

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
        <div 
          className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)]"
          style={{
            ...backgroundStyle,
            background: `var(--rainbow), var(--diagonal), var(--shade), var(--pattern)`
          }}
        />
      </div>
    </div>
  );
};