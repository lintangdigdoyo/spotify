import classNames from "classnames";
import Link from "next/link";

import { useScrollPosition } from "utils/hooks/useScrollPosition";

import SpotifyIcon from "assets/svg/SpotifyIcon";

const Navbar = () => {
  const position = useScrollPosition();
  const isPositionOnTop = position === 0;

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
