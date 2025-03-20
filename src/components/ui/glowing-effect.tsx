"use client";

import React, { useRef, useEffect, useCallback, memo } from "react";
import { cn } from "../../lib/utils";
import { animate } from "motion";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white" | "blue" | "yellow";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export const GlowingEffect = memo(
  ({
    blur = 20,
    inactiveZone = 0.1,
    proximity = 60,
    spread = 40,
    variant = "default",
    glow = true,
    className,
    disabled = false,
    movementDuration = 0.2,
    borderWidth = 1,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const glowRef = useRef<HTMLDivElement>(null);

    const getVariant = (variant: GlowingEffectProps["variant"]) => {
      switch (variant) {
        case "white":
          return "255 255 255";
        case "blue":
          return "56 189 248";
        case "yellow":
          return "250 204 21";
        default:
          return "255 255 255";
      }
    };

    const rgb = getVariant(variant);

    const handlePointerMove = useCallback(
      (e: PointerEvent) => {
        if (disabled || !containerRef.current || !glowRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        pointerRef.current = { x, y };

        let left = 0;
        let top = 0;
        let opacity = 0;

        // Check if the pointer is within the acceptable zone
        const relativeX = x / rect.width;
        const relativeY = y / rect.height;
        const isWithinActiveZone =
          relativeX >= inactiveZone &&
          relativeX <= 1 - inactiveZone &&
          relativeY >= inactiveZone &&
          relativeY <= 1 - inactiveZone;

        if (isWithinActiveZone) {
          left = x;
          top = y;
          // Ensure the position is always centered on the pointer
          if (glowRef.current) {
            left = x;
            top = y;
            opacity = 1;
          }
        }

        if (glowRef.current) {
          animate(
            glowRef.current,
            {
              left,
              top,
              opacity,
              x: "-50%",
              y: "-50%",
            },
            { duration: movementDuration }
          );
        }
      },
      [inactiveZone, disabled, movementDuration]
    );

    const handleScroll = useCallback(() => {
      if (
        !disabled &&
        containerRef.current &&
        glowRef.current &&
        "animate" in window
      ) {
        const rect = containerRef.current.getBoundingClientRect();

        if (
          rect.top > window.innerHeight ||
          rect.bottom < 0 ||
          rect.left > window.innerWidth ||
          rect.right < 0
        ) {
          return;
        }

        const x = pointerRef.current.x;
        const y = pointerRef.current.y;

        requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.left = `${x}px`;
            glowRef.current.style.top = `${y}px`;
          }
        });
      }
    }, [disabled]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      container.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("scroll", handleScroll, true);

      return () => {
        container.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("scroll", handleScroll, true);
      };
    }, [handlePointerMove, handleScroll]);

    return (
      <div ref={containerRef} className={cn("absolute inset-0", className)}>
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 left-1/2 top-1/2 h-min-content w-min-content -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            width: `${spread * 2}px`,
            height: `${spread * 2}px`,
            backgroundImage: glow
              ? `radial-gradient(circle at center, rgba(${rgb}, 0.8) 0%, rgba(${rgb}, 0) 60%)`
              : "none",
            filter: `blur(${blur}px)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            borderRadius: "inherit",
            border: `${borderWidth}px solid rgba(${rgb}, 0.6)`,
            opacity: 0.2,
          }}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect"; 