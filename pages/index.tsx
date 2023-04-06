import Head from "next/head";

import Banner from "components/Banner";
import TextSection from "components/Common/TextSection";
import FeaturedList from "components/FeaturedList";
import GenreList from "components/GenreList";
import NewRelease from "components/NewRelease";

const Landing = () => {
  return (
    <>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner imgUrl="/images/banner.jpg">
        <Banner.Title>
          <span className="text-primary-main">Spotify</span> dolor sit amet,
          consectetur adipisicing elit.
        </Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum
          consequatur adipisci, eligendi magni praesentium ullam
        </Banner.Description>
        <Banner.Button>Try Now</Banner.Button>
      </Banner>
      <TextSection>
        Lorem ipsum dolor <span className="text-primary-main">sit amet</span>
      </TextSection>
      <FeaturedList />
      <GenreList />
      <NewRelease />
    </>
  );
};

export default Landing;
