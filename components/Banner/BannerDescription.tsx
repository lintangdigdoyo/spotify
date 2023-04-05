import { motion } from "framer-motion";

import Typography from "components/Common/Typography";

import { itemVariants } from ".";

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
