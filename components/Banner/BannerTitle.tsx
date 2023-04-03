import { motion } from "framer-motion";

import { itemVariants } from ".";
import Typography from "components/Common/Typography";

interface BannerTitleProps {
  children: React.ReactNode;
}

const BannerTitle = ({ children }: BannerTitleProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Typography type="h1" variant="heading2" bold="medium">
        {children}
      </Typography>
    </motion.div>
  );
};

export default BannerTitle;
