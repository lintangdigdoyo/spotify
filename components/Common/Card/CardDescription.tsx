import Typography from "../Typography";

interface CardDescriptionProps {
  children: string;
}

const CardDescription = ({ children }: CardDescriptionProps) => {
  return (
    <Typography variant="caption" className="line-clamp-2 brightness-75">
      {children}
    </Typography>
  );
};

export default CardDescription;
