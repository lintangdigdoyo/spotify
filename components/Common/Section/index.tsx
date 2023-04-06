import { motion, Variants } from "framer-motion";

import Typography from "../Typography";

const featureVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

interface SectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={featureVariant}
      >
        <Typography
          type="h2"
          variant="heading3"
          className="text-center"
          bold="medium"
        >
          {title}
        </Typography>
      </motion.div>
      <div className="my-12">{children}</div>
    </>
  );
};

export default Section;
