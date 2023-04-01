import Link from "next/link";

import SpotifyIcon from "assets/svg/SpotifyIcon";

const Navbar = () => {
  return (
    <header className="w-full h-20 px-10 bg-background">
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
