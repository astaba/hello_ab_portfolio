import { useState, useEffect } from "react";

const useScrollRate = () => {
  const [scrollRate, setScrollRate] = useState(0);
  useEffect(() => {
    // Compute scroll rate
    const computeScrollRate = () => {
      const viewportYoffset = window.scrollY;
      const pageScrollLength = document.body.scrollHeight - window.innerHeight;
      if (pageScrollLength <= 0) return;
      setScrollRate(Math.round(Math.min(+(viewportYoffset / pageScrollLength).toFixed(2) * 100, 100)));
    };
    computeScrollRate();
    // Throttling scroll event
    let pageScroll = false;
    const truthyfier = () => pageScroll = true;
    window.addEventListener("scroll", truthyfier);
    const timer = setInterval(() => {
      if (pageScroll) {
        pageScroll = false;
        computeScrollRate();
      }
    }, 50);
    // Clean up
    return () => {
      window.removeEventListener("scroll", truthyfier);
      clearInterval(timer);
    };
  }, []);

  return scrollRate;
};

export default useScrollRate;
