import { motion, Variants } from "framer-motion";

import Typography from "../Typography";

const textSectionVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

interface TextSectionProps {
  children: React.ReactNode;
}

const TextSection = ({ children }: TextSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textSectionVariant}
      className="mx-10 my-[50vh]"
    >
      <Typography type="h2" variant="heading3" className="text-center">
        {children}
      </Typography>
    </motion.div>
  );
};

export default TextSection;
