import Image from "next/image";
import { motion } from "framer-motion";

import BannerContent from "./BannerContent";

interface BannerProps {
  imgUrl: string;
  children?: React.ReactNode;
}

const Banner = ({ imgUrl, children }: BannerProps) => {
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
        {children}
      </motion.div>
      <Image
        className="object-cover object-top brightness-50"
        src={imgUrl}
        alt="hero banner"
        fill
        priority
      />
    </div>
  );
};

Banner.Content = BannerContent;

export default Banner;
