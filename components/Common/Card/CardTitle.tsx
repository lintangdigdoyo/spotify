import Typography from "../Typography";

interface CardTitleProps {
  children: string;
}

const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <Typography
      type="h4"
      variant="paragraph3"
      bold="semi"
      className="mb-1 capitalize"
    >
      {children}
    </Typography>
  );
};

export default CardTitle;
