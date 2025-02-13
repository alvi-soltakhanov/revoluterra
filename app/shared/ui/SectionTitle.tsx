interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="m-0 text-inherit text-lg lg:text-2xl font-semibold mb-6">
      {title}
    </h2>
  );
};