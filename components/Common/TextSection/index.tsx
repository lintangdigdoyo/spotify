import { motion } from "framer-motion";

import Typography from "../Typography";

interface TextSectionProps {
  children: React.ReactNode;
}

const TextSection = ({ children }: TextSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-[50vh]"
    >
      <Typography type="h2" variant="heading3" className="text-center">
        {children}
      </Typography>
    </motion.div>
  );
};

export default TextSection;
