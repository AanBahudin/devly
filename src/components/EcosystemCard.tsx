interface EcosystemCardProps {
  image: string;
  title: string;
  description?: string;
  alt: string;
  coming?: boolean;
}

const EcosystemCard = ({
  image,
  title,
  description,
  alt,
  coming = false,
}: EcosystemCardProps) => {
  return (
    <div className="p-1 flex flex-col border border-border/50 rounded-xl bg-white">
      <img
        className="aspect-video object-cover rounded-lg border border-border/50"
        src={image}
        alt={alt}
      />
      <div className="p-5 w-full flex flex-col gap-2">
        {coming && (
          <div className="w-fit px-3 py-1 flex gap-2 items-center border border-border rounded-lg bg-accent/5">
            <p className="text-xs font-medium text-accent">Coming Soon</p>
          </div>
        )}
        <h1 className="text-[28px] font-medium text-foreground">{title}</h1>
        <p className="font-medium text-muted-foreground/80">{description}</p>
      </div>
    </div>
  );
};

export default EcosystemCard;
