import cnMerge from "utils/cnMerge";

import Typography from "../Typography";

interface CardDescriptionProps {
  className?: string;
  children: string;
}

const CardDescription = ({ className, children }: CardDescriptionProps) => {
  return (
    <Typography
      variant="caption"
      className={cnMerge("line-clamp-2 brightness-75", className)}
    >
      {children}
    </Typography>
  );
};

export default CardDescription;
