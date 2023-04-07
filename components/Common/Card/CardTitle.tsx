import cnMerge from "utils/cnMerge";

import Typography from "../Typography";

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle = ({ className, children }: CardTitleProps) => {
  return (
    <Typography
      type="h4"
      variant="paragraph3"
      bold="semi"
      className={cnMerge("mb-1 line-clamp-1 capitalize", className)}
    >
      {children}
    </Typography>
  );
};

export default CardTitle;
