import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Typography from "components/Common/Typography";
import Button from "components/Common/Button";

const ItemVariants: Variants = {
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

const Banner = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-full flex-col justify-center">
      <motion.div
        className="z-10 flex flex-col items-center justify-center gap-6 text-center lg:mx-80"
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.3,
          staggerChildren: 0.1,
        }}
      >
        <motion.div variants={ItemVariants}>
          <Typography type="h1" variant="heading1" bold="medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </motion.div>
        <motion.div variants={ItemVariants}>
          <Typography
            type="p"
            variant="paragraph2"
            bold="semi"
            className="px-40"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum
            consequatur adipisci, eligendi magni praesentium ullam
          </Typography>
        </motion.div>
        <motion.div variants={ItemVariants}>
          <Button>Try Now</Button>
        </motion.div>
      </motion.div>
      <Image
        className="object-cover object-top brightness-50"
        src="/images/banner.jpg"
        alt="hero banner"
        fill
        priority
      />
    </div>
  );
};

export default Banner;
