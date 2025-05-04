import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Hook to detect when a ref enters the viewport and update a key to trigger animations.
 */
export function useScrollAnimation(ref) {
  const isInView = useInView(ref, {
    margin: "0px 0px -20% 0px",
  });

  const [visibleKey, setVisibleKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setVisibleKey((prev) => prev + 1);
    }
  }, [isInView]);

  return visibleKey;
}
