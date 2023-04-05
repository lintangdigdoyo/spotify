import { motion } from "framer-motion";

import Button from "components/Common/Button";

import { itemVariants } from ".";

interface BannerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const BannerButton = ({ children, ...restProps }: BannerButtonProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Button {...restProps}>{children}</Button>
    </motion.div>
  );
};

export default BannerButton;
