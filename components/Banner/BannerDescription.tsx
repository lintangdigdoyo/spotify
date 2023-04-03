import { motion } from "framer-motion";

import { itemVariants } from ".";
import Typography from "components/Common/Typography";

interface BannerDescriptionProps {
  children: React.ReactNode;
}

const BannerDescription = ({ children }: BannerDescriptionProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Typography type="p" variant="paragraph2" bold="semi" className="px-20">
        {children}
      </Typography>
    </motion.div>
  );
};

export default BannerDescription;
