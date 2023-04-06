import classNames from "classnames";
import { CSSProperties } from "react";

import Typography from "../Typography";

interface ListProps {
  genres: string[];
  activeIndex: number;
}

const List = ({ genres, activeIndex }: ListProps) => {
  return (
    <ul>
      {genres.map((item, index) => (
        <li key={index} className="relative flex h-14 flex-col justify-center">
          <Typography
            style={
              {
                "--brightness-percentage": activeIndex === index ? 1 : 0.5,
              } as CSSProperties
            }
            bold={activeIndex === index ? "medium" : undefined}
            className={classNames(
              "capitalize",
              /** before */
              "before:absolute before:-left-4 before:bottom-0 before:h-full before:content-['']",
              "before:border-l-[3px] before:border-l-primary-main before:brightness-50 ",
              /** after */
              "after:absolute after:-left-[21px] after:top-1/3 after:h-3 after:w-3 after:rounded-full after:content-['']",
              "after:bg-primary-main after:brightness-[var(--brightness-percentage)] "
            )}
          >
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default List;
