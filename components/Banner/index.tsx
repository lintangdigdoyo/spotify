import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import BannerButton from "./BannerButton";
import BannerDescription from "./BannerDescription";
import BannerTitle from "./BannerTitle";

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface BannerProps {
  imgUrl: string;
  children?: React.ReactNode;
}

const Banner = ({ imgUrl, children }: BannerProps) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <motion.div
      ref={bannerRef}
      style={{ opacity }}
      className="relative left-0 top-0 flex h-screen w-full flex-col justify-center"
    >
      <motion.div
        style={{ scale }}
        className="z-10 mx-10 flex flex-col items-center justify-center gap-6 text-center lg:mx-80"
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
    </motion.div>
  );
};

Banner.Title = BannerTitle;
Banner.Description = BannerDescription;
Banner.Button = BannerButton;

export default Banner;
