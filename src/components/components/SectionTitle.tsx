interface Props {
  title: string;
  highlight: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  highlight,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="uppercase tracking-[5px] text-orange-500 text-sm">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-6xl font-black mt-5">
        {title} <span className="text-orange-500">{highlight}</span>
      </h2>
    </div>
  );
}