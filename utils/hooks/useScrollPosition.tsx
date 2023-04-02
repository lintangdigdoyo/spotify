import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handlePosition = () => {
      setPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handlePosition);

    return () => window.removeEventListener("scroll", handlePosition);
  }, []);

  return position;
};
