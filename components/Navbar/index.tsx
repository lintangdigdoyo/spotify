import classNames from "classnames";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import SpotifyIcon from "assets/svg/SpotifyIcon";

import Link from "../Common/Link";

const Navbar = () => {
  const [isPositionOnTop, setIsPositionOnTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsPositionOnTop(latest === 0);
  });

  return (
    <header
      className={classNames(
        "fixed top-0 z-30 h-20 w-full px-10 transition-colors duration-300",
        {
          ["bg-background-main"]: !isPositionOnTop,
        }
      )}
    >
      <nav className="h-full">
        <ul className="flex h-full items-center">
          <li>
            <Link aria-label="spotify logo" href="/">
              <SpotifyIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
