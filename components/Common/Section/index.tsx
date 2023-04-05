import Typography from "../Typography";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="my-12">
      <Typography
        type="h3"
        variant="paragraph1"
        className="mx-10 mb-4 capitalize"
        bold="semi"
      >
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default Section;
