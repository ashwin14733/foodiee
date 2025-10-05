// SmoothWrapper.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Kill any existing smoother to avoid duplication
    if (ScrollSmoother.get()) {
      ScrollSmoother.get().kill();
    }

    // Only apply smooth scroll if not on excluded routes
    if (location.pathname !== "/anothernav") {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
    }
  }, [location.pathname]);

  // Render wrapper structure
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
