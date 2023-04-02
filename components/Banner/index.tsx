import Image from "next/image";

import Typography from "components/Common/Typography";
import Button from "components/Common/Button";

const Banner = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-full flex-col justify-center">
      <div className="z-10 flex flex-col items-center justify-center gap-6 text-center lg:p-80">
        <Typography type="h1" variant="heading1" bold="medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
        <Typography type="p" variant="paragraph2" bold="semi" className="px-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum
          consequatur adipisci, eligendi magni praesentium ullam
        </Typography>
        <Button>Try Now</Button>
      </div>
      <Image
        className="object-cover object-top brightness-50"
        src="/images/banner.jpg"
        alt="hero banner"
        fill
        priority
      />
    </div>
  );
};

export default Banner;
