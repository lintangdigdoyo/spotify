import Banner from "components/Banner";
import TextSection from "components/Common/TextSection";
import FeaturedList from "components/FeaturedList";
import GenreList from "components/GenreList";
import NewRelease from "components/NewRelease";
import Seo from "components/Seo";
import Subscribe from "components/Subscribe";

const Landing = () => {
  return (
    <>
      <Seo />

      <Banner imgUrl="/images/banner.jpg">
        <Banner.Title>
          Stream Your Favorite Music Anytime, Anywhere with{" "}
          <span className="text-primary-main">Spotify</span>
        </Banner.Title>
        <Banner.Description>
          Get instant access to millions of songs and podcasts, personalized
          just for you.
        </Banner.Description>
        <Banner.Button href="https://open.spotify.com">
          Start Listening Now
        </Banner.Button>
      </Banner>
      <TextSection>
        Experience an unrivaled world of music and podcasts at your fingertips
        with <span className="text-primary-main">Spotify</span>
      </TextSection>
      <FeaturedList />
      <GenreList />
      <NewRelease />
      <Subscribe />
    </>
  );
};

export default Landing;
