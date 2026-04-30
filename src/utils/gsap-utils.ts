/**
 * Utility to check if user prefers reduced motion
 * Use this to adjust animation behavior (keep animations running but make them instant/invisible)
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Get GSAP animation properties that respect reduced motion
 * When reduced motion is preferred, animations still run but complete instantly
 * @param defaultEase - Default ease function
 * @param defaultDuration - Default duration in seconds
 * @returns Object with appropriate duration and ease settings
 */
export const getReducedMotionConfig = (
  defaultEase?: string,
  defaultDuration?: number
) => {
  const reduced = prefersReducedMotion();
  return {
    // Keep animations running but make them instant when reduced motion
    duration: reduced ? 0.01 : defaultDuration,
    ease: reduced ? "none" : defaultEase,
  };
};
