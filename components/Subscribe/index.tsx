import { motion, Variants } from "framer-motion";

import ButtonLink from "components/Common/Link/ButtonLink";
import Typography from "components/Common/Typography";

const subscribeVariant: Variants = {
  hidden: {
    opacity: 0,
    translateY: 20,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

const Subscribe = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      }}
      className="mx-10 flex h-screen flex-col items-center justify-center gap-6 lg:mx-[25%]"
    >
      <motion.div variants={subscribeVariant}>
        <Typography variant="heading5" className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          sed, quibusdam eligendi distinctio at labore.
        </Typography>
      </motion.div>
      <motion.div variants={subscribeVariant}>
        <ButtonLink
          variant="outlined"
          href="https://open.spotify.com"
          externalLink
        >
          Try Now
        </ButtonLink>
      </motion.div>
    </motion.div>
  );
};

export default Subscribe;
