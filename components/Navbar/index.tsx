import Link from "next/link";
import classNames from "classnames";

import SpotifyIcon from "assets/svg/SpotifyIcon";
import { useScrollPosition } from "utils/hooks/useScrollPosition";

const Navbar = () => {
  const position = useScrollPosition();
  const isPositionOnTop = position === 0;

  return (
    <header
      className={classNames(
        "w-full h-20 px-10 fixed top-0 z-30 transition-colors duration-300",
        {
          ["bg-background"]: !isPositionOnTop,
        }
      )}
    >
      <nav className="h-full">
        <ul className="flex items-center h-full">
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
