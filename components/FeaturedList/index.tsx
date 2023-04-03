import { useGetFeaturedPlaylists } from "services/hooks";

const FeaturedList = () => {
  const { data } = useGetFeaturedPlaylists();

  return <></>;
};

export default FeaturedList;
