import Image from "next/image";
import { Variants, motion } from "framer-motion";

import BannerDescription from "./BannerDescription";
import BannerTitle from "./BannerTitle";
import BannerButton from "./BannerButton";

export const itemVariants: Variants = {
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

interface BannerProps {
  imgUrl: string;
  children?: React.ReactNode;
}

const Banner = ({ imgUrl, children }: BannerProps) => {
  return (
    <div className="relative left-0 top-0 flex h-screen w-full flex-col justify-center">
      <motion.div
        className="z-10 flex flex-col items-center justify-center gap-6 text-center lg:mx-80"
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.3,
          staggerChildren: 0.1,
        }}
      >
        {children}
      </motion.div>
      <Image
        className="object-cover object-top brightness-50"
        src={imgUrl}
        alt="banner"
        fill
        priority
      />
    </div>
  );
};

Banner.Title = BannerTitle;
Banner.Description = BannerDescription;
Banner.Button = BannerButton;

export default Banner;
