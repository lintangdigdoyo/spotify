import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import useGetGenres from "services/hooks/useGetGenres";

import List from "components/Common/List";
import Section from "components/Common/Section";

const GenreList = () => {
  const genreRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data } = useGetGenres();

  const { scrollYProgress } = useScroll({
    target: genreRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentIndex(Math.floor(latest * 10));
  });

  const scrollVertical = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <Section
      innerRef={genreRef}
      title={
        <>
          <span className="text-primary-main">Genre</span> of your choice.
        </>
      }
    >
      <div className="overflow-y-hidden">
        <motion.div style={{ y: scrollVertical }} className="ml-[25%] h-[70vh]">
          <List genres={data?.genres ?? []} activeIndex={currentIndex} />
        </motion.div>
      </div>
    </Section>
  );
};

export default GenreList;
