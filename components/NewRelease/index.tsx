import dayjs from "dayjs";

import { useGetNewReleases } from "services/hooks";

import Card from "components/Common/Card";
import Section from "components/Common/Section";

const NewRelease = () => {
  const { data } = useGetNewReleases({ limit: 3 });

  return (
    <div className="mt-[50vh]">
      <Section
        title={
          <>
            <span className="text-primary-main">New</span> Release.
          </>
        }
        isSticky={false}
      >
        <div className="flex flex-wrap items-start justify-center gap-8">
          {data?.albums.items.map((item) => (
            <Card
              key={item.id}
              imgUrl={item.images[0].url}
              href={item.external_urls.spotify}
              imgAlt={item.name}
            >
              <Card.Title>{item.name}</Card.Title>
              <div className="flex justify-between">
                <Card.Description>{item.artists[0].name}</Card.Description>
                <Card.Description>
                  {dayjs(item.release_date).format("DD MMM YYYY")}
                </Card.Description>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default NewRelease;
