import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

import { useGetFeaturedPlaylists } from "services/hooks";

import Card from "components/Common/Card";
import Section from "components/Common/Section";
import Typography from "components/Common/Typography";

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

const FeaturedList = () => {
  const featureRef = useRef<HTMLDivElement>(null);

  const { data } = useGetFeaturedPlaylists({ limit: 10 });

  const { scrollYProgress } = useScroll({
    target: featureRef,
    offset: ["start start", "end start"],
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], ["120%", "-200%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={featureRef} className="mt-[50vh] h-[500vh]">
      <div className="sticky left-0 top-20 overflow-hidden">
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
            <span className="text-primary-main">Featured</span> Playlists.
          </Typography>
        </motion.div>
        <motion.div style={{ opacity }}>
          <Section title={data?.message ?? "Playlists"}>
            <motion.div
              style={{ x: scrollX }}
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
          </Section>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedList;
