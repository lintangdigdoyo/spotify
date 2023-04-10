import { motion } from "framer-motion";

import Button from "components/Common/Button";
import ButtonLink from "components/Common/Link/ButtonLink";

import { itemVariants } from ".";

interface BannerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
}

const BannerButton = ({ href, children, ...restProps }: BannerButtonProps) => {
  return (
    <motion.div variants={itemVariants}>
      {href !== undefined ? (
        <ButtonLink href={href} externalLink {...restProps}>
          {children}
        </ButtonLink>
      ) : (
        <Button {...restProps}>{children}</Button>
      )}
    </motion.div>
  );
};

export default BannerButton;
