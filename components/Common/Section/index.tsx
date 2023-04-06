import classNames from "classnames";
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
  innerRef?: React.RefObject<HTMLDivElement>;
  isSticky?: boolean;
  children: React.ReactNode;
}

const Section = ({
  title,
  innerRef,
  isSticky = true,
  children,
}: SectionProps) => {
  return (
    <div
      ref={innerRef}
      className={classNames({
        ["mt-[50vh] h-[500vh]"]: isSticky,
      })}
    >
      <div
        className={classNames("left-0 top-20 overflow-hidden", {
          ["sticky"]: isSticky,
        })}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={featureVariant}
          className="mx-10"
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
      </div>
    </div>
  );
};

export default Section;
