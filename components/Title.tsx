interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-400 mb-4 drop-shadow-md">
      {title}
    </h1>
  );
};
