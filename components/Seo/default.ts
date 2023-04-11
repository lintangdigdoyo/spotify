export const defaultMeta = {
  title: "Spotify",
  siteName: "Spotify",
  description: "Spotify landing page",
  url: "https://spotify-blond-xi.vercel.app",
  type: "website",
  robots: "index, follow",
  themeColor: "#121212",
  image: "https://spotify-blond-xi.vercel.app/meta/meta.jpg",
  twitter: {
    cardType: "summary_large_image",
  },
};

export const favicons: Array<React.ComponentPropsWithoutRef<"link">> = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "manifest",
    href: "/favicon/site.webmanifest",
  },
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#000000",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
  },
];
