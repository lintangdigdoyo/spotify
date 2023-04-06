import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useGetFeaturedPlaylists } from "services/hooks";

import Card from "components/Common/Card";
import Section from "components/Common/Section";
import Typography from "components/Common/Typography";

const FeaturedList = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

  const { data } = useGetFeaturedPlaylists({ limit: 10 });

  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start start", "end start"],
  });

  const scrollHorizontal = useTransform(
    scrollYProgress,
    [0, 1],
    ["120%", "-200%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={featuredRef} className="mt-[50vh] h-[500vh]">
      <div className="sticky left-0 top-20 overflow-hidden">
        <Section
          title={
            <>
              <span className="text-primary-main">Featured</span> Playlists.
            </>
          }
        >
          <motion.div style={{ opacity }}>
            <Typography
              type="h3"
              variant="paragraph1"
              className="mx-10 mb-4 capitalize"
              bold="semi"
            >
              {data?.message}
            </Typography>
            <motion.div
              style={{ x: scrollHorizontal }}
              className="flex select-none gap-8"
            >
              {data?.playlists.items.map((item) => (
                <Card
                  key={item.id}
                  href={item.external_urls.spotify}
                  imgUrl={item.images[0].url}
                  imgAlt={item.name}
                >
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Description>{item.description}</Card.Description>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </Section>
      </div>
    </div>
  );
};

export default FeaturedList;
