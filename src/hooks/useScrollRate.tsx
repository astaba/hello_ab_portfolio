import { useState, useEffect } from "react";

const useScrollRate = () => {
  const [scrollRate, setScrollRate] = useState(0);
  useEffect(() => {
    // Compute scroll rate
    const updateScrollRate = () => {
      const viewportYoffset = window.scrollY;
      const pageScrollLength = document.body.scrollHeight - window.innerHeight;
      if (pageScrollLength <= 0) return;
      setScrollRate(Math.round(Math.min(+(viewportYoffset / pageScrollLength).toFixed(2) * 100, 100)));
    };
    updateScrollRate();
    // NOTE:  Throttling scroll event to debounce updateScrollRate
    let pageScroll = false;
    const truthyfier = () => pageScroll = true;
    window.addEventListener("scroll", truthyfier);
    const timer = setInterval(() => {
      if (pageScroll) {
        pageScroll = false;
        updateScrollRate();
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
