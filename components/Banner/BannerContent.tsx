import { Variants, motion } from "framer-motion";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
    },
  },
};

interface BannerContentProps {
  children: React.ReactNode;
}

const BannerContent = ({ children }: BannerContentProps) => {
  return <motion.div variants={itemVariants}>{children}</motion.div>;
};

export default BannerContent;
