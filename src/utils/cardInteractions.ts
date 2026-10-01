import { gsap } from "gsap";
import { prefersReducedMotion } from "./gsap-utils";

export interface CardInteractionsOptions {
  maxTilt?: number;
}

export interface CardInteractions {
  destroy(): void;
}

export function initCardInteractions(
  card: HTMLElement,
  options: CardInteractionsOptions = {}
): CardInteractions {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover || prefersReducedMotion()) {
    return { destroy() {} };
  }

  const maxTilt = options.maxTilt ?? 8;
  gsap.set(card, { transformPerspective: 800 });

  const rotateXTo = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power2.out" });
  const rotateYTo = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power2.out" });

  const onMouseMove = (event: MouseEvent) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateYTo(x * maxTilt * 2);
    rotateXTo(-y * maxTilt * 2);
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const onMouseLeave = () => {
    rotateXTo(0);
    rotateYTo(0);
  };

  card.addEventListener("mousemove", onMouseMove);
  card.addEventListener("mouseleave", onMouseLeave);

  return {
    destroy() {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
      gsap.set(card, { rotationX: 0, rotationY: 0 });
    },
  };
}
