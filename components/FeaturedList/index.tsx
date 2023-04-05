import { useGetFeaturedPlaylists } from "services/hooks";

import Card from "components/Common/Card";
import Section from "components/Common/Section";

const FeaturedList = () => {
  const { data } = useGetFeaturedPlaylists();

  return (
    <Section title={data?.message ?? "Playlists"}>
      <div className="flex select-none gap-8 overflow-x-auto scrollbar-none">
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
      </div>
    </Section>
  );
};

export default FeaturedList;
