import { motion, Variants } from "framer-motion";

import Typography from "../Typography";

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="my-8">
      <motion.div
        className="mx-10 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        <Typography type="h2" variant="heading6" className="capitalize">
          {title}
        </Typography>
      </motion.div>
      {children}
    </div>
  );
};

export default Section;
