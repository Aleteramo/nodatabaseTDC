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
      let startTime = Date.now();
      let progress = 0;
      
      const animate = () => {
        const now = Date.now();
        progress = ((now - startTime) % 3000) / 3000; // 3 secondi per ciclo completo
        
        if (refElement.current && refElement.current.getBoundingClientRect().top < window.innerHeight) {
          // Movimento circolare del glare
          const angle = progress * 2 * Math.PI;
          const x = 50 + Math.cos(angle) * 30; // Raggio X
          const y = 50 + Math.sin(angle) * 20; // Raggio Y
          
          refElement.current.style.setProperty("--m-x", `${x}%`);
          refElement.current.style.setProperty("--m-y", `${y}%`);
          refElement.current.style.setProperty("--bg-x", `${x}%`);
          refElement.current.style.setProperty("--bg-y", `${y}%`);
          
          // Aggiungiamo una leggera oscillazione
          const tiltX = Math.sin(angle) * 2;
          const tiltY = Math.cos(angle) * 2;
          refElement.current.style.setProperty("--r-x", `${tiltX}deg`);
          refElement.current.style.setProperty("--r-y", `${tiltY}deg`);
          
          // Pulsazione dell'opacità
          const opacity = 0.3 + Math.sin(angle) * 0.2;
          refElement.current.style.setProperty("--opacity", opacity.toString());
        }
        
        animationFrame.current = requestAnimationFrame(animate);
      };
      
      const handleScroll = () => {
        if (refElement.current) {
          const rect = refElement.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible && !animationFrame.current) {
            startTime = Date.now() - (progress * 3000); // Mantiene la continuità dell'animazione
            animate();
          } else if (!isVisible && animationFrame.current) {
            cancelAnimationFrame(animationFrame.current);
            animationFrame.current = undefined;
          }
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Controlla inizialmente se la card è visibile
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current);
        }
      };
    }
  }, []);

  const state = useRef({
    glare: {
      x: 50,
      y: 50,
    },
    background: {
      x: 50,
      y: 50,
    },
    rotate: {
      x: 0,
      y: 0,
    },
  });

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

  const backgroundStyle = {
    "--step": "5%",
    "--rainbow": "repeating-linear-gradient(0deg,rgb(255,119,115) calc(var(--step) * 1),rgba(255,237,95,1) calc(var(--step) * 2),rgba(168,255,95,1) calc(var(--step) * 3),rgba(131,255,247,1) calc(var(--step) * 4),rgba(120,148,255,1) calc(var(--step) * 5),rgb(216,117,255) calc(var(--step) * 6),rgb(255,119,115) calc(var(--step) * 7)) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal": "repeating-linear-gradient(128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12%) var(--bg-x) var(--bg-y)/300% no-repeat",
    "--shade": "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120%) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "hue, hue, overlay",
  };

  const updateStyles = (x: number, y: number, isTouch = false) => {
    if (refElement.current) {
      const rect = refElement.current.getBoundingClientRect();
      const position = {
        x: x - rect.left,
        y: y - rect.top,
      };
      const percentage = {
        x: (100 / rect.width) * position.x,
        y: (100 / rect.height) * position.y,
      };
      const delta = {
        x: percentage.x - 50,
        y: percentage.y - 50,
      };

      const { background, rotate, glare } = state.current;
      background.x = 50 + percentage.x / 4 - 12.5;
      background.y = 50 + percentage.y / 3 - 16.67;
      
      if (!isTouch) {
        const rotateFactor = 0.4;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;
      }
      
      glare.x = percentage.x;
      glare.y = percentage.y;

      refElement.current?.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current?.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current?.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current?.style.setProperty("--bg-y", `${background.y}%`);
    }
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
          updateStyles(event.clientX, event.clientY);
        }
      }}
      onTouchMove={(event) => {
        const touch = event.touches[0];
        updateStyles(touch.clientX, touch.clientY, true);
      }}
      onPointerEnter={() => {
        if (!isTouchDevice.current) {
          isPointerInside.current = true;
          if (refElement.current) {
            setTimeout(() => {
              if (isPointerInside.current) {
                refElement.current?.style.setProperty("--duration", "0s");
              }
            }, 300);
          }
        }
      }}
      onPointerLeave={() => {
        if (!isTouchDevice.current) {
          isPointerInside.current = false;
          if (refElement.current) {
            refElement.current.style.removeProperty("--duration");
            refElement.current?.style.setProperty("--r-x", `0deg`);
            refElement.current?.style.setProperty("--r-y", `0deg`);
          }
        }
      }}
    >
      <div className={cn(
        "h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)]",
        !isTouchDevice.current && "[transform:rotateY(var(--r-x))_rotateX(var(--r-y))]",
        "rounded-[var(--radius)] border border-gold/30 hover:[--opacity:0.6] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden"
      )}>
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
          <div className={cn("h-full w-full", className)}>
            {children}
          </div>
        </div>
        <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]" />
        <div
          className="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-background transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:hue_hue_overlay] [background:var(--rainbow),_var(--diagonal),_var(--shade)] relative after:content-[''] after:absolute after:inset-0 after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] after:bg-[inherit] after:mix-blend-exclusion after:[background-size:200%_400%,_800%,_200%] after:[background-position:0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_hue,_hard-light]"
          style={backgroundStyle}
        />
      </div>
    </div>
  );
};