import NextLink from "next/link";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  externalLink?: boolean;
  href: string;
  children: React.ReactNode;
}

const Link = ({ externalLink, href, children, ...restProps }: LinkProps) => {
  if (externalLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...restProps}>
      {children}
    </NextLink>
  );
};

export default Link;
