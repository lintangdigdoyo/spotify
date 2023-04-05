import classNames from "classnames";
import Image from "next/image";

import CardDescription from "./CardDescription";
import CardTitle from "./CardTitle";

interface CardProps {
  href: string;
  imgUrl: string;
  imgAlt: string;
  children: React.ReactNode;
}

const Card = ({ href, imgUrl, imgAlt, children }: CardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        "w-[190px] min-w-[190px] cursor-pointer rounded bg-background-light/50 p-[14px] transition-colors",
        "first:ml-10 last:mr-10",
        "hover:bg-background-light"
      )}
    >
      <Image
        src={imgUrl}
        className="mx-auto mb-4 rounded object-cover"
        width={165}
        height={165}
        alt={imgAlt}
      />
      {children}
    </a>
  );
};

Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;
