interface DescriptionText {
  description: string;
}
export const DescriptionText = ({ description }: DescriptionText) => {
  return (
    <p className="text-base sm:text-lg md:text-xl text-white mb-6">
      {description}
    </p>
  );
};
